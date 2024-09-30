import { useLocation, useRoutes } from "react-router-dom";
import RatingBoard from "./RatingBoard";
import { cls } from "../../utilies";

interface HotelHeaderSectionProps {
  title: string;
  subtitle: string;
  headerBgImage: string;
  rating: number;
  description: string;
  address: {
    contury: string;
    state: string;
    city: string;
    detailAddress: string;
  };
}

export default function HotelHeaderSection({
  title,
  subtitle,
  headerBgImage,
  rating,
  description,
  address,
}: HotelHeaderSectionProps) {
  const { pathname } = useLocation();
  const isDetail = pathname.includes("detail");
  return (
    <div className="hotel__header__section__wrapper">
      <img className="bg__image" src={headerBgImage} alt="temp" />
      <div className="header__info">
        <span className="only-web fs-20">{subtitle}</span>
        <span className="header__title fs-45">{title}</span>
        <span className="only-mobile fs-20">{subtitle}</span>
        <div className="only-web header__loc__rating">
          <span className="fs-15">
            {address.state} {">"} {address.city}
          </span>
          <div className="header__rating">
            <RatingBoard rating={rating} />
          </div>
        </div>
        <span
          className={cls(isDetail ? "only-mobile" : "", "header__desc fs-15")}
        >
          {description}
        </span>
      </div>
    </div>
  );
}
