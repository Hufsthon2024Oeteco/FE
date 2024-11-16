import Main from "./pages/mainpage/Main";
import AreaInput from "./pages/mapPage/AreaInput";
import LoadingPage from "./pages/LoadingPage/LoadingPage";
import MapPage from "./pages/mapPage/MapPage/MapPage";

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
    path: "/area/loading",
    element: <LoadingPage />,
    name: "로딩 중",
  },
  {
    path: "/area/map",
    element: <MapPage />,
    name: "지역입력",
  },
];

export default routes;
