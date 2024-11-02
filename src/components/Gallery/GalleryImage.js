// components/GalleryImage.js
import React from "react";

function GalleryImage({ src, alt }) {
  return (
    <div>
      <img className="h-auto max-w-full" src={src} alt={alt} />
    </div>
  );
}

export default GalleryImage;

