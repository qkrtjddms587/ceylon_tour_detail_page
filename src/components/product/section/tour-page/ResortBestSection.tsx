import mockData from "../../../../mockData";
import MobileCardWrapper from "../../../common/MobileCardWrapper";
import SectionHeader from "../../../common/SectionHeader";
import RecommendCard from "./RecommendCard";

export default function ResortBestSection() {
  const hotelObjs = mockData.hotel.findMany().slice(0, 3);
  return (
    <div className="resort__best__section__wrapper">
      <SectionHeader
        titles={["Best", "시즌", "추천 프로모션"]}
        descriptions={["실론투어의 여행전문가가", "추천해드리는 상품"]}
        mobileTitle={["올인크루시브", "리조트"]}
      />
      <div className="promotion__cards__wrapper">
        {hotelObjs.map((obj) => (
          <RecommendCard key={obj.id} {...obj} promotionDueDate={undefined} />
        ))}
      </div>
      <MobileCardWrapper>
        {hotelObjs.map((obj) => (
          <div key={obj.id} className="promotion__mobile__card__wrapper">
            <RecommendCard {...obj} />
          </div>
        ))}
      </MobileCardWrapper>
    </div>
  );
}
