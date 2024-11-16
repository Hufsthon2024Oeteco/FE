import Main from "./pages/mainpage/Main";
import AreaInput from "./pages/mapPage/AreaInput";
import MapPage from "./pages/mapPage/MapPage";

const routes = [
  {
    path: "/",
    element: <Main />,
    name: "메인 페이지",
  },
  {
    path: "/area",
    element: <AreaInput />,
    name: "지역입력",
  },
  {
    path: "/area/map",
    element: <MapPage />,
    name: "지역입력",
  },
];

export default routes;
