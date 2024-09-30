import ImageSelector from "../../../common/ImageSelector";
import { IHotel } from "../../../../mockData";
import InfoItems from "../../../common/InfoItem";
import HotelInfoImage from "./HotelInfoImage";
import PackageItemList from "./PackageItemList";
import packageImage0 from "../../../../images/hotel/0/package-0.jpg";
import packageImage1 from "../../../../images/hotel/0/package-1.jpg";
import { useOutletContext } from "react-router-dom";

export default function HotelInfoSection() {
  const hotelData: IHotel = useOutletContext();
  const packages = [
    {
      thumbnailImagePath: packageImage0,
      packagePeriod: "5박 7일",
      title:
        "선투숙리조트 2박 + 세인트레지스 가든뷰 1박 + 세인트레지스 오션뷰 풀빌라 2박",
    },
    {
      thumbnailImagePath: packageImage1,
      packagePeriod: "5박 7일",
      title:
        "선투숙리조트 2박 + 원베드 풀빌라 2박 + 세인트레지스 오션뷰 풀빌라 2박",
    },
  ];
  return (
    <div>
      <ImageSelector images={hotelData.hotelImages} />
      <InfoItems {...hotelData} />
      <HotelInfoImage {...hotelData.hotelInfoImages} />

      <PackageItemList
        packages={packages}
        title={hotelData.title}
        hotelId={hotelData.id}
        state={hotelData.address.state}
      />
    </div>
  );
}
