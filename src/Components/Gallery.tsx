import React from "react";
import InfoGallery from "./InfoGallery";

export interface imageProps {
  id: number;
  width: number;
  height: number;
  title: string;
  content: string;
}

function Gallery({ images }: { images: imageProps[] }): JSX.Element {
  const img = images;

  return (
    <div>
      {img.map((im: imageProps) => (
        <div className="imgWrap">
          <img
            src={`https://picsum.photos/id/${im.id}/${im.width}/${im.height}`}
            onClick={() => {
              <InfoGallery image={im} />;
            }}
          ></img>
        </div>
      ))}
    </div>
  );
}

export default Gallery;
