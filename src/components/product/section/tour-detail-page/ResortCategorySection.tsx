import { useState } from "react";
import { IHotel } from "../../../../mockData";
import CategorySelector from "../../../common/CategorySelector";
import HotelList from "./HotelList";

interface ResortCategorySectionProps {
  hotelObjs: IHotel[];
}

export default function ResortCategorySection({
  hotelObjs,
}: ResortCategorySectionProps) {
  const [infoIdx, setInfoIdx] = useState(0);
  const [categoryIdx, setCategoryIdx] = useState(0);
  const infoObj = [
    { idx: 0, title: "리조트 안내" },
    { idx: 1, title: "발리 안내" },
    { idx: 2, title: "일정 미리보기" },
  ];
  const categoryObj = [
    { idx: 0, title: "추천 풀빌라" },
    { idx: 1, title: "얼리버드 프로모션" },
    { idx: 2, title: "가족여행추천 리조트" },
    { idx: 3, title: "우붓 스테이" },
  ];
  return (
    <div className="resort__category__section__wrapper">
      <div className="mx__section gap-3">
        <CategorySelector
          type="underbar"
          categories={infoObj}
          currentIdx={infoIdx}
          setCurrentIdx={setInfoIdx}
        />
        <CategorySelector
          type="button"
          categories={categoryObj}
          currentIdx={categoryIdx}
          setCurrentIdx={setCategoryIdx}
        />
      </div>
      {infoIdx === 0 && <HotelList selectedHotelObjs={hotelObjs} />}
    </div>
  );
}
