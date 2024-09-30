import { IAddress, INearby } from "../../mockData";
import { cls } from "../../utilies";

interface InfoItemsProps {
  type?: "common" | "detail";
  benefit: string[];
  roomtype: string[];
  address: IAddress;
  nearby: INearby[];
}

export default function InfoItems({
  type = "common",
  benefit,
  roomtype,
  address,
  nearby,
}: InfoItemsProps) {
  return (
    <div className="info__items__wrapper mx__section">
      <div>
        <span className="item__title">룸타입</span>
        <ul>
          {roomtype.map((item, idx) => (
            <li key={idx}>
              <label htmlFor={item}>
                <input type="radio" id={item} checked={idx === 0} />
                <span className={idx === 0 ? "select__room__type" : ""}>
                  {item}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div className={cls(type === "detail" ? "only-web" : "")}>
        <span className="item__title">고객 베네핏</span>
        <ul>
          {benefit.map((item, idx) => (
            <li key={idx}>- {item}</li>
          ))}
        </ul>
      </div>
      <div className={cls(type === "detail" ? "only-web" : "")}>
        <span className="item__title">호텔 위치</span>
        <ul>
          <li key="address">{`주소 : ${address.state} ${address.city} ${address.detailAddress}`}</li>
          {nearby.map(({ distance, name }, idx) => (
            <li key={idx}>{`${distance} - ${name}`}</li>
          ))}
          <div className="map__view__btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                clipRule="evenodd"
              />
            </svg>
            <span>호텔 위치 보기</span>
          </div>
        </ul>
      </div>
    </div>
  );
}
