import { useState } from "react";
import mainImg0 from "../../../../images/resort/hotel_07.png";
import mainImg1 from "../../../../images/img_mauritius.jpg";
import mainImg2 from "../../../../images/resort/hotel_13.png";
import mainImg3 from "../../../../images/img_bali.jpg";
import BgContents from "./BgContents";
import BgSelectBtns from "./BgSelectBtns";
import BgSelector from "./BgSelector";

export default function ResortMainSection() {
  const [selectId, setSelectId] = useState(0);
  const bgObjs = [
    {
      title: "발리 풀빌라 프로모션",
      subtitle: "특별한 가격으로 만나는 완벽한 풀빌라",
      imagePath: mainImg0,
    },
    {
      title: "발리 풀빌라 프로모션",
      subtitle: "특별한 가격으로 만나는 완벽한 풀빌라",
      imagePath: mainImg1,
    },
    {
      title: "발리 풀빌라 프로모션",
      subtitle: "특별한 가격으로 만나는 완벽한 풀빌라",
      imagePath: mainImg2,
    },
    {
      title: "발리 풀빌라 프로모션",
      subtitle: "특별한 가격으로 만나는 완벽한 풀빌라",
      imagePath: mainImg3,
    },
  ];
  console.log(selectId);
  return (
    <div className="resort__main__section__wrapper">
      <div
        className="bg__image__wrapper"
        style={{ backgroundImage: `url(${bgObjs[selectId].imagePath})` }}
      />
      <div className="contents__wrapper">
        <BgContents
          title={bgObjs[selectId].title}
          subtitle={bgObjs[selectId].subtitle}
          mobileTitle="내가 꿈꾸는 허니문"
          mobileSubtitle="실론투어 여행 전문가가 설계해 드리는 상력한 허니문"
        />
        <BgSelectBtns
          selectId={selectId}
          objsLength={bgObjs.length}
          setSelectId={setSelectId}
        />
      </div>
      <BgSelector
        selectId={selectId}
        bgObjs={bgObjs}
        setSelectId={setSelectId}
      />
    </div>
  );
}
