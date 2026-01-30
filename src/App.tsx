import React, { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from '@/utils/router';
import { useThemeStore, syncThemeToDOM } from '@/store';
import '@/styles/index.scss';
import styles from './App.module.scss';

const App: React.FC = () => {
  const isDark = useThemeStore((s) => s.isDark);

  // 主题变化时同步到 document.documentElement，供全局 .dark-mode 样式生效
  useEffect(() => {
    syncThemeToDOM(isDark);
  }, [isDark]);

  return (
    <div className={styles.app}>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
