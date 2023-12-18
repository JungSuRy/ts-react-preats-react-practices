import React from "react";

import { imageProps } from "./Gallery";

function InfoGallery({ image }: { image: imageProps }): JSX.Element {
  const img = image;
  return (
    <div>
      <img
        src={`https://picsum.photos/id/${img.id}/${img.width}/${img.height}`}
      ></img>
      <p>
        <span>제목: {img.title}</span>
      </p>
      <p>
        <span>내용: {img.content}</span>
      </p>
    </div>
  );
}

export default InfoGallery;
