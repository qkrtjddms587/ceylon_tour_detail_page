import { TourObj } from "../../utilies";
import SearchBtn from "./SearchBtn";
import SearchSelectInput from "./SearchSelectInput";

interface ResortSearchBarProps {
  itemObjs: TourObj[];
}

export default function ResortSearchBar({ itemObjs }: ResortSearchBarProps) {
  return (
    <div className="resort__search__bar__wrapper">
      <SearchSelectInput kind="loc" items={itemObjs} />
      <SearchSelectInput kind="category" />
      <SearchSelectInput kind="date" />
      <SearchSelectInput kind="resort" items={itemObjs} />
      <div className="search__btn__wrapper">
        <SearchBtn text="찾기" onClick={() => {}} />
      </div>
    </div>
  );
}
