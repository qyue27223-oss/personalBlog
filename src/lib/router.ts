import { ROUTES } from '@/constants/routes';

/**
 * 路由工具函数
 * 统一处理路由路径替换逻辑
 */

/**
 * 替换路由路径中的参数
 * @param route - 路由路径模板（如 '/article/:id'）
 * @param params - 参数对象（如 { id: '123' }）
 * @returns 替换后的路径（如 '/article/123'）
 */
export function replaceRouteParams(route: string, params: Record<string, string>): string {
  let result = route;
  Object.entries(params).forEach(([key, value]) => {
    result = result.replace(`:${key}`, value);
  });
  return result;
}

/**
 * 生成文章详情页路径
 */
export function getArticleDetailPath(id: string): string {
  return replaceRouteParams(ROUTES.ARTICLE_DETAIL, { id });
}

/**
 * 生成分类详情页路径
 */
export function getCategoryDetailPath(name: string): string {
  return replaceRouteParams(ROUTES.CATEGORY_DETAIL, { name });
}

/**
 * 生成标签详情页路径
 */
export function getTagDetailPath(name: string): string {
  return replaceRouteParams(ROUTES.TAG_DETAIL, { name });
}
