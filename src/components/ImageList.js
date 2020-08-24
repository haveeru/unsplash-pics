import React from "react";
import "./ImageList.css";
import ImageCard from "./ImageCard";

//props.images destructured
const ImageList = ({ images }) => {
  //destruture image properties id, description, urls
  const imgUrls = images.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });
  return <div className="image-list">{imgUrls}</div>;
};

export default ImageList;
