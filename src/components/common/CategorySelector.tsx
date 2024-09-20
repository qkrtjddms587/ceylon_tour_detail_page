import { cls } from "../../utilies";

export type Category = {
  idx: number;
  title: string;
};

export interface CategorySelectorProps {
  type: "underbar" | "button";
  categories: Category[];
  currentIdx: number;
  setCurrentIdx: React.Dispatch<React.SetStateAction<number>>;
}

export default function CategorySelector({
  type,
  categories,
  currentIdx,
  setCurrentIdx,
}: CategorySelectorProps) {
  return (
    <div
      className="category__selector__wrapper"
      style={{ gridTemplateColumns: `repeat(${categories.length},1fr)` }}
    >
      {categories.map(({ idx, title }) => (
        <div
          className={cls(
            type === "underbar" ? "underbar__selector" : "button__selector",
            idx === currentIdx
              ? type === "underbar"
                ? "select__underbar"
                : "select__button"
              : ""
          )}
          onClick={() => setCurrentIdx(idx)}
        >
          {title}
        </div>
      ))}
    </div>
  );
}
