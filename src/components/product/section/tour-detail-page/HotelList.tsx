import { useState } from "react";
import { IHotel } from "../../../../mockData";
import SubCategorySelector from "../../../common/SubCategorySelector";
import RecommendCard from "../tour-page/RecommendCard";

interface HotelListProps {
  selectedHotelObjs: IHotel[];
}

export default function HotelList({ selectedHotelObjs }: HotelListProps) {
  const [categoryTitle, setCategoryTitle] = useState("전체");
  const categoryObjs = [
    { idx: 0, title: "전체" },
    { idx: 1, title: "쿠타" },
    { idx: 2, title: "스미낙" },
    { idx: 3, title: "잠바란" },
    { idx: 4, title: "우붓" },
  ];
  const filteringHotelObjs = selectedHotelObjs.filter((hotelObj) => {
    if (categoryTitle === "전체") return true;
    return hotelObj.address.city === categoryTitle;
  });
  return (
    <div className="hotel__list__wrapper">
      <div className="pb-2">
        <SubCategorySelector
          type="sidebar"
          currentTitle={categoryTitle}
          setCurrentTitle={setCategoryTitle}
          categories={categoryObjs}
        />
      </div>
      <div className="category__items__wrapper">
        {filteringHotelObjs.map((hotelObj) => (
          <a key={hotelObj.id} href={`/ceylon_publicing/hotel/${hotelObj.id}`}>
            <RecommendCard {...hotelObj} />
          </a>
        ))}
      </div>
    </div>
  );
}
