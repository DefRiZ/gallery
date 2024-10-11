import React from "react";
import ImageCard from "./ImageCard";
import ImageContext from "../context/ImageContext";

export default function Gallery() {
  const { filteredImages } = React.useContext(ImageContext);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {filteredImages.map((image) => (
        <ImageCard key={image.id} {...image} />
      ))}
    </div>
  );
}
