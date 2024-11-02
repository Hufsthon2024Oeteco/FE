import Main from './pages/Main';
import Login from './pages/Login';
import Signup from './pages/Signup';

const routes=[
    {
        path:'/',
        element:<Main />,
        name:'메인 페이지'
    },
    {
        path:'/login',
        element:<Login />,
        name:'로그인 페이지'
    },
    {
        path:'/signup',
        element:<Signup />,
        name:'회원가입 페이지'
    }
]

export default routes;