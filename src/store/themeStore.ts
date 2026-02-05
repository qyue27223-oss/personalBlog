import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const THEME_STORAGE_KEY = 'person-blog-theme';
const DARK_MODE_CLASS = 'dark-mode';

/** 主题模式：浅色、深色、跟随系统 */
export type ThemeMode = 'light' | 'dark' | 'system';

/** 将主题同步到 document.documentElement，供全局 .dark-mode 样式生效（供 App 初始化与订阅使用） */
export function syncThemeToDOM(isDark: boolean): void {
  if (typeof document === 'undefined') return;
  const root = document.documentElement;
  if (isDark) {
    root.classList.add(DARK_MODE_CLASS);
  } else {
    root.classList.remove(DARK_MODE_CLASS);
  }
}

/** 根据 themeMode 计算当前是否应为深色（用于 setThemeMode 内即时同步 DOM） */
function getEffectiveIsDark(mode: ThemeMode): boolean {
  if (mode === 'light') return false;
  if (mode === 'dark') return true;
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

interface ThemeState {
  /** 用户选择的主题模式 */
  themeMode: ThemeMode;
  /** 设置主题模式 */
  setThemeMode: (mode: ThemeMode) => void;
}

type PersistedTheme = { themeMode?: ThemeMode; isDark?: boolean };

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      themeMode: 'system',

      setThemeMode: (mode: ThemeMode) => {
        set({ themeMode: mode });
        // 用户点击后立即同步到 DOM，避免依赖 React 重渲染时机导致样式未更新
        syncThemeToDOM(getEffectiveIsDark(mode));
      },
    }),
    {
      name: THEME_STORAGE_KEY,
      partialize: (s) => ({ themeMode: s.themeMode }),
      migrate: (state: unknown): Partial<ThemeState> => {
        const raw = state as PersistedTheme | undefined;
        if (!raw) return { themeMode: 'system' };
        if ('themeMode' in raw && typeof raw.themeMode === 'string') {
          return { themeMode: raw.themeMode as ThemeMode };
        }
        if ('isDark' in raw && typeof raw.isDark === 'boolean') {
          return { themeMode: raw.isDark ? 'dark' : 'light' };
        }
        return { themeMode: 'system' };
      },
      version: 1,
    }
  )
);
