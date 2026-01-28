import { createBrowserRouter } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';
import Home from '@/pages/Home';
import Articles from '@/pages/Articles';
import ArticleDetail from '@/pages/ArticleDetail';
import Categories from '@/pages/Categories';
import CategoryDetail from '@/pages/CategoryDetail';
import Tags from '@/pages/Tags';
import TagDetail from '@/pages/TagDetail';
import About from '@/pages/About';
import Search from '@/pages/Search';
import NotFound from '@/pages/NotFound';

// 路由配置
export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <Home />,
  },
  {
    path: ROUTES.ARTICLES,
    element: <Articles />,
  },
  {
    path: ROUTES.ARTICLE_DETAIL,
    element: <ArticleDetail />,
  },
  {
    path: ROUTES.CATEGORIES,
    element: <Categories />,
  },
  {
    path: ROUTES.CATEGORY_DETAIL,
    element: <CategoryDetail />,
  },
  {
    path: ROUTES.TAGS,
    element: <Tags />,
  },
  {
    path: ROUTES.TAG_DETAIL,
    element: <TagDetail />,
  },
  {
    path: ROUTES.ABOUT,
    element: <About />,
  },
  {
    path: ROUTES.SEARCH,
    element: <Search />,
  },
  {
    path: ROUTES.NOT_FOUND,
    element: <NotFound />,
  },
]);
