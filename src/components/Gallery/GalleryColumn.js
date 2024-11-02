// components/GalleryColumn.js
import React from "react";
import GalleryImage from "./GalleryImage";

function GalleryColumn({ images }) {
  return (
    <div className="grid gap-10">
      {images.map((image, index) => (
        <GalleryImage key={index} src={image.src} alt={image.alt} />
      ))}
    </div>
  );
}

export default GalleryColumn;
