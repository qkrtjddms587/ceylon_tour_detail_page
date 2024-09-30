import mockData, { IAddress } from "../../../../mockData";
import { formatKrDate } from "../../../../utilies";
import RatingBoard from "../../../common/RatingBoard";

interface RecommendCardProps {
  rating: number;
  title: string;
  address: IAddress;
  promotionDueDate?: string;
  thumbnailImagePath: string;
}

export default function RecommendCard({
  title,
  address,
  rating,
  thumbnailImagePath,
  promotionDueDate,
}: RecommendCardProps) {
  return (
    <div className="recommend__card__wrapper">
      <div className="recommend__image__wrapper">
        <img src={thumbnailImagePath} alt="temp" />
      </div>
      <span className="recommend__card__title">{title}</span>
      <div className="recommend__card__info">
        <span>
          {address.state}/{address.city}
        </span>
        <div className="recommend__rating__wrapper">
          <RatingBoard rating={rating} />
        </div>
      </div>
      {promotionDueDate && (
        <span className="promotion__duedate">{`[프로모션 기간 ${formatKrDate(
          promotionDueDate
        )}까지]`}</span>
      )}
    </div>
  );
}
