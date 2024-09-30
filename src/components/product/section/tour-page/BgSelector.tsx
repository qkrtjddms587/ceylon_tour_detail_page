import { Dispatch, SetStateAction } from "react";

interface MainBgSelectProps {
  selectId: number;
  bgObjs: IBgObj[];
  setSelectId: Dispatch<SetStateAction<number>>;
}

interface IBgObj {
  title: string;
  subtitle: string;
  imagePath: string;
}

export default function BgSelector({
  selectId,
  bgObjs,
  setSelectId,
}: MainBgSelectProps) {
  const handleClick = (idx: number) => {
    setSelectId(idx);
  };
  return (
    <div className="bg__selector__wrapper">
      {bgObjs.map((bgObj, idx) => (
        <div
          key={bgObj.imagePath}
          className={`${idx === selectId ? "bg__select " : ""}image__wrapper`}
          onClick={() => handleClick(idx)}
        >
          <img src={bgObj.imagePath} />
        </div>
      ))}
    </div>
  );
}
