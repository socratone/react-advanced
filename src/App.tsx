import { Routes, Route } from 'react-router-dom';
import Portal from './pages/Portal';
import MainNav from './components/layout/MainNav';
import MainNavItem from './components/layout/MainNavItem';
import UseEffectAndDebouncing from './pages/UseEffectAndDebouncing';
import StyledComponents from './pages/StyledComponents';
import UseReducer from './pages/UseReducer';
import UseContext from './pages/UseContext';
import UseImperativeHandle from './pages/UseImperativeHandle';
import ReactTransitionGroup from './pages/ReactTransitionGroup';

function App() {
  return (
    <div>
      <MainNav>
        <MainNavItem to="/portal">Portal</MainNavItem>
        <MainNavItem to="/use-effect-and-debouncing">
          UseEffectAndDebouncing
        </MainNavItem>
        <MainNavItem to="/styled-components">StyledComponents</MainNavItem>
        <MainNavItem to="/use-reducer">UseReducer</MainNavItem>
        <MainNavItem to="/use-context">UseContext</MainNavItem>
        <MainNavItem to="/use-imperative-handle">
          UseImperativeHandle
        </MainNavItem>
        <MainNavItem to="/react-transition-group">
          ReactTransitionGroup
        </MainNavItem>
      </MainNav>
      <Routes>
        <Route path="/portal" element={<Portal />} />
        <Route
          path="/use-effect-and-debouncing"
          element={<UseEffectAndDebouncing />}
        />
        <Route path="/styled-components" element={<StyledComponents />} />
        <Route path="/use-reducer" element={<UseReducer />} />
        <Route path="/use-context" element={<UseContext />} />
        <Route
          path="/use-imperative-handle"
          element={<UseImperativeHandle />}
        />
        <Route
          path="/react-transition-group"
          element={<ReactTransitionGroup />}
        />
        <Route path="*" element={<Portal />} />
      </Routes>
    </div>
  );
}

export default App;
