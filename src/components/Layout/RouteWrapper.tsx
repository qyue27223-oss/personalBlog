import React from 'react';
import Layout from './index';

interface RouteWrapperProps {
  children: React.ReactNode;
  showSidebar?: boolean;
}

/**
 * 路由包装器组件
 * 为所有路由页面提供统一的布局
 */
const RouteWrapper: React.FC<RouteWrapperProps> = ({ children, showSidebar = true }) => {
  return <Layout showSidebar={showSidebar}>{children}</Layout>;
};

export default RouteWrapper;
