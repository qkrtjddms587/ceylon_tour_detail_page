import { useRef, useState } from "react";
import { ITour } from "../../../../mockData";

interface SearchSelectInputProps {
  items?: ITour[];
  kind: "loc" | "resort" | "category" | "date";
}

export default function SearchSelectInput({
  kind,
  items,
}: SearchSelectInputProps) {
  const [onItemsList, setOnItemsList] = useState(false);
  const [selectedItem, setSelectedItem] = useState(items ? items[0].title : "");
  const chevronRef = useRef<SVGSVGElement>(null);
  const clickedItemsList = (
    e: React.MouseEvent<HTMLUListElement, MouseEvent>
  ) => {
    if (!(e.target instanceof HTMLLIElement)) return;
    const clickedItem = e.target.innerHTML;
    setSelectedItem(clickedItem);
    clickedSelectItem();
  };
  const clickedSelectItem = () => {
    if (onItemsList) {
      offItemsListAnimation();
    } else {
      onItemsListAnimation();
    }
    setOnItemsList(!onItemsList);
  };
  const onItemsListAnimation = () => {
    chevronRef.current?.style.setProperty("transform", "rotate(180deg)");
  };
  const offItemsListAnimation = () => {
    chevronRef.current?.style.setProperty("transform", "");
  };
  return (
    <div className="serach__select__input__wrapper">
      <div className="selected__item" onClick={clickedSelectItem}>
        {kind === "loc" && (
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.0}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
            <span className="select">{selectedItem}</span>
          </div>
        )}
        {kind === "resort" && (
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
              />
            </svg>
            <span>리조트</span>
          </div>
        )}
        {kind === "category" && (
          <div>
            <span>전체</span>
          </div>
        )}
        {kind === "date" && (
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
              />
            </svg>
            <span>출발일</span>
          </div>
        )}
        {kind !== "date" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
            ref={chevronRef}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        )}
      </div>
      {onItemsList ? (
        <ul className="items__list" onClick={clickedItemsList}>
          {items &&
            items.map((item) => (
              <li
                className={item.title === selectedItem ? "select" : ""}
                key={item.id}
              >
                {item.title}
              </li>
            ))}
        </ul>
      ) : null}
    </div>
  );
}
