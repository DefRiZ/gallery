import React from "react";
import ImageContext from "../context/ImageContext";
export default function SearchPicture() {
  const { searchText, setSearchText } = React.useContext(ImageContext);
  return (
    <div>
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="w-full border border-gray-300 rounded-lg p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
