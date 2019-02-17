import React from "react";
import getImages from "../imgpath";

const DisplayImage = ({ imageIndex, customImageURL, imgClass }) => {
  //Render custom image if provided
  if (customImageURL)
    return (
      <img className={imgClass} src={customImageURL} alt={"unavailable"} />
    );
  //else render the image based on the imageIndex
  const images = getImages();
  const totalImages = images.length;
  const imageIdx = imageIndex % totalImages;

  const logo = require("" + images[imageIdx]);
  return <img className={imgClass} src={logo} alt={"unavailable"} />;
};

export default DisplayImage;
