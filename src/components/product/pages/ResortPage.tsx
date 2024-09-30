import mockData from "../../../mockData";
import ResortBestSection from "../section/tour-page/ResortBestSection";
import ResortMainSection from "../section/tour-page/ResortMainSection";
import ResortSearchBar from "../section/tour-page/ResortSearchBar";
import ResortTourSection from "../section/tour-page/ResortTourSection";

export default function ResortPage() {
  const tourData = mockData.tour.findMany();
  return (
    <div>
      <ResortSearchBar itemObjs={tourData} />
      <ResortMainSection />
      <ResortTourSection itemObjs={tourData} />
      <ResortBestSection />
    </div>
  );
}
