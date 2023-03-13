import React from "react";


const SignOut = ({ onRouteChange }) => {
    return (
        <div className="sign-in-up-wrapper">
            <h1>Sign Up</h1>
            <form className="sign-in-up-form">
                <label htmlFor="name">Name: </label>
                <input id="username" type="text" placeholder="Username" />
                <label htmlFor="username">Username: </label>
                <input id="username" type="text" placeholder="Username" />
                <label htmlFor="password">Password: </label>
                <input id="password" type="password" placeholder="Password" />
                <button onClick={() => onRouteChange("home")}>Sign Up</button>
                <p>Sign In</p>
            </form>
        </div>
    );
}

export default SignOut;