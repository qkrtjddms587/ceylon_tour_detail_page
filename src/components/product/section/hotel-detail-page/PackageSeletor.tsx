export default function PackageSeletor() {
  return (
    <div className="package__selector__wrapper">
      <div className="reverse__wrapper">
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
      </div>
      <div className="hotel__selector__wrapper">
        <span>포 포인츠 바이 쉐리톤</span>
        <span className="selected">세인트레지스 풀빌라</span>
      </div>
    </div>
  );
}
