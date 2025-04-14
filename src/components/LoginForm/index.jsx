import { Form } from "react-router-dom";
import "./index.css";
import { useState } from "react";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onChangeUsername = (event) => {
    setUsername(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const renderUserNameField = () => {
    return (
      <>
        <label className="user-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={onChangeUsername}
          placeholder="UserName"
        />
      </>
    );
  };

  const renderPasswordField = () => {
    return (
      <>
        <label className="password-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={onChangePassword}
          placeholder="Password"
        />
      </>
    );
  };

  const submitForm = async(event) => {
    event.preventDefault();

    const userDetails = {username,password}
    const loginApiUrl = 'https://apis.ccbp.in/login'
    const options = {
        method : "POST",
        body : JSON.stringify(userDetails)
    }

    const response = await fetch(loginApiUrl,options)
    const responseData = response.json();
    console.log(responseData);
    if(response.ok == true){
        console.log("login successfull")
    }

  };

  return (
    <div className="login-form-container">
      <form className="form-container" onSubmit={submitForm}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
          className="website-logo"
          alt="website logo"
        />
        <div className="input-container">{renderUserNameField()}</div>
        <div className="input-container">{renderPasswordField()}</div>
        <button className="login-button" type="submit">
          Login
        </button>
        {/* {showSubmitError && <p className="error-message">*{errorMsg}</p>} */}
      </form>
    </div>
  );
};

export default LoginForm;
