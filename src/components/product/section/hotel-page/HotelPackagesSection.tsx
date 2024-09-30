import PackageItemList from "./PackageItemList";
import packageImage0 from "../../../../images/hotel/0/package-0.jpg";
import packageImage1 from "../../../../images/hotel/0/package-1.jpg";
import { useOutlet, useOutletContext } from "react-router-dom";
import { IHotel } from "../../../../mockData";

export default function HotelPackagesSection() {
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
    <div className="hotel__packages__section__wrapper">
      <PackageItemList
        packages={packages}
        title={hotelData.title}
        hotelId={hotelData.id}
        state={hotelData.address.state}
      />
    </div>
  );
}
