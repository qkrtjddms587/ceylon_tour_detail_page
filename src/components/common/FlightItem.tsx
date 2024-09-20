import SelectBtn from "./SelectBtn";

interface FlightItemProps {
  id: number;
  imagePath: string;
  iata: string;
  name: string;
  schedule: {
    depart: { airport: string; time: string };
    arrive: { airport: string; time: string };
  };
  period: string;
  flightType: string;
  checked?: boolean;
}

export default function FlightItem({
  id,
  imagePath,
  iata,
  name,
  schedule,
  period,
  flightType,
  checked,
}: FlightItemProps) {
  return (
    <div className="flight__item__wrapper">
      <div className="airline__wrapper">
        <img src={imagePath} alt="temp" />
        <span>
          {iata} {name}
        </span>
      </div>
      <div className="flight__schedule__wrapper">
        <div className="flight__schedule">
          <span>{schedule.depart.airport}</span>
          <span>출발</span>
          <span>{`(${schedule.depart.time})`}</span>
          <span>-</span>
          <span>{schedule.arrive.airport}</span>
          <span>도착</span>
          <span>{`(${schedule.arrive.time})`}</span>
        </div>
        <span>{period}</span>
      </div>
      <div className="flight__select__btn__wrapper">
        <SelectBtn checked={checked} />
      </div>
    </div>
  );
}
