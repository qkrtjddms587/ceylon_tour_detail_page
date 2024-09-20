import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ResortPage from "./components/pages/ResortPage";
import PackagePage from "./components/pages/PackagePage";

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "tour",
        element: <ResortPage />,
      },
      //   {
      //     path: "tour/:tourId",
      //     element: <ResortDetailPage />,
      //   },
      //   {
      //     path: "hotel/:hotelId",
      //     element: <HotelPage />,
      //   },
      {
        path: "package/:packageId",
        element: <PackagePage />,
      },
    ],
  },
]);

export default router;
