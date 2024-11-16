import Main from "./pages/mainpage/Main";
import AreaInput from "./pages/mapPage/AreaInput";
import AreaLocation from "./pages/mapPage/AreaLocation";
import MapPage from "./pages/mapPage/MapPage/MapPage";
import MapTest from "./pages/mapPage/mapTest";

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
  {
    path: "/arealocation",
    element: <AreaLocation />,
    name: "지역입력 마우스 클릭",
  },
  {
    path: "/test",
    element: <MapTest />,
    name: "test 페이지",
  },
];

export default routes;
