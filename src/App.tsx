import { Routes, Route } from 'react-router-dom';
import PortalPage from './pages/PortalPage';
import MainNav from './components/layout/MainNav';
import MainNavItem from './components/layout/MainNavItem';
import UseEffectAndDebouncingPage from './pages/UseEffectAndDebouncingPage';
import StyledComponentsPage from './pages/StyledComponentsPage';
import UseReducerPage from './pages/UseReducerPage';
import UseContextPage from './pages/UseContextPage';
import UseImperativeHandlePage from './pages/UseImperativeHandlePage';
import TransitionPage from './pages/TransitionPage';
import CSSTransitionPage from './pages/CSSTransitionPage';
import TransitionGroupPage from './pages/TransitionGroupPage';
import SearchParamsPage from './pages/SearchParamsPage';
import SubcomponentsPage from './pages/SubcomponentsPage';
import ReactChildrenPage from './pages/ReactChildrenPage';
import FunctionalProgrammingPage from './pages/FunctionalProgrammingPage';
import ScrollAnimationPage from './pages/ScrollAnimation';
import ForceRemountPage from './pages/ForceRemountPage';
import MobileViewportResizePage from './pages/MobileViewportResizePage';
import SwiperPage from './pages/SwiperPage';
import UseEffectDependencyPage from './pages/UseEffectDependencyPage';
import ReactMemoPropPage from './pages/ReactMemoPropPage';

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
        <MainNavItem to="/subcomponents">Subcomponents</MainNavItem>
        <MainNavItem to="/react-children">ReactChildren</MainNavItem>
        <MainNavItem to="/functional-programming">
          FunctionalProgramming
        </MainNavItem>
        <MainNavItem to="/scroll-animation">ScrollAnimation</MainNavItem>
        <MainNavItem to="/force-remount">ForceRemount</MainNavItem>
        <MainNavItem to="/mobile-viewport-resize">
          MobileViewportResize
        </MainNavItem>
        <MainNavItem to="/swiper">Swiper</MainNavItem>
        <MainNavItem to="/use-effect-dependency">
          UseEffectDependencys
        </MainNavItem>
        <MainNavItem to="/react-memo-prop">ReactMemoProp</MainNavItem>
      </MainNav>
      <Routes>
        <Route path="/portal" element={<PortalPage />} />
        <Route
          path="/use-effect-and-debouncing"
          element={<UseEffectAndDebouncingPage />}
        />
        <Route path="/styled-components" element={<StyledComponentsPage />} />
        <Route path="/use-reducer" element={<UseReducerPage />} />
        <Route path="/use-context" element={<UseContextPage />} />
        <Route
          path="/use-imperative-handle"
          element={<UseImperativeHandlePage />}
        />
        <Route path="/transition" element={<TransitionPage />} />
        <Route path="/css-transition" element={<CSSTransitionPage />} />
        <Route path="/transition-group" element={<TransitionGroupPage />} />
        <Route path="/search-params" element={<SearchParamsPage />} />
        <Route path="/subcomponents" element={<SubcomponentsPage />} />
        <Route path="/react-children" element={<ReactChildrenPage />} />
        <Route
          path="/functional-programming"
          element={<FunctionalProgrammingPage />}
        />
        <Route path="/scroll-animation" element={<ScrollAnimationPage />} />
        <Route path="/force-remount" element={<ForceRemountPage />} />
        <Route
          path="/mobile-viewport-resize"
          element={<MobileViewportResizePage />}
        />
        <Route path="/swiper" element={<SwiperPage />} />
        <Route
          path="/use-effect-dependency"
          element={<UseEffectDependencyPage />}
        />
        <Route path="/react-memo-prop" element={<ReactMemoPropPage />} />
        <Route path="*" element={<PortalPage />} />
      </Routes>
    </div>
  );
}

export default App;
