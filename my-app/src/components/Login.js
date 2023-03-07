import { Form, json, redirect } from "react-router-dom";
import axios from 'axios';


const Login = () => {
  return (
    <Form method="post" action="/">
      <div>
        <input type="email" name="email" />
      </div>
      <div>
        <input type="password" name="password" />
      </div>
      <button>Login</button>
    </Form>
  );
};

export async function action({request, params}) {
  const formData = await request.formData();

  const requestData = {
    email: formData.get('email'),
    password: formData.get('password')
  };


    try {
      const response = await axios({
        method: 'post',
        url: 'https://dev-api.zeroeyes.com/api/v1/Account/Login',
        data: requestData
      });
      
      if (response.statusText === 'OK') {
        return redirect('/alerts');
      }

    } catch (error) {
      throw json({message: error.response.data}, {status: 400})
    }

  return null;

} 

export default Login;
