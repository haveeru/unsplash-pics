import React, { useEffect, useState } from "react";

// destruct urls and description form image props
const ImageCard = ({ image: { urls, desription } }) => {
  const [spans, setSpan] = useState(0);
  const imageRef = React.useRef();

  // componentdidmount()
  useEffect(() => {
    //image is not loaded so it returns zero
    console.log(`mount: ${imageRef.current.clientHeight}`);
    // to solve the issue use an event listner
    imageRef.current.addEventListener("load", setSpans);
  }, []);

  const setSpans = () => {
    //now it will return the height of the image and store it in heigh
    // height / 10 is from css grid-auto-rows: 10px;
    const height = imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    setSpan(spans);
  };

  return (
    <div style={{gridRowEnd: `span ${spans}`}}>
      <img ref={imageRef} src={urls.regular} alt={desription} />
    </div>
  );
};

export default ImageCard;
