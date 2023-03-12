import React from "react";
import Navigation from "./Navigation/Navigation";
import ImageLinkForm from "./ImageLinkForm/ImageLinkForm";
import FaceRecognition from "./FaceRecognition/FaceRecognition"


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imgURL: "",
      box: {}
    }
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  }

  onButtonClick = (event) => {
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
    this.setState({ box: bounding_box })
  }

  render() {
    return (
      <div>
        <Navigation />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonClick={this.onButtonClick} />
        <FaceRecognition imgURL={this.state.imgURL} box={this.state.box} />
      </div>
    );
  }
}

export default App;
