import { ROUTES } from './routes';

/**
 * 导航菜单配置
 * 统一管理导航菜单项，避免在多个组件中重复定义
 * type 为 'dropdown' 时表示该项为下拉触发，不跳转路由
 */
export interface NavItem {
  path: string;
  label: string;
  /** 设为 'dropdown' 时渲染为下拉触发按钮，点击展开下拉框 */
  type?: 'link' | 'dropdown';
}

export const NAV_ITEMS: NavItem[] = [
  { path: ROUTES.HOME, label: '首页', type: 'link' },
  { path: ROUTES.PROJECT, label: '项目', type: 'link' },
  { path: ROUTES.ARTICLES, label: '文章', type: 'link' },
  { path: ROUTES.ABOUT, label: '关于', type: 'link' },
  { path: '#', label: '设置', type: 'dropdown' },
];
