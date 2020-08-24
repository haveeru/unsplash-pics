import React from "react";

// destruct urls and description form image props
const ImageCard = ({ image: { urls, desription } }) => {
  return (
    <div>
      <img src={urls.regular} alt={desription} />
    </div>
  );
};

export default ImageCard;
