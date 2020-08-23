import React, { useState } from "react";
import unsplash from "./api/unsplash";
import SearchBar from "./components/SearchBar";

function App() {
  const [images, setImages] = useState([])

  const onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });
    setImages(response.data.results)
  };

  return (
    <div className="ui container" style={{ marginTop: "10px" }}>
      <SearchBar onSubmit={onSearchSubmit} />
      Found: {images.length} images
    </div>
  );
}

export default App;
