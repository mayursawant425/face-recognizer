import React from "react";


const SignIn = () => {
    return (
        <div className="sign-in-up-wrapper">
            <h1>Sign In</h1>
            <form className="sign-in-up-form">
                <label htmlFor="username">Username: </label>
                <input id="username" type="text" placeholder="Username" />
                <label htmlFor="password">Password: </label>
                <input id="password" type="password" placeholder="Password" />
                <button>Sign In</button>
                <p>Sign Up</p>
            </form>
        </div>
    );
}

export default SignIn;