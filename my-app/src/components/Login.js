import { Form, json, redirect } from "react-router-dom";
import axios from "axios";

import classes from './Login.module.css';

const Login = () => {
  return (
    <div className={classes['form-container']}>
      <h3 className={classes['form-title']}>Login</h3>
      <Form method="post" action="/">
        <div className={classes['form-control']}>
          <input type="email" name="email" placeholder="email" />
        </div>
        <div className={classes['form-control']}>
          <input type="password" name="password" placeholder="password" />
        </div>
        <button className={classes['form-submit-btn']}>Authorize</button>
      </Form>
    </div>
  );
};

export async function action({ request }) {
  const formData = await request.formData();

  const requestData = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  try {
    const response = await axios({
      method: "post",
      url: "https://dev-api.zeroeyes.com/api/v1/Account/Login",
      headers: {
        "Content-Type": "application/json",
        Accept: "text/plain",
      },
      data: requestData,
    });

    if (response.status === 200) {
      console.log(response.data);

      const accessToken = response.data.accesstoken;
      localStorage.setItem("token", accessToken);
      const refreshToken = response.data.refreshtoken;
      localStorage.setItem('refreshToken', refreshToken);
      return redirect("/");
    }
  } catch (error) {
    if (error.response.status !== 400) {
      throw json(
        { message: error.response.data },
        { status: error.response.status }
      );
    }

    return error.response.data;
  }
}

export default Login;
