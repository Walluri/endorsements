import React from "react";
import image from "../image.png";
function CardContent() {
  return (
    <div>
      {/* <img className="s3image" src={image} alt="Charles Image" /> */}

      <img
        className="s3image"
        src={
          "https://valluri-endorsement.s3.ap-south-1.amazonaws.com/Appreciation_Per_X_Larsson.png"
        }
        alt="Charles Image"
      />
    </div>
  );
}

export default CardContent;
