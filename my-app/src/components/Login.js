import { Form, json, redirect} from "react-router-dom";
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

export async function action({request}) {
  const formData = await request.formData();

  const requestData = {
    email: formData.get('email'),
    password: formData.get('password')
  };


    try {
      const response = await axios({
        method: 'post',
        url: 'https://dev-api.zeroeyes.com/api/v1/Account/Login',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'text/plain'
        },
        data: requestData
      });
     
      if (response.status === 200) {

        console.log(response.data)

        const accessToken = response.data.accesstoken;
        localStorage.setItem('token', accessToken);
        return redirect('/');
        
      }
    } catch (error) {

      if (error.response.status !== 400) {
        throw json({message: error.response.data}, {status: error.response.status})
      }

      return error.response.data;
    }
} 

export default Login;
