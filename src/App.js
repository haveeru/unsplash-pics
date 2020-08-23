import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";

function App() {
  const [images, setImages] = useState([])

  const onSearchSubmit = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID KZFILu2UG23wX_TdrhI3sjUImHtWdwhv5b8r0ssrwoE",
      },
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
