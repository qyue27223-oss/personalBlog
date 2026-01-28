// 路由常量配置
export const ROUTES = {
  HOME: '/',
  ARTICLES: '/articles',
  ARTICLE_DETAIL: '/article/:id',
  CATEGORIES: '/categories',
  CATEGORY_DETAIL: '/category/:name',
  TAGS: '/tags',
  TAG_DETAIL: '/tag/:name',
  ABOUT: '/about',
  SEARCH: '/search',
  NOT_FOUND: '*'
} as const;
