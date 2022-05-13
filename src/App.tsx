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
        <Route path="*" element={<PortalPage />} />
      </Routes>
    </div>
  );
}

export default App;
