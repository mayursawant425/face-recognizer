import React from "react";


const Navigation = ({ isSignedIn, onRouteChange }) => {
  if (isSignedIn) {
    return (
      <nav className="navbar">
        <p className="nav-ele bg-red push-left" onClick={() => onRouteChange("signin")}>Sign Out</p>
      </nav>
    );
  } else {
    return (
      <nav className="navbar">
        <p className="nav-ele bg-green push-left" onClick={() => onRouteChange("signin")}>Sign In</p>
        <p className="nav-ele bg-green" onClick={() => onRouteChange("signup")}>Sign Up</p>
      </nav>
    );
  }
}

export default Navigation;