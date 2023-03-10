import React from "react";


const FaceRecognition = ({ imgURL }) => {
  return (
    <div className="inner-wrapper">
      <img
        alt="face-recognition"
        src={imgURL}
        width="50%"
        height="auto"
      />
    </div>
  );
}

export default FaceRecognition;