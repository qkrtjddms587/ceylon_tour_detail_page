import CategorySelector from "./CategorySelector";
import { useState } from "react";
import SubCategorySelector from "./SubCategorySelector";

interface ShowAllImageProps {
  images: {
    mainImage: string;
    roomImage: { roomType: number; image: string }[];
  };
  setOnModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ShowAllImage({
  images,
  setOnModal,
}: ShowAllImageProps) {
  const [categoryId, setCategoryId] = useState(0);
  const selectCategory = categoryId === 0 ? images.mainImage : images.roomImage;
  const [selectedImgId, setSelectedImgId] = useState(0);
  const imagesLength =
    typeof selectCategory === "string" ? 0 : selectCategory.length;
  const [roomTypeTitle, setRoomTypeTitle] = useState(`전체(${imagesLength})`);
  const categoryObjs = [
    { idx: 0, title: "호텔 대표사진" },
    { idx: 1, title: "객실별 사진" },
  ];
  const roomTypeObjs = [
    { idx: 0, title: `전체(${imagesLength})` },
    {
      idx: 1,
      title: "룸타입1",
    },
    {
      idx: 2,
      title: "룸타입2",
    },
    {
      idx: 3,
      title: "룸타입3",
    },
  ];

  return (
    <div className="show__all__image__wrapper">
      <div className="images__window__wrapper">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="close__btn"
          onClick={() => setOnModal(false)}
        >
          <path
            fillRule="evenodd"
            d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"
          />
        </svg>
        <CategorySelector
          categories={categoryObjs}
          type="button"
          currentIdx={categoryId}
          setCurrentIdx={setCategoryId}
        />
        <div className="images__wrapper">
          <SubCategorySelector
            categories={roomTypeObjs}
            type="button"
            currentTitle={roomTypeTitle}
            setCurrentTitle={setRoomTypeTitle}
          />
          <div className="main__images__wrapper">
            <div className="btn__wrapper">
              {selectedImgId !== 0 && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="left__btn"
                  onClick={() => setSelectedImgId((prev) => prev - 1)}
                >
                  <path
                    fillRule="evenodd"
                    d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
              {selectedImgId < imagesLength - 1 && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="right__btn"
                  onClick={() => setSelectedImgId((prev) => prev + 1)}
                >
                  <path
                    fillRule="evenodd"
                    d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>
            <div className="main__images">
              <img src={images.roomImage[selectedImgId].image} alt="temp" />
            </div>
          </div>
          <div className="images__items__list__wrapper">
            {images.roomImage.map((image, idx) => (
              <div
                className="images__item__wrapper"
                onClick={() => setSelectedImgId(idx)}
              >
                {idx !== selectedImgId && <div />}
                <img src={image.image} alt="temp" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
