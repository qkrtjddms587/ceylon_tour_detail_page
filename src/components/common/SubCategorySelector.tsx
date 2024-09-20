import { Category } from "./CategorySelector";

interface SubCategorySelectorProps {
  type: "sidebar" | "button";
  categories: Category[];
  currentTitle: string;
  setCurrentTitle: React.Dispatch<React.SetStateAction<string>>;
}

export default function SubCategorySelector({
  type,
  categories,
  currentTitle,
  setCurrentTitle,
}: SubCategorySelectorProps) {
  return (
    <div className="sub__category__selector__wrapper">
      <div
        className={type === "sidebar" ? "sidebar__wrapper" : "button__wrapper"}
      >
        {categories.map(({ idx, title }) => (
          <span
            key={idx}
            className={
              currentTitle === title
                ? type === "sidebar"
                  ? "selected__sidebar"
                  : "selected__button"
                : ""
            }
            onClick={() => setCurrentTitle(title)}
          >
            {title}
          </span>
        ))}
      </div>
    </div>
  );
}
