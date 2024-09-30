export default function HotelInfoImage({
  webImagePath,
  mobileImagePath,
}: {
  webImagePath?: string;
  mobileImagePath: string;
}) {
  return (
    <div className="hotel__info__image__wrapper">
      <div className="only-web web__image__wrapper mx__section">
        {webImagePath ? (
          <img src={webImagePath} alt="temp" />
        ) : (
          <span>리조트 안내 이미지 들어가는 곳</span>
        )}
      </div>
      <div className="only-mobile mobile__image__wrapper">
        <img src={mobileImagePath} alt="temp" />
      </div>
    </div>
  );
}
