import React, { Children } from "react";
import InfoGallery from "./InfoGallery";

export interface imageProps {
  id: number;
  width: number;
  height: number;
  title: string;
  content: string;
}

function showInfo(im: imageProps) {
  alert(`제목 ${im.title}\n내용:${im.content}\nID:${im.id}`);
}

function Gallery({
  children,
  images,
}: {
  children: string;
  images: imageProps[];
}): JSX.Element {
  const img = images;

  return (
    <div>
      <div>{children}</div>
      {img.map((im: imageProps) => (
        <div className="imgWrap">
          <img
            src={`https://picsum.photos/id/${im.id}/${im.width}/${im.height}`}
            onClick={() => {
              showInfo(im);
            }}
          ></img>
        </div>
      ))}
      <div className="showWrap"></div>
    </div>
  );
}

export default Gallery;
