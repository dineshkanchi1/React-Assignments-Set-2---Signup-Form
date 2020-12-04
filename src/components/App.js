import React, { Component, useState } from "react";
import "../styles/App.css";

const App = () => {
  const [state, setState] = React.useState({
    name: "",
    email: "",
    gender: "male",
    phNo: "",
    password: "",
    errorMessage: "",
    userName: ""
  });
  const handleNameChange = (event) => {
    const temp = {
      name: event.target.value,
      email: state.email,
      gender: state.gender,
      phNo: state.phNo,
      password: state.password,
      errorMessage: state.errorMessage,
      userName: state.userName
    };
    setState(temp);
  };

  const handleEmailChange = (event) => {
    const temp = {
      name: state.name,
      email: event.target.value,
      gender: state.gender,
      phNo: state.phNo,
      password: state.password,
      errorMessage: state.errorMessage,
      userName: state.userName
    };
    setState(temp);
  };

  const handlePhoneNoChange = (event) => {
    const temp = {
      name: state.name,
      email: state.email,
      gender: state.gender,
      phNo: event.target.value,
      password: state.password,
      errorMessage: state.errorMessage,
      userName: state.userName
    };
    setState(temp);
  };

  const handlePasswordChange = (event) => {
    const temp = {
      name: state.name,
      email: state.email,
      gender: state.gender,
      phNo: state.phNo,
      password: event.target.value,
      errorMessage: state.errorMessage,
      userName: state.userName
    };
    setState(temp);
  };

  const handleChangeValue = (event) => {
    const temp = {
      name: state.name,
      email: state.email,
      gender: event.target.value,
      phNo: state.phNo,
      password: state.password,
      errorMessage: state.errorMessage,
      userName: state.userName
    };
    setState(temp);
  };

  const handleSubmit = () => {
    const alphanumeric = /^[0-9a-zA-Z ]+$/;
    const numbers = /^\d+$/;
    let temp;
    if (
      state.name === "" ||
      state.email === "" ||
      state.phNo === "" ||
      state.gender === "" ||
      state.password === ""
    ) {
      temp = {
        name: state.name,
        email: event.target.value,
        gender: state.gender,
        phNo: state.phNo,
        password: state.password,
        errorMessage: "All fields are mandatory",
        userName: ""
      };
      setState(temp);
      return;
    }
    if (!state.name.match(alphanumeric)) {
      temp = {
        name: state.name,
        email: event.target.value,
        gender: state.gender,
        phNo: state.phNo,
        password: state.password,
        errorMessage: "Name is not alphanumeric",
        userName: ""
      };
      setState(temp);
      return;
    }
    if (state.email.indexOf("@") < 1) {
      temp = {
        name: state.name,
        email: event.target.value,
        gender: state.gender,
        phNo: state.phNo,
        password: state.password,
        errorMessage: "Email must contain @",
        userName: ""
      };
      setState(temp);
      return;
    }

    if (!state.gender) {
      temp = {
        name: state.name,
        email: event.target.value,
        gender: state.gender,
        phNo: state.phNo,
        password: state.password,
        errorMessage: "Please identify as male, female or others",
        userName: ""
      };
      setState(temp);
      return;
    }
    if (!numbers.test(state.phNo)) {
      temp = {
        name: state.name,
        email: event.target.value,
        gender: state.gender,
        phNo: state.phNo,
        password: state.password,
        errorMessage: "Phone Number must contain only numbers",
        userName: ""
      };
      setState(temp);
      return;
    }
    if (state.password.length < 6) {
      temp = {
        name: state.name,
        email: event.target.value,
        gender: state.gender,
        phNo: state.phNo,
        password: state.password,
        errorMessage: "Password must contain atleast 6 letters",
        userName: ""
      };
      setState(temp);
      return;
    }
    const user = state.email.substring(0, state.email.indexOf("@"));
    setState({
      userName: user,
      errorMessage: "",
      name: "",
      email: "",
      gender: "male",
      phNo: "",
      password: ""
    });
  };

  return (
    <div id="main">
      {state.errorMessage && <div>{state.errorMessage}</div>}
      {state.userName && <div>Hello {state.userName}</div>}
      <input
        data-testid="name"
        type="text"
        name="name"
        placeholder="Name"
        value={state.name}
        onChange={handleNameChange}
      />
      <input
        data-testid="email"
        type="text"
        name="email"
        placeholder="Email"
        value={state.email}
        onChange={handleEmailChange}
      />
      <input
        data-testid="gender"
        type="text"
        name="gender"
        value={state.gender}
        onChange={handleChangeValue}
      />
      <input
        data-testid="phoneNumber"
        type="text"
        name="phoneNumber"
        placeholder="Phone Number"
        value={state.phNo}
        onChange={handlePhoneNoChange}
      />
      <input
        data-testid="password"
        type="password"
        name="password"
        placeholder="Password"
        value={state.password}
        onChange={handlePasswordChange}
      />
      <button data-testid="submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default App;
