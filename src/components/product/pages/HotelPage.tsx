import { Outlet, useParams } from "react-router-dom";
import mockData from "../../../mockData";
import HotelHeaderSection from "../../common/HotelHeaderSection";

import HotelMainSection from "../section/hotel-page/HotelInfoSection";
import PackageItemList from "../section/hotel-page/PackageItemList";
import CategorySelector from "../../common/CategorySelector";
import CategorySelectorByRouter from "../../common/CategorySelectorByRouter";

export default function HotelPage() {
  const { hotelId } = useParams();
  const id = +hotelId!;
  const hotelData = mockData.hotel.findDataById(id)!;
  const categoryObjs = [
    { idx: 0, title: "리조트 정보", href: "info" },
    { idx: 1, title: "상품 보기", href: "packages" },
  ];
  return (
    <div>
      <HotelHeaderSection {...hotelData} />
      <div className="py__section">
        <div className="mx__section">
          <CategorySelectorByRouter
            categories={categoryObjs}
            type="underbar"
            basePath={`/hotel/${hotelData.id}/`}
          />
        </div>
        <Outlet context={hotelData} />
      </div>
    </div>
  );
}
