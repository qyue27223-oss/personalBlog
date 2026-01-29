import { ROUTES } from './routes';

/**
 * 导航菜单配置
 * 统一管理导航菜单项，避免在多个组件中重复定义
 */
export interface NavItem {
  path: string;
  label: string;
}

export const NAV_ITEMS: NavItem[] = [
  { path: ROUTES.HOME, label: '首页' },
  { path: ROUTES.ARTICLES, label: '文章' },
  { path: ROUTES.PROJECT, label: '项目' },
  { path: ROUTES.ABOUT, label: '关于' },
];
