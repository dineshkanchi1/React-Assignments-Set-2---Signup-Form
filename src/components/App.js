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
    setState({ name: event.target.value });
  };

  const handleEmailChange = (event) => {
    setState({ email: event.target.value });
  };

  const handlePhoneNoChange = (event) => {
    setState({ phNo: event.target.value });
  };

  const handlePasswordChange = (event) => {
    setState({ password: event.target.value });
  };

  const handleChangeValue = (event) => {
    setState({ gender: event.target.value });
  };

  handleSubmit = () => {
    const alphanumeric = /^[0-9a-zA-Z ]+$/;
    const numbers = /^\d+$/;
    if (
      state.name === "" ||
      state.email === "" ||
      state.phNo === "" ||
      state.gender === "" ||
      state.password === ""
    ) {
      setState({ errorMessage: "All fields are mandatory", userName: "" });
      return;
    }
    if (!state.name.match(alphanumeric)) {
      setState({ errorMessage: "Name is not alphanumeric", userName: "" });
      return;
    }
    if (state.email.indexOf("@") < 1) {
      setState({ errorMessage: "Email must contain @", userName: "" });
      return;
    }

    if (!state.gender) {
      setState({
        errorMessage: "Please identify as male, female or others",
        userName: ""
      });
      return;
    }
    if (!numbers.test(state.phNo)) {
      setState({
        errorMessage: "Phone Number must contain only numbers",
        userName: ""
      });
      return;
    }
    if (state.password.length < 6) {
      setState({
        errorMessage: "Password must contain atleast 6 letters",
        userName: ""
      });
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
        onChange={this.handleNameChange}
      />
      <input
        data-testid="email"
        type="text"
        name="email"
        placeholder="Email"
        value={state.email}
        onChange={this.handleEmailChange}
      />
      <input
        data-testid="gender"
        type="text"
        name="gender"
        value={state.gender}
        onChange={this.handleChangeValue}
      />
      <input
        data-testid="phoneNumber"
        type="text"
        name="phoneNumber"
        placeholder="Phone Number"
        value={state.phNo}
        onChange={this.handlePhoneNoChange}
      />
      <input
        data-testid="password"
        type="password"
        name="password"
        placeholder="Password"
        value={state.password}
        onChange={this.handlePasswordChange}
      />
      <button data-testid="submit" onClick={this.handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default App;
