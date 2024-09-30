import { useLocation, useNavigate } from "react-router-dom";
import { cls } from "../../utilies";

export type Category = {
  idx: number;
  title: string;
  href: string;
};

export interface CategorySelectorProps {
  type: "underbar" | "button";
  categories: Category[];
  basePath: string;
}

export default function CategorySelectorByRouter({
  type,
  categories,
  basePath,
}: CategorySelectorProps) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const currentPath = pathname.replace(basePath, "");
  const isDetail = pathname.includes("detail");
  return (
    <div
      className={cls(
        isDetail ? "only-mobile" : "",
        "category__selector__wrapper"
      )}
      style={{ gridTemplateColumns: `repeat(${categories.length},1fr)` }}
    >
      {categories.map(({ title, href, idx }) => (
        <div
          key={idx}
          className={cls(
            type === "underbar" ? "underbar__selector" : "button__selector",
            currentPath.includes(href)
              ? type === "underbar"
                ? "select__underbar"
                : "select__button"
              : ""
          )}
          onClick={() => navigate(basePath + href)}
        >
          {title}
        </div>
      ))}
    </div>
  );
}
