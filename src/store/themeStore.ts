import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const THEME_STORAGE_KEY = 'person-blog-theme';
const DARK_MODE_CLASS = 'dark-mode';

/** 从系统 prefers-color-scheme 获取初始主题（仅用于 store 默认值，持久化由 persist 负责） */
function getSystemPrefersDark(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

/** 将主题同步到 document.documentElement，供全局 .dark-mode 样式生效（供 App 初始化与订阅使用） */
export function syncThemeToDOM(isDark: boolean): void {
  if (typeof document === 'undefined') return;
  if (isDark) {
    document.documentElement.classList.add(DARK_MODE_CLASS);
  } else {
    document.documentElement.classList.remove(DARK_MODE_CLASS);
  }
}

interface ThemeState {
  isDark: boolean;
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      isDark: getSystemPrefersDark(),

      toggleTheme: () => {
        set((state) => ({ isDark: !state.isDark }));
      },
    }),
    {
      name: THEME_STORAGE_KEY,
      partialize: (s) => ({ isDark: s.isDark }),
    }
  )
);
