import React from "react";

//props.images destructured
const ImageList = ({ images }) => {
  //destruture image properties 
  const imgUrls = images.map(({id, description, urls}) => {
    return <img key={id} alt={description} src={urls.regular}  />;
  });
  return <div>{imgUrls}</div>;
};

export default ImageList;
