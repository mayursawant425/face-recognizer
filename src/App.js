import React from "react";
import Navigation from "./components/Navigation/Navigation";
import Rank from "./components/Rank/Rank";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition"
import SignIn from "./components/SignIn/SignIn"
import SignUp from "./components/SignUp/SignUp"


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imgURL: "",
      box: {},
      route: "signin",
      isSignedIn: false,
      user: {
        id: "",
        name: "",
        email: "",
        entries: 0,
        joined: ""
      }
    }
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  }

  onButtonClick = (event) => {
    const { user } = this.state;
    this.setState({ imgURL: this.state.input });
    // const faceImgElement = document.getElementById("face-img");
    // const faceImgHeight = Number(faceImgElement.height);
    // const faceImgWidth = Number(faceImgElement.width);
    const bounding_box = {
      top: 10,
      right: 10,
      bottom: 10,
      left: 10
    };
    this.setState({ box: bounding_box });
    fetch(`http://localhost:3001/user/${user.id}/entries`, {
      method: "put",
      headers: { "Content-Type": "application/json" }
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState(Object.assign(user, { entries: data.entries }));
      });
  }

  onRouteChange = (newRoute) => {
    this.setState({ route: newRoute });
    if (newRoute === "signin" || newRoute === "signup") {
      this.setState({ isSignedIn: false });
    } else {
      this.setState({ isSignedIn: true });
    }
  }

  loadUser = (signedInUser) => {
    this.setState({ user: signedInUser });
  }

  render() {
    const { imgURL, box, route, isSignedIn, user } = this.state;
    return (
      <div>
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
        {isSignedIn
          ? <div>
            <Rank user={user} />
            <ImageLinkForm onInputChange={this.onInputChange} onButtonClick={this.onButtonClick} />
            <FaceRecognition imgURL={imgURL} box={box} />
          </div>
          : route === "signin"
            ? <SignIn
              loadUser={this.loadUser}
              onRouteChange={this.onRouteChange} />
            : <SignUp
              loadUser={this.loadUser}
              onRouteChange={this.onRouteChange}
            />
        }
      </div>
    );
  }
}

export default App;
