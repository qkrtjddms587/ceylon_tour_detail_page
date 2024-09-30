import { ITour } from "../../../../mockData";
import SpotCard from "./SpotCard";

interface ResortTourSectionProps {
  itemObjs: ITour[];
}

export default function ResortTourSection({
  itemObjs,
}: ResortTourSectionProps) {
  return (
    <div className="resort__tour__section__wrapper">
      <div className="spot__cards">
        {itemObjs.map((itemObj) => (
          <a key={itemObj.id} href={`tour/${itemObj.id}`}>
            <SpotCard {...itemObj} />
            <span className="font__desc">{itemObj.desc}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
