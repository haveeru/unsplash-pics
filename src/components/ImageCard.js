import React, { useEffect } from "react";

// destruct urls and description form image props
const ImageCard = ({ image: { urls, desription } }) => {
  const imageRef = React.useRef();

  // componentdidmount()
  useEffect(() => {
      //image is not loaded so it returns zero
    console.log(`mount: ${imageRef.current.clientHeight}`);
    // to solve the issue use an event listner
    imageRef.current.addEventListener('load', setSpans)
  }, []);

  const setSpans = () => {
    //now it will return the height of the image
    console.log(imageRef.current.clientHeight);
  }

  return (
    <div>
      <img ref={imageRef} src={urls.regular} alt={desription} />
    </div>
  );
};

export default ImageCard;
