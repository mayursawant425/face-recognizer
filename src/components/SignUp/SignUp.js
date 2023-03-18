import React from "react";


class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: ""
    };
  }

  onNameChange = (event) => {
    this.setState({ name: event.target.value });
  }

  onEmailChange = (event) => {
    this.setState({ email: event.target.value });
  }

  onPasswordChange = (event) => {
    this.setState({ password: event.target.value });
  }

  onSubmitSignUp = () => {
    const { loadUser, onRouteChange } = this.props;
    fetch("http://localhost:3001/signup", {
      method: "POSt",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      })
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          loadUser(data);
          onRouteChange("home");
        }
      });
  }

  render() {
    const { onRouteChange } = this.props;
    return (
      <div className="sign-in-up-wrapper">
        <h1>Sign Up</h1>
        <form className="sign-in-up-form">
          <label htmlFor="name">Name: </label>
          <input
            id="name"
            type="text"
            placeholder="Username"
            onChange={this.onNameChange}
          />
          <label htmlFor="username">Username: </label>
          <input
            id="username"
            type="text"
            placeholder="Username"
            onChange={this.onEmailChange}
          />
          <label htmlFor="password">Password: </label>
          <input
            id="password"
            type="password"
            placeholder="Password"
            onChange={this.onPasswordChange}
          />
          <button
            type="button"
            onClick={this.onSubmitSignUp}
          >Sign Up</button>
          <p onClick={() => onRouteChange("signin")}>Sign In</p>
        </form>
      </div>
    );
  }
}

export default SignUp;