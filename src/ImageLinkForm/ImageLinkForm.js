import React from "react";


const ImageLinkForm = () => {
    return (
        <div className="wrapper">
            <p className="text-center">Paste link of an image to recognize face in it.</p>
            <div className="inner-wrapper">
                <input className="d1" type="text" />
                <button className="btn-primary d2">Detect</button>
            </div>
        </div>
    );
}

export default ImageLinkForm