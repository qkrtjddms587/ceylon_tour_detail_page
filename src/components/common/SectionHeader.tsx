interface SectionHeaderProps {
  titles: string[];
  descriptions: string[];
  mobileTitle: string[];
}

export default function SectionHeader({
  titles,
  descriptions,
  mobileTitle,
}: SectionHeaderProps) {
  return (
    <div className="section__header__wrapper">
      <div className="section__title">
        <span>{titles[0]}</span>
        <div className="section__main__title">
          <span>{titles[1]}</span>
          <span>{titles[2]}</span>
        </div>
        <div className="section__mobile__title">
          <span>{mobileTitle[0]}</span>
          <span>{mobileTitle[1]}</span>
        </div>
      </div>
      <div className="section__desc">
        {descriptions.map((description, idx) => (
          <span key={idx}>{description}</span>
        ))}
      </div>
    </div>
  );
}
