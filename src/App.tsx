import { Routes, Route } from 'react-router-dom';
import Portal from './pages/Portal';
import MainNav from './components/layout/MainNav';
import MainNavItem from './components/layout/MainNavItem';
import Debouncing from './pages/Debouncing';

function App() {
  return (
    <div>
      <MainNav>
        <MainNavItem to="/portal">Portal</MainNavItem>
        <MainNavItem to="/debouncing">Debouncing</MainNavItem>
      </MainNav>
      <Routes>
        <Route path="/portal" element={<Portal />} />
        <Route path="/debouncing" element={<Debouncing />} />
        <Route path="*" element={<Portal />} />
      </Routes>
    </div>
  );
}

export default App;
