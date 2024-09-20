import { useParams } from "react-router-dom";
import { getHotelDataById, getPackageById } from "../../utilies";
import HotelHeaderSection from "../common/HotelHeaderSection";
import ImageSelector from "../common/ImageSelector";
import InfoItems from "../common/InfoItem";
import SelectBtn from "../common/SelectBtn";
import SubCategorySelector from "../common/SubCategorySelector";
import { useState } from "react";
import FlightItem from "../common/FlightItem";
import KEAir from "../../images/airline/korea.jpg";
import JAAir from "../../images/airline/garuda.jpg";

export default function PackagePage() {
  const { packageId } = useParams();
  const id = +packageId!;
  const packageData = getPackageById(id);
  const hotelData = getHotelDataById(packageData.hotelId);
  const [flightType, setFlightType] = useState("직항");
  const flightObjs = [
    {
      id: 0,
      imagePath: KEAir,
      iata: "KE",
      name: "대한항공",
      schedule: {
        depart: { airport: "인천", time: "17:40" },
        arrive: { airport: "발리", time: "21:40" },
      },
      period: "발리 5박 7일",
      flightType: "직항",
    },
    {
      id: 1,
      imagePath: JAAir,
      iata: "JA",
      name: "가루다항공",
      schedule: {
        depart: { airport: "인천", time: "17:40" },
        arrive: { airport: "발리", time: "21:40" },
      },
      period: "발리 5박 7일",
      flightType: "직항",
    },
  ];
  return (
    <div>
      <HotelHeaderSection {...hotelData} type="mini" />
      <div className="acommodation__selector__wrapper">
        <span className="sub__text">인천출발 / 발리 5박 7일</span>
        <div className="selected__item__wrapper">
          <span className="selected__item">
            [꾸따] 포 포인츠 바이 쉐라톤 디럭스 라군 2박 + [누사두아]
            세인트레지스 풀빌라 2박
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className="extension__btn"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
        <div className="hotel__selector__wrapper">
          <span>포 포인츠 바이 쉐리톤</span>
          <span className="selected">세인트레지스 풀빌라</span>
        </div>
      </div>
      <div>
        <ImageSelector images={hotelData.info.images} />
        <InfoItems {...hotelData.info} />
        <div className="select__package__byroom__wrapper">
          <div className="header__wrapper">
            <span className="header__main">룸타입별 선택상품</span>
            <span className="header__sub">
              상품기간 : 2024.01.05 ~ 2024.12.20
            </span>
          </div>
          <div className="package__item__wrapper">
            <div className="image__wrapper">
              <img src={hotelData.info.images.roomImage[0].image} alt="temp" />
            </div>
            <div className="padding__wrapper">
              <div className="package__info__wrapper">
                <div className="info__wrapper">
                  <span className="info__title">클리프 오션뷰 풀빌라</span>
                  <span className="info__subtitle">
                    선투숙리조트 2박 + 반엔트리 원베드 풀빌라 2박
                  </span>
                  <span className="info__subtitle">4박 6일 일정</span>
                  <div className="info__detail__wrapper">
                    <span>-페어먼트 디럭스(5성급) 2박</span>
                    <span>-원베드 풀빌라 2박</span>
                    <span>-전 일정 조식 포함</span>
                    <span>-반얀트리 투숙시 런치 1회 석식 2회 제공</span>
                  </div>
                </div>
              </div>
              <div className="package__price__wrapper">
                <div className="mb">
                  <div className="price__wrapper">
                    <span className="price__main">₩ 3,500,000</span>
                    <span className="price__sub">/ 1인</span>
                  </div>
                  <span className="price__sub">항공료 불포함</span>
                </div>
                <SelectBtn checked />
              </div>
            </div>
          </div>
        </div>
        <div className="schedule__byairline__wrapper">
          <div className="header__wrapper">
            <span className="header__main">항공사별 일정표</span>
            <SubCategorySelector
              type="sidebar"
              categories={[
                { idx: 0, title: "직항" },
                { idx: 0, title: "경유" },
              ]}
              currentTitle={flightType}
              setCurrentTitle={setFlightType}
            />
          </div>
          <div className="flight__items__wrapper">
            {flightObjs.map((flightObj, idx) => (
              <FlightItem key={id} {...flightObj} checked={idx === 0} />
            ))}
          </div>
        </div>
        <div className="included__items__section__wrapper mx__section">
          <div className="single__header__main">포함/불포함</div>
          <div className="included__items__wrapper">
            <div className="index__title__wrapper">
              <span className="included__icon">O</span>
              <span>포함사항</span>
            </div>
            <div className="elements__wrapper">
              <span>- 단독행사</span>
              <span>- 2일차 & 3일차 자유로운 선택투어 (택1)</span>
              <span>
                - 다양한 특식 제공 : 로맨틱 디너, 잠바란 씨푸드 특식, 한정식
              </span>
              <span>
                - 빌라내 로맨틱 캔들디너 & 셋디너 (빌라별로 달라질 수 있습니다.)
              </span>
              <span>
                - 럭셔리 스파 총 4회 : 리조트내 스파 1회 및 선택스파 3회
              </span>
              <span>- 로맨틱 나이트투어</span>
              <span>- 여행자 보험</span>
            </div>
            <div className="index__title__wrapper">
              <span className="unincluded__icon">X</span>
              <span>불포함사항</span>
            </div>
            <div className="elements__wrapper">
              <span>- 가이드 & 기사팁</span>
              <span>- 매너 팁 (안마사, 벨보이 등)</span>
              <span>- 개인경비</span>
            </div>
          </div>
        </div>
        <div className="must__read__section__wrapper mx__section">
          <div className="single__header__main">필독사항</div>
          <div className="must__read__wrapper">
            <span>
              - 상기일정은 항공 및 현지사정으로 인하여 변경될 수 있습니다.
            </span>
            <span>- 환율변동에 의해 요금이 가/감 될 수 있습니다.</span>
            <span>
              - 취소시 항공 및 호텔(리조트, 풀빌라 등)의 취소 수수료가 발생하는
              상품입니다.
            </span>
            <span>
              - 예약시 여권상의 정확한 영문이름으로 예약하셔야 하며 여권
              유효기간은 출발일 기준 6개월 이상 남아있어야 합니다.
            </span>
            <span>
              - 외국/이중 국적자의 해외여행은 도착지국가의 출입국 정책이
              상이하므로, 반드시 여행자 본인이 해당국의 대사관에 확인하셔야
              합니다.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
