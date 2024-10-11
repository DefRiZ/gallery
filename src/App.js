import React from "react";
import Gallery from "./components/Gallery";
import SearchPicture from "./components/SearchPicture";
import FilterCategory from "./components/FilterCategory";
import { ImageProvider } from "./context/ImageContext";

function App() {
  return (
    <ImageProvider>
      <div className="container mx-auto p-6">
        <div className="max-w-lg mx-auto mb-6">
          <SearchPicture />
          <FilterCategory />
        </div>
        <Gallery />
      </div>
    </ImageProvider>
  );
}

export default App;
