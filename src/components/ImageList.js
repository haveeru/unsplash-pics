import React from "react";

//props.images destructured
const ImageList = ({ images }) => {
    console.log(images)
  const imgUrls = images.map((image) => {
    return <img src={image.urls.regular} alt={image.alt_description} key={image.id}/>;
  });
  return <div>{imgUrls}</div>;
};

export default ImageList;
