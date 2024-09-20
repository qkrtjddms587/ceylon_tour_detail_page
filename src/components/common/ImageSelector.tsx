import { useState } from "react";
import ShowAllImage from "./ShowAllImage";

interface ImageSelectorProps {
  images: {
    mainImage: string;
    roomImage: { roomType: number; image: string }[];
  };
}

export default function ImageSelector({ images }: ImageSelectorProps) {
  const [onModal, setOnModal] = useState(false);
  return (
    <div className="image__selector__wrapper">
      {onModal && <ShowAllImage images={images} setOnModal={setOnModal} />}
      <div className="images__grid__wrapper">
        {images.roomImage.slice(0, 3).map((image, idx) => (
          <div key={idx}>
            <img src={image.image} alt="temp" />
          </div>
        ))}
      </div>
      <div className="show__all__btn" onClick={() => setOnModal(true)}>
        <span>호텔 사진 모두 보기</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6"
        >
          <path
            fillRule="evenodd"
            d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
}
