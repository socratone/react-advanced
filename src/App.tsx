import { Routes, Route } from 'react-router-dom';
import Portal from './pages/Portal';
import MainNav from './components/layout/MainNav';
import MainNavItem from './components/layout/MainNavItem';
import UseEffectAndDebouncing from './pages/UseEffectAndDebouncing';

function App() {
  return (
    <div>
      <MainNav>
        <MainNavItem to="/portal">Portal</MainNavItem>
        <MainNavItem to="/use-effect-and-debouncing">
          UseEffectAndDebouncing
        </MainNavItem>
      </MainNav>
      <Routes>
        <Route path="/portal" element={<Portal />} />
        <Route
          path="/use-effect-and-debouncing"
          element={<UseEffectAndDebouncing />}
        />
        <Route path="*" element={<Portal />} />
      </Routes>
    </div>
  );
}

export default App;
