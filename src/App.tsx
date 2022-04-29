import { Routes, Route } from 'react-router-dom';
import Portal from './pages/Portal';
import MainNav from './components/layout/MainNav';
import MainNavItem from './components/layout/MainNavItem';
import UseEffectAndDebouncing from './pages/UseEffectAndDebouncing';
import StyledComponents from './pages/StyledComponents';
import UseReducer from './pages/UseReducer';
import UseContext from './pages/UseContext';
import UseImperativeHandle from './pages/UseImperativeHandle';
import TransitionPage from './pages/TransitionPage';
import CSSTransitionPage from './pages/CSSTransitionPage';
import TransitionGroupPage from './pages/TransitionGroupPage';
import SearchParamsPage from './pages/SearchParamsPage';

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
        <MainNavItem to="/transition">Transition</MainNavItem>
        <MainNavItem to="/css-transition">CSSTransition</MainNavItem>
        <MainNavItem to="/transition-group">TransitionGroup</MainNavItem>
        <MainNavItem to="/search-params">SearchParams</MainNavItem>
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
        <Route path="/transition" element={<TransitionPage />} />
        <Route path="/css-transition" element={<CSSTransitionPage />} />
        <Route path="/transition-group" element={<TransitionGroupPage />} />
        <Route path="/search-params" element={<SearchParamsPage />} />
        <Route path="*" element={<Portal />} />
      </Routes>
    </div>
  );
}

export default App;
