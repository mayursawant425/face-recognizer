import React from "react";


class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: "",
      signInPassword: ""
    };
  }

  onEmailChange = (event) => {
    this.setState({ signInEmail: event.target.value });
  }

  onPasswordChange = (event) => {
    this.setState({ signInPassword: event.target.value });
  }

  onSubmitSignIn = () => {
    const { loadUser, onRouteChange } = this.props;
    fetch("http://localhost:3001/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
      .then((response) => response.json())
      .then((data) => {
        if (data !== "Incorrect Username Password") {
          loadUser(data);
          onRouteChange("home");
        }
      });
  }

  render() {
    const { onRouteChange } = this.props;
    return (
      <div className="sign-in-up-wrapper">
        <h1>Sign In</h1>
        <form className="sign-in-up-form">
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
            onClick={this.onSubmitSignIn}
          >Sign In</button>
          <p onClick={() => onRouteChange("signup")}>Sign Up</p>
        </form>
      </div>
    );
  }
}

export default SignIn;