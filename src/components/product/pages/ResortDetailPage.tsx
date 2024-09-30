import { useParams } from "react-router-dom";
import mockData from "../../../mockData";
import ResortSearchBar from "../section/tour-page/ResortSearchBar";
import TourHeaderSection from "../section/tour-detail-page/TourHeaderSection";
import ResortCategorySection from "../section/tour-detail-page/ResortCategorySection";

export default function ResortDetailPage() {
  const { tourId } = useParams();
  const id = +tourId!;
  const tourData = mockData.tour.findDataById(id)!;
  const tourDatas = mockData.tour.findMany();
  const hotelObjs = mockData.hotel.findMany();
  return (
    <div>
      <ResortSearchBar itemObjs={tourDatas} />
      <TourHeaderSection {...tourData} />
      <ResortCategorySection hotelObjs={hotelObjs} />
    </div>
  );
}
