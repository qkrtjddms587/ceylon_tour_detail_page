interface TourHeaderSectionProps {
  title: string;
  subtitle: string;
  mainBgImage: string;
}

export default function TourHeaderSection({
  title,
  subtitle,
  mainBgImage,
}: TourHeaderSectionProps) {
  return (
    <div className="tour__header__section__wrapper">
      <img className="bg__image" src={mainBgImage} alt="temp" />
      <div className="header__info">
        <span className="header__title">{title}</span>
        <span className="header__subtitle">{subtitle}</span>
      </div>
    </div>
  );
}
