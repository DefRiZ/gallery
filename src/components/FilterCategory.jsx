import React from "react";
import ImageContext from "../context/ImageContext";

export default function FilterCategory() {
  const { categories, category, setCategory } = React.useContext(ImageContext);
  return (
    <div>
      <select
        className="w-full border border-gray-300 rounded-lg p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">All</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}
