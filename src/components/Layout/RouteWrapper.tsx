import React from 'react';
import { useLocation } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';
import Layout from './index';

interface RouteWrapperProps {
  children: React.ReactNode;
  /** 设为 false 时强制隐藏侧栏（如 404）；未传时仅「文章」「项目」页显示侧栏 */
  showSidebar?: boolean;
}

/**
 * 路由包装器组件
 * 为所有路由页面提供统一的布局；侧栏仅在「文章」「项目」页显示
 */
const RouteWrapper: React.FC<RouteWrapperProps> = ({ children, showSidebar: showSidebarProp }) => {
  const location = useLocation();
  const showSidebarByRoute =
    location.pathname === ROUTES.ARTICLES || location.pathname === ROUTES.PROJECT;
  const showSidebar = showSidebarProp === false ? false : showSidebarByRoute;

  return <Layout showSidebar={showSidebar}>{children}</Layout>;
};

export default RouteWrapper;
