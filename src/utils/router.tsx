import { createBrowserRouter } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';
import RouteWrapper from '@/components/Layout/RouteWrapper';
import Home from '@/pages/Home';
import Articles from '@/pages/Articles';
import ArticleDetail from '@/pages/ArticleDetail';
import Projects from '@/pages/Projects';
import ProjectDetail from '@/pages/ProjectDetail';
import About from '@/pages/About';
import Search from '@/pages/Search';
import NotFound from '@/pages/NotFound';

// 路由配置
export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: (
      <RouteWrapper>
        <Home />
      </RouteWrapper>
    ),
  },
  {
    path: ROUTES.ARTICLES,
    element: (
      <RouteWrapper>
        <Articles />
      </RouteWrapper>
    ),
  },
  {
    path: ROUTES.ARTICLE_DETAIL,
    element: (
      <RouteWrapper>
        <ArticleDetail />
      </RouteWrapper>
    ),
  },
  {
    path: ROUTES.PROJECT,
    element: (
      <RouteWrapper>
        <Projects />
      </RouteWrapper>
    ),
  },
  {
    path: ROUTES.PROJECT_DETAIL,
    element: (
      <RouteWrapper>
        <ProjectDetail />
      </RouteWrapper>
    ),
  },
  {
    path: ROUTES.ABOUT,
    element: (
      <RouteWrapper>
        <About />
      </RouteWrapper>
    ),
  },
  {
    path: ROUTES.SEARCH,
    element: (
      <RouteWrapper>
        <Search />
      </RouteWrapper>
    ),
  },
  {
    path: ROUTES.NOT_FOUND,
    element: (
      <RouteWrapper showSidebar={false}>
        <NotFound />
      </RouteWrapper>
    ),
  },
]);
