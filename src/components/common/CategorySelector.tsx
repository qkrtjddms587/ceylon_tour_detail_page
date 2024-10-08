import { useNavigate } from "react-router-dom";
import { cls } from "../../utilies";

export type Category = {
  idx: number;
  title: string;
  href?: string;
};

export interface CategorySelectorProps {
  type: "underbar" | "button";
  categories: Category[];
  currentIdx?: number;
  setCurrentIdx?: React.Dispatch<React.SetStateAction<number>>;
}

export default function CategorySelector({
  type,
  categories,
  currentIdx,
  setCurrentIdx,
}: CategorySelectorProps) {
  const navigate = useNavigate();
  const handleClick = (value: number | string) => {
    if (typeof value === "number" && setCurrentIdx) {
      return () => setCurrentIdx(value);
    } else {
      return () => navigate(`/${value}`);
    }
  };
  return (
    <div
      className="category__selector__wrapper"
      style={{ gridTemplateColumns: `repeat(${categories.length},1fr)` }}
    >
      {categories.map(({ idx, title, href }) => (
        <div
          className={cls(
            type === "underbar" ? "underbar__selector" : "button__selector",
            idx === currentIdx
              ? type === "underbar"
                ? "select__underbar"
                : "select__button"
              : ""
          )}
          onClick={
            href ? () => () => handleClick(href) : () => handleClick(idx)
          }
        >
          {title}
        </div>
      ))}
    </div>
  );
}
