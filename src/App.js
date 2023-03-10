import React from "react";
import Navigation from "./Navigation/Navigation";
import ImageLinkForm from "./ImageLinkForm/ImageLinkForm";
import FaceRecognition from "./FaceRecognition/FaceRecognition"


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imgURL: ""
    }
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  }

  onButtonClick = (event) => {
    this.setState({ imgURL: this.state.input });
  }

  render() {
    return (
      <div>
        <Navigation />
        <div className="wrapper">
          <ImageLinkForm onInputChange={this.onInputChange} onButtonClick={this.onButtonClick} />
          <FaceRecognition imgURL={this.state.imgURL} />
        </div>
      </div>
    );
  }
}

export default App;
