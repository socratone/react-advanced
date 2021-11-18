import { Routes, Route } from 'react-router-dom';
import Portal from './pages/Portal';
import MainNav from './components/layout/MainNav';
import MainNavItem from './components/layout/MainNavItem';
import UseEffectAndDebouncing from './pages/UseEffectAndDebouncing';
import StyledComponents from './pages/StyledComponents';

function App() {
  return (
    <div>
      <MainNav>
        <MainNavItem to="/portal">Portal</MainNavItem>
        <MainNavItem to="/use-effect-and-debouncing">
          UseEffectAndDebouncing
        </MainNavItem>
        <MainNavItem to="/styled-components">StyledComponents</MainNavItem>
      </MainNav>
      <Routes>
        <Route path="/portal" element={<Portal />} />
        <Route
          path="/use-effect-and-debouncing"
          element={<UseEffectAndDebouncing />}
        />
        <Route path="/styled-components" element={<StyledComponents />} />
        <Route path="*" element={<Portal />} />
      </Routes>
    </div>
  );
}

export default App;
