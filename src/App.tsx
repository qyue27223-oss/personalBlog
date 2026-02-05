import React, { useEffect, useMemo } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from '@/utils/router';
import { useThemeStore, syncThemeToDOM } from '@/store';
import { useMediaQuery } from '@/hooks';
import '@/styles/index.scss';
import styles from './App.module.scss';

/** 系统是否偏好深色（用于「跟随系统」模式） */
const SYSTEM_DARK_QUERY = '(prefers-color-scheme: dark)';

const App: React.FC = () => {
  const themeMode = useThemeStore((s) => s.themeMode);
  const systemPrefersDark = useMediaQuery(SYSTEM_DARK_QUERY);

  // 根据 themeMode 与系统偏好计算当前是否应为深色，并同步到 DOM
  const effectiveIsDark = useMemo(() => {
    if (themeMode === 'light') return false;
    if (themeMode === 'dark') return true;
    return systemPrefersDark;
  }, [themeMode, systemPrefersDark]);

  useEffect(() => {
    syncThemeToDOM(effectiveIsDark);
  }, [effectiveIsDark]);

  return (
    <div className={styles.app}>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
