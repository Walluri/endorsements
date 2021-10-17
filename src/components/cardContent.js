import React, { useState } from "react";
import image from "../image.png";
function CardContent({ url }) {
  return url === "" ? (
    <div>Click on an User on the left</div>
  ) : (
    <div>
      <img className="s3image" src={url} alt="Fetched Image from AWS S3" />
    </div>
  );
}

export default CardContent;
