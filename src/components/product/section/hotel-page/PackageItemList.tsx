interface PackageItemListProps {
  title: string;
  hotelId: number;
  packages: {
    thumbnailImagePath: string;
    packagePeriod: string;
    title: string;
  }[];
  state: string;
}

export default function PackageItemList({
  title,
  hotelId,
  packages,
  state,
}: PackageItemListProps) {
  return (
    <div className="package__item__list__wrapper mx__section">
      <div className="header__title">
        <span>{title}</span>
        <span> 추천 상품</span>
      </div>
      <div className="package__items__wrapper">
        {packages.map((item, idx) => (
          <a
            href={`/hotel/${hotelId}/packages/detail/${idx}`}
            className="package__item__wrapper"
          >
            <div className="image__wrapper">
              <img src={item.thumbnailImagePath} alt="temp" />
            </div>
            <div className="package__info__wrapper">
              <div className="info__header">
                <span className="tour__title">{state}</span>
                <span className="tour__period">{item.packagePeriod}</span>
              </div>
              <span className="package__title">{item.title}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
