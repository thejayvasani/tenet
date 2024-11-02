// components/Gallery.js
import React from "react";
import GalleryColumn from "./GalleryColumn";

function Gallery({ columns }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
      {columns.map((images, index) => (
        <GalleryColumn key={index} images={images} />
      ))}
    </div>
  );
}

export default Gallery;
