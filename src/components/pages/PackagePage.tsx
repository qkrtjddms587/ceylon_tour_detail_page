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
import scheduleImg1 from "../../images/hotel/0/schedule-1.jpg";
import scheduleImg2 from "../../images/hotel/0/schedule-2.jpg";
import scheduleImg3 from "../../images/hotel/0/schedule-3.jpg";
import scheduleImg4 from "../../images/hotel/0/schedule-4.jpg";
import RatingBoard from "../common/RatingBoard";
import ScheduleElementHeader from "../common/ScheduleElementHeader";

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
        <div className="mx__section">
          <div className="header__wrapper">
            <span className="header__main">일정표</span>
            <span className="header__sub">
              KE 대한항공 인천 오후 출발 (17:40) / 발리 5박 7일 (2024.10.16 ~
              2024.10.23)
            </span>
          </div>
          <div className="schedule__tables__wrapper">
            <div className="schedule__table__wrapper">
              <div className="schedule__header">
                <span className="main__text">1 DAY</span>
                <span className="sub__text">2024-10-16(토)</span>
              </div>
              <div className="schedule__main__wrapper">
                <div className="schedule__element__wrapper">
                  <div className="flight__schedule__board__wrapper">
                    <div className="flight__schedule__board">
                      <div className="flight__info__wrapper">
                        <img src={KEAir} alt="temp" />
                        <span>대한항공 KE0188</span>
                      </div>
                      <div className="flight__time__wrapper">
                        <span className="flight__time">07시간 30분</span>
                        <div className="depart__info">
                          <div />
                          <span className="time__text">15:30</span>
                          <span className="airport__text">인천(INC) 출발</span>
                        </div>
                        <div className="arrive__info">
                          <div />
                          <span className="time__text">19:50</span>
                          <span className="airport__text">발리(BAL) 도착</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="schedule__element__wrapper">
                  <ScheduleElementHeader
                    location="인천"
                    time="15:30"
                    schedule="인천국제공항 출발 [KE0180]"
                  />
                  <div className="schedule__element__main__wrapper">
                    <div className="table__wrapper">
                      <div className="table__header">
                        인천공항 출입국 절차 안내
                      </div>
                      <div className="table__main">
                        <span>인천공항에서 필요한 내용을 적는 곳입니다.</span>
                        <span>
                          필요한 서류나 도착해야하는 시간 등을 안내합니다.
                          필요한 내용을 적는 곳입니다.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="schedule__element__wrapper">
                  <ScheduleElementHeader
                    location="발리"
                    time="19:50"
                    schedule="발리국제공항 도착"
                  />
                  <div className="schedule__element__main__wrapper">
                    <div className="standard__text__wrapper">
                      <span>발리공항에서 필요한 내용을 적는 곳입니다.</span>
                      <span>미팅장소나 방법 등을 적는 곳입니다.</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="additional__schedule__wrapper">
                <div className="index__wrapper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="25"
                    viewBox="0 0 36 25"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_19_3094)">
                      <path
                        d="M16.8802 23.9301C22.3644 23.9301 26.8102 19.4843 26.8102 14.0001C26.8102 8.51588 22.3644 4.07007 16.8802 4.07007C11.396 4.07007 6.9502 8.51588 6.9502 14.0001C6.9502 19.4843 11.396 23.9301 16.8802 23.9301Z"
                        fill="white"
                      />
                      <path
                        d="M16.8802 24.9301C10.8502 24.9301 5.9502 20.0301 5.9502 14.0001C5.9502 7.97006 10.8502 3.06006 16.8802 3.06006C22.9102 3.06006 27.8102 7.96006 27.8102 13.9901C27.8102 20.0201 22.9102 24.9201 16.8802 24.9201V24.9301ZM16.8802 5.07006C11.9602 5.07006 7.9502 9.08006 7.9502 14.0001C7.9502 18.9201 11.9602 22.9301 16.8802 22.9301C21.8002 22.9301 25.8102 18.9201 25.8102 14.0001C25.8102 9.08006 21.8002 5.07006 16.8802 5.07006Z"
                        fill="#1D1D1B"
                      />
                      <path
                        d="M16.8799 19.96C20.1715 19.96 22.8399 17.2917 22.8399 14C22.8399 10.7084 20.1715 8.04004 16.8799 8.04004C13.5883 8.04004 10.9199 10.7084 10.9199 14C10.9199 17.2917 13.5883 19.96 16.8799 19.96Z"
                        fill="white"
                      />
                      <path
                        d="M16.8799 20.95C13.0399 20.95 9.91992 17.83 9.91992 13.99C9.91992 10.15 13.0399 7.03003 16.8799 7.03003C20.7199 7.03003 23.8399 10.15 23.8399 13.99C23.8399 17.83 20.7199 20.95 16.8799 20.95ZM16.8799 9.03003C14.1499 9.03003 11.9199 11.25 11.9199 13.99C11.9199 16.73 14.1399 18.95 16.8799 18.95C19.6199 18.95 21.8399 16.73 21.8399 13.99C21.8399 11.25 19.6199 9.03003 16.8799 9.03003Z"
                        fill="#1D1D1B"
                      />
                      <path
                        d="M34.42 1V6.19C34.42 7.09 33.69 7.82 32.79 7.82H30.13C29.23 7.82 28.5 7.09 28.5 6.19V1"
                        fill="white"
                      />
                      <path
                        d="M32.79 8.82H30.13C28.68 8.82 27.5 7.64 27.5 6.19V1H29.5V6.19C29.5 6.53 29.78 6.82 30.13 6.82H32.79C33.14 6.82 33.42 6.54 33.42 6.19V1H35.42V6.19C35.42 7.64 34.24 8.82 32.79 8.82Z"
                        fill="#1D1D1B"
                      />
                      <path d="M32.46 1H30.46V24.2H32.46V1Z" fill="#1D1D1B" />
                      <path d="M2 1H0V24.2H2V1Z" fill="#1D1D1B" />
                      <path
                        d="M1 1C2.8 1 4.25 2.46 4.25 4.25V10.44H1V1Z"
                        fill="white"
                      />
                      <path
                        d="M4.25 11.44H1C0.45 11.44 0 10.99 0 10.44V1C0 0.45 0.45 0 1 0C3.35 0 5.25 1.91 5.25 4.25V10.44C5.25 10.99 4.8 11.44 4.25 11.44ZM2 9.44H3.25V4.25C3.25 3.37 2.74 2.6 2 2.23V9.44Z"
                        fill="#1D1D1B"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_19_3094">
                        <rect width="35.42" height="24.93" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span>식사</span>
                </div>
                <div className="meal__info__wrapper">
                  <span>[조식] 없음</span>
                  <span>[중식] 기내식</span>
                  <span>[석식] 호텔식</span>
                </div>
              </div>
              <div className="additional__schedule__wrapper">
                <div className="index__wrapper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="24"
                    viewBox="0 0 36 24"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_19_3041)">
                      <path
                        d="M26.1473 0.917725H9.11328V23.0822H26.1473V0.917725Z"
                        fill="white"
                        stroke="#1D1D1B"
                        stroke-width="2"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.3623 5.30469H14.6384"
                        stroke="#1D1D1B"
                        stroke-width="2"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M16.4922 5.30469H18.7683"
                        stroke="#1D1D1B"
                        stroke-width="2"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M20.623 5.30469H22.89"
                        stroke="#1D1D1B"
                        stroke-width="2"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.3623 8.75562H14.6384"
                        stroke="#1D1D1B"
                        stroke-width="2"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M16.4922 8.75562H18.7683"
                        stroke="#1D1D1B"
                        stroke-width="2"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M20.623 8.75562H22.89"
                        stroke="#1D1D1B"
                        stroke-width="2"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.3623 12.2156H14.6384"
                        stroke="#1D1D1B"
                        stroke-width="2"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M16.4922 12.2156H18.7683"
                        stroke="#1D1D1B"
                        stroke-width="2"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M20.623 12.2156H22.89"
                        stroke="#1D1D1B"
                        stroke-width="2"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M19.6404 17.3645H15.6113V23.0823H19.6404V17.3645Z"
                        fill="white"
                        stroke="#1D1D1B"
                        stroke-width="2"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M9.11376 6.39697H0.917969V23.0823H9.11376V6.39697Z"
                        fill="white"
                        stroke="#1D1D1B"
                        stroke-width="2"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M3.88184 10.2607H6.14876"
                        stroke="#1D1D1B"
                        stroke-width="2"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M3.88184 13.1885H6.14876"
                        stroke="#1D1D1B"
                        stroke-width="2"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M3.88184 16.1072H6.14876"
                        stroke="#1D1D1B"
                        stroke-width="2"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M34.3618 6.39697H26.166V23.0823H34.3618V6.39697Z"
                        fill="white"
                        stroke="#1D1D1B"
                        stroke-width="2"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M29.1309 10.2607H31.3978"
                        stroke="#1D1D1B"
                        stroke-width="2"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M29.1309 13.1885H31.3978"
                        stroke="#1D1D1B"
                        stroke-width="2"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M29.1309 16.1072H31.3978"
                        stroke="#1D1D1B"
                        stroke-width="2"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_19_3041">
                        <rect width="35.2795" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span>호텔</span>
                </div>
                <div className="hotel__info__wrapper">
                  <span>세인트레지스 호텔</span>
                  <div>
                    <RatingBoard rating={5} />
                  </div>
                </div>
              </div>
            </div>
            <div className="schedule__table__wrapper">
              <div className="schedule__header">
                <span className="main__text">2 DAY</span>
                <span className="sub__text">2024-10-17(일)</span>
              </div>
              <div className="schedule__main__wrapper">
                <div className="schedule__element__wrapper">
                  <ScheduleElementHeader
                    location="발리"
                    schedule="조식 후 선택일정 즐기기"
                  />
                  <div className="schedule__element__main__wrapper">
                    <div className="selected__schedule__table__wrapper">
                      <span className="header">선택일정 (택1)</span>
                      <div className="main">
                        <div>
                          1. 정글 어드벤처 4종 즐기기 + 현지식 뷔페
                          <span>
                            플라잉폭스, 래프팅, 트리탑, 레이지리버 or 스윙
                          </span>
                        </div>
                        <div>
                          2. 해양스포츠 4종 즐기기 + 외부식(울람 레스토랑
                          생선/닭 현지식)
                        </div>
                        <div>
                          3. 아름다운 바다 100배 즐기기 데이 크루즈 + 선상뷔페식
                        </div>
                        <div>
                          4. 리조트 내 편안한 자유 일정 + 리조트 현지식 or
                          외부식
                        </div>
                        <div>5. 마린&사파리 관광 + 현지식 뷔페</div>
                      </div>
                      <div className="images__box">
                        <div>
                          <img src={scheduleImg1} alt="temp" />
                        </div>
                        <div>
                          <img src={scheduleImg2} alt="temp" />
                        </div>
                        <div>
                          <img src={scheduleImg3} alt="temp" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="schedule__element__wrapper">
                  <ScheduleElementHeader schedule="일정 후 럭져리 스파 즐기기 (1가지 무료선택 가능)" />
                  <div className="schedule__element__main__wrapper">
                    <div className="standard__schedule__table__wrapper">
                      <div className="image__box">
                        <img src={scheduleImg4} alt="temp" />
                      </div>
                      <div className="main__wrapper">
                        <span className="header">럭셔리 스파</span>
                        <div className="main">
                          <span>• 럭셔리 스톤마사지 120분</span>
                          <span>• 초콜릿 스파마사지 120분</span>
                          <span>• 아로마 오일 스파마사지 120분</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="schedule__element__wrapper">
                  <ScheduleElementHeader schedule="리조트 투숙 및 휴식" />
                </div>
              </div>
              <div className="additional__schedule__wrapper">
                <div className="index__wrapper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="25"
                    viewBox="0 0 36 25"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_19_3094)">
                      <path
                        d="M16.8802 23.9301C22.3644 23.9301 26.8102 19.4843 26.8102 14.0001C26.8102 8.51588 22.3644 4.07007 16.8802 4.07007C11.396 4.07007 6.9502 8.51588 6.9502 14.0001C6.9502 19.4843 11.396 23.9301 16.8802 23.9301Z"
                        fill="white"
                      />
                      <path
                        d="M16.8802 24.9301C10.8502 24.9301 5.9502 20.0301 5.9502 14.0001C5.9502 7.97006 10.8502 3.06006 16.8802 3.06006C22.9102 3.06006 27.8102 7.96006 27.8102 13.9901C27.8102 20.0201 22.9102 24.9201 16.8802 24.9201V24.9301ZM16.8802 5.07006C11.9602 5.07006 7.9502 9.08006 7.9502 14.0001C7.9502 18.9201 11.9602 22.9301 16.8802 22.9301C21.8002 22.9301 25.8102 18.9201 25.8102 14.0001C25.8102 9.08006 21.8002 5.07006 16.8802 5.07006Z"
                        fill="#1D1D1B"
                      />
                      <path
                        d="M16.8799 19.96C20.1715 19.96 22.8399 17.2917 22.8399 14C22.8399 10.7084 20.1715 8.04004 16.8799 8.04004C13.5883 8.04004 10.9199 10.7084 10.9199 14C10.9199 17.2917 13.5883 19.96 16.8799 19.96Z"
                        fill="white"
                      />
                      <path
                        d="M16.8799 20.95C13.0399 20.95 9.91992 17.83 9.91992 13.99C9.91992 10.15 13.0399 7.03003 16.8799 7.03003C20.7199 7.03003 23.8399 10.15 23.8399 13.99C23.8399 17.83 20.7199 20.95 16.8799 20.95ZM16.8799 9.03003C14.1499 9.03003 11.9199 11.25 11.9199 13.99C11.9199 16.73 14.1399 18.95 16.8799 18.95C19.6199 18.95 21.8399 16.73 21.8399 13.99C21.8399 11.25 19.6199 9.03003 16.8799 9.03003Z"
                        fill="#1D1D1B"
                      />
                      <path
                        d="M34.42 1V6.19C34.42 7.09 33.69 7.82 32.79 7.82H30.13C29.23 7.82 28.5 7.09 28.5 6.19V1"
                        fill="white"
                      />
                      <path
                        d="M32.79 8.82H30.13C28.68 8.82 27.5 7.64 27.5 6.19V1H29.5V6.19C29.5 6.53 29.78 6.82 30.13 6.82H32.79C33.14 6.82 33.42 6.54 33.42 6.19V1H35.42V6.19C35.42 7.64 34.24 8.82 32.79 8.82Z"
                        fill="#1D1D1B"
                      />
                      <path d="M32.46 1H30.46V24.2H32.46V1Z" fill="#1D1D1B" />
                      <path d="M2 1H0V24.2H2V1Z" fill="#1D1D1B" />
                      <path
                        d="M1 1C2.8 1 4.25 2.46 4.25 4.25V10.44H1V1Z"
                        fill="white"
                      />
                      <path
                        d="M4.25 11.44H1C0.45 11.44 0 10.99 0 10.44V1C0 0.45 0.45 0 1 0C3.35 0 5.25 1.91 5.25 4.25V10.44C5.25 10.99 4.8 11.44 4.25 11.44ZM2 9.44H3.25V4.25C3.25 3.37 2.74 2.6 2 2.23V9.44Z"
                        fill="#1D1D1B"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_19_3094">
                        <rect width="35.42" height="24.93" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span>식사</span>
                </div>
                <div className="meal__info__wrapper">
                  <span>[조식] 리조트</span>
                  <span>[중식] 선택식</span>
                  <span>[석식] 씨푸드</span>
                </div>
              </div>
              <div className="additional__schedule__wrapper">
                <div className="index__wrapper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="24"
                    viewBox="0 0 36 24"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_19_3041)">
                      <path
                        d="M26.1473 0.917725H9.11328V23.0822H26.1473V0.917725Z"
                        fill="white"
                        stroke="#1D1D1B"
                        stroke-width="2"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.3623 5.30469H14.6384"
                        stroke="#1D1D1B"
                        stroke-width="2"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M16.4922 5.30469H18.7683"
                        stroke="#1D1D1B"
                        stroke-width="2"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M20.623 5.30469H22.89"
                        stroke="#1D1D1B"
                        stroke-width="2"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.3623 8.75562H14.6384"
                        stroke="#1D1D1B"
                        stroke-width="2"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M16.4922 8.75562H18.7683"
                        stroke="#1D1D1B"
                        stroke-width="2"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M20.623 8.75562H22.89"
                        stroke="#1D1D1B"
                        stroke-width="2"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.3623 12.2156H14.6384"
                        stroke="#1D1D1B"
                        stroke-width="2"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M16.4922 12.2156H18.7683"
                        stroke="#1D1D1B"
                        stroke-width="2"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M20.623 12.2156H22.89"
                        stroke="#1D1D1B"
                        stroke-width="2"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M19.6404 17.3645H15.6113V23.0823H19.6404V17.3645Z"
                        fill="white"
                        stroke="#1D1D1B"
                        stroke-width="2"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M9.11376 6.39697H0.917969V23.0823H9.11376V6.39697Z"
                        fill="white"
                        stroke="#1D1D1B"
                        stroke-width="2"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M3.88184 10.2607H6.14876"
                        stroke="#1D1D1B"
                        stroke-width="2"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M3.88184 13.1885H6.14876"
                        stroke="#1D1D1B"
                        stroke-width="2"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M3.88184 16.1072H6.14876"
                        stroke="#1D1D1B"
                        stroke-width="2"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M34.3618 6.39697H26.166V23.0823H34.3618V6.39697Z"
                        fill="white"
                        stroke="#1D1D1B"
                        stroke-width="2"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M29.1309 10.2607H31.3978"
                        stroke="#1D1D1B"
                        stroke-width="2"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M29.1309 13.1885H31.3978"
                        stroke="#1D1D1B"
                        stroke-width="2"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M29.1309 16.1072H31.3978"
                        stroke="#1D1D1B"
                        stroke-width="2"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_19_3041">
                        <rect width="35.2795" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span>호텔</span>
                </div>
                <div className="hotel__info__wrapper">
                  <span>세인트레지스 호텔</span>
                  <div>
                    <RatingBoard rating={5} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
