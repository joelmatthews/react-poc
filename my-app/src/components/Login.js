import { Form, json, redirect } from "react-router-dom";


const Login = () => {
  return (
    <Form method="post" action="/login">
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

  const body = {
    email: formData.get('email'),
    password: formData.get('password')
  }


  const response = await fetch('https://dev-api.zeroeyes.com/api/v1/Account/Login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'accept': 'text/plain'
    },
    body
  });

  if (!response.ok) {
    throw json({message: 'Unable to Login!'}, {status: response.status})
  }

  const resData = response.json();
  console.log(resData);

  return redirect('/alerts');
} 

export default Login;
