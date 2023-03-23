import { Form, json, redirect } from "react-router-dom";
import axios from "axios";


import AuthRestService from '../services/AuthRestService';

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
    //this is great, but I want you to consider DRY vs WET (Don't Repeat Yourself vs We Enjoy Typing)
    //I'm seeing three results in the project for a string containing "https://dev-api.zeroeyes.com/api/v1/"
    //I recommend something like a "BaseRestService" class that sets the base URL, and content-type,
    //Then you'll have an "AuthRestService" that inherits from BaseRestService, and that class will then implement 
    //the base class and append the version and the name of the actual endpoint.
    //So when this comment is resolved, I'll be looking for - 
    //"BaseRestService" class
    //   this will have at least one string for API_BASE_URL
    //"AuthRestService" class
    //    this will use the API_BASE_URL from the BaseRestService class and ADD two additional properties:
    //    - version
    //    - endpoint
    //"AlertRestService" class
    //   this will use the API_BASE_URL from the BaseRestService class and ADD two additional properties:
    //    - version
    //    - endpoint

    const authRestService = new AuthRestService();

    const loginUrl = authRestService.loginUrl();

    const response = await axios({
      method: "post",
      url: loginUrl,
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
