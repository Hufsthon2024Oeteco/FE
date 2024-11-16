import Main from "./pages/mainpage/Main";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
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
  {
    path: "/login",
    element: <Login />,
    name: "로그인 페이지",
  },
  {
    path: "/signup",
    element: <Signup />,
    name: "회원가입 페이지",
  },
];

export default routes;
