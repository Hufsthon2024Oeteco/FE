import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import routes from './routes';
import Mobile from './styles/Mobile';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
// import './styles/fonts.css';

function App() {
  const elements = routes.map((item, index) => (
    <Route key={index} path={item.path} element={item.element} />
  ));

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          {/* 모바일 레이아웃을 위한 루트 경로 */}
          <Route path="/" element={<Mobile />}>
            {routes.map((item, index) => (
              <Route key={index} path={item.path} element={item.element} />
            ))}
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;