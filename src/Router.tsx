import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HotelDetailPage from "./components/product/pages/HotelDetailPage";
import HotelPage from "./components/product/pages/HotelPage";
import HotelInfoSection from "./components/product/section/hotel-page/HotelInfoSection";
import HotelPackagesSection from "./components/product/section/hotel-page/HotelPackagesSection";
import ResortPage from "./components/product/pages/ResortPage";
import ResortDetailPage from "./components/product/pages/ResortDetailPage";

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "tour",
        element: <ResortPage />,
      },
      {
        path: "tour/:tourId",
        element: <ResortDetailPage />,
      },
      {
        path: "hotel/:hotelId",
        element: <HotelPage />,
        children: [
          {
            path: "info",
            element: <HotelInfoSection />,
          },
          {
            path: "packages",
            element: <HotelPackagesSection />,
          },
          {
            path: "packages/detail/:pakageId",
            element: <HotelDetailPage />,
          },
        ],
      },
    ],
  },
]);

export default router;
