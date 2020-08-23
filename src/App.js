import React from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";

function App() {
  const onSearchSubmit = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID KZFILu2UG23wX_TdrhI3sjUImHtWdwhv5b8r0ssrwoE",
      },
    });
    console.log(response.data.results)
  };

  return (
    <div className="ui container" style={{ marginTop: "10px" }}>
      <SearchBar onSubmit={onSearchSubmit} />
    </div>
  );
}

export default App;
