import React from "react";
import "./ImageList.css";

//props.images destructured
const ImageList = ({ images }) => {
  //destruture image properties
  const imgUrls = images.map(({ id, description, urls }) => {
    return <img key={id} alt={description} src={urls.regular} />;
  });
  return <div className="image-list">{imgUrls}</div>;
};

export default ImageList;
