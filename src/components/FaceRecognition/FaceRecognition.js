import React from "react";


const FaceRecognition = ({ imgURL, box }) => {
  return (
    <div className="inner-wrapper">
      {imgURL
        ? <img
          id="face-img"
          alt="face-recognition"
          src={imgURL}
          // src="https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/03/GettyImages-1092658864_hero-1024x575.jpg"
          width="50%"
          height="auto"
        />
        : <div />
      }
      <div className="bounding-box"
        style={{ inset: `${box.top}px calc(25% + ${box.left}px) ${box.bottom}px calc(25% + ${box.right}px)` }} />
    </div>
  );
}

export default FaceRecognition;