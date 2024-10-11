import React from "react";
import { imagesData } from "../gallery";

const ImageContext = React.createContext();

export const ImageProvider = ({ children }) => {
  const [searchText, setSearchText] = React.useState("");
  const [category, setCategory] = React.useState("");
  const categories = [...new Set(imagesData.map((image) => image.category))];
  const imageSearch = imagesData.filter((image) =>
    image.title.toLowerCase().includes(searchText.toLowerCase())
  );
  const filteredImages = imageSearch.filter((image) =>
    category ? image.category === category : true
  );

  return (
    <ImageContext.Provider
      value={{
        searchText,
        setSearchText,
        category,
        setCategory,
        categories,
        filteredImages,
      }}
    >
      {children}
    </ImageContext.Provider>
  );
};

export default ImageContext;
