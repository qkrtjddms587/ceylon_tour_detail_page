import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HotelDetailPage from "./components/product/pages/HotelDetailPage";
import HotelPage from "./components/product/pages/HotelPage";
import HotelInfoSection from "./components/product/section/hotel-page/HotelInfoSection";
import HotelPackagesSection from "./components/product/section/hotel-page/HotelPackagesSection";

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      // {
      //   path: "tour",
      //   element: <ResortPage />,
      // },
      //   {
      //     path: "tour/:tourId",
      //     element: <ResortDetailPage />,
      //   },
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
