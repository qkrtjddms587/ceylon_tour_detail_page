import { getTourData } from "../../utilies";
import ResortSearchBar from "../common/ResortSearchBar";

export default function ResortPage() {
  const { tourObjs } = getTourData();
  return (
    <div>
      <ResortSearchBar itemObjs={tourObjs} />
      {/* <ResortMainSection />
      <ResortTourSection itemObjs={tourObjs} />
      <ResortBestSection /> */}
    </div>
  );
}
