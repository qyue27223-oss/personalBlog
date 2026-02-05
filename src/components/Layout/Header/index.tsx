import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Settings, Sun, Moon, Monitor } from 'lucide-react';
import { NAV_ITEMS } from '@/constants/navigation';
import { useThemeStore, type ThemeMode } from '@/store';
import { useMediaQuery } from '@/hooks';
import styles from './Header.module.scss';

// 与 _mixins.scss 中 respond-below('sm') 一致：768 - 1 = 767px
const MOBILE_MEDIA_QUERY = '(max-width: 767px)';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const settingsRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const isMobile = useMediaQuery(MOBILE_MEDIA_QUERY);
  const themeMode = useThemeStore((s) => s.themeMode);
  const setThemeMode = useThemeStore((s) => s.setThemeMode);

  const themeOptions: { mode: ThemeMode; label: string; Icon: typeof Sun }[] = [
    { mode: 'light', label: '浅色', Icon: Sun },
    { mode: 'dark', label: '深色', Icon: Moon },
    { mode: 'system', label: '跟随系统', Icon: Monitor },
  ];

  // 从移动端切换到桌面端时关闭移动菜单，避免无关闭按钮
  useEffect(() => {
    if (!isMobile) setIsMobileMenuOpen(false);
  }, [isMobile]);

  // 点击外部关闭设置下拉框
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (settingsRef.current && !settingsRef.current.contains(e.target as Node)) {
        setIsSettingsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // 判断当前路径是否激活
  const isActive = (path: string) => {
    if (path === NAV_ITEMS[0].path) {
      return location.pathname === NAV_ITEMS[0].path;
    }
    return location.pathname.startsWith(path);
  };

  // 切换移动端菜单
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // 关闭移动端菜单
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`${styles.header} ${className || ''}`}>
      <div className={styles.container}>
        {/* Logo */}
        <Link to={NAV_ITEMS[0].path} className={styles.logo} onClick={closeMobileMenu}>
          <div className={styles.iconContainer}>
            <i className={`iconfont icon-fengye ${styles.iconFengye}`} />
          </div>
          <span className={styles.logoText}>枫叶博客</span>
        </Link>

        {/* 桌面端导航 */}
        <nav className={styles.nav}>
          {NAV_ITEMS.map((item) =>
            item.type === 'dropdown' ? (
              <div key="settings" className={styles.settingsWrap} ref={settingsRef}>
                <button
                  type="button"
                  className={styles.navItem}
                  onClick={() => setIsSettingsOpen((v) => !v)}
                  aria-expanded={isSettingsOpen}
                  aria-haspopup="true"
                  aria-label="设置"
                >
                  <Settings size={18} aria-hidden />
                  {item.label}
                </button>
                {isSettingsOpen && (
                  <div className={styles.dropdown} role="menu">
                    {themeOptions.map(({ mode, label, Icon }) => (
                      <button
                        key={mode}
                        type="button"
                        className={`${styles.dropdownItem} ${themeMode === mode ? styles.dropdownItemActive : ''}`}
                        onClick={() => {
                          setThemeMode(mode);
                          setIsSettingsOpen(false);
                        }}
                        role="menuitem"
                      >
                        <Icon size={16} aria-hidden />
                        {label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.path}
                to={item.path}
                className={`${styles.navItem} ${isActive(item.path) ? styles.navItemActive : ''}`}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* 移动端菜单按钮：仅移动端视口时渲染 */}
        {isMobile && (
          <button
            className={styles.mobileMenuButton}
            onClick={toggleMobileMenu}
            aria-label="切换菜单"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        )}
      </div>

      {/* 移动端导航菜单 */}
      {isMobileMenuOpen && (
        <nav className={styles.mobileNav}>
          {NAV_ITEMS.map((item) =>
            item.type === 'dropdown' ? (
              <React.Fragment key="settings">
                {themeOptions.map(({ mode, label, Icon }) => (
                  <button
                    key={mode}
                    type="button"
                    className={`${styles.mobileNavItem} ${themeMode === mode ? styles.mobileNavItemActive : ''}`}
                    onClick={() => {
                      setThemeMode(mode);
                      closeMobileMenu();
                    }}
                  >
                    <Icon size={18} aria-hidden className={styles.mobileNavItemIcon} />
                    {label}
                  </button>
                ))}
              </React.Fragment>
            ) : (
              <Link
                key={item.path}
                to={item.path}
                className={`${styles.mobileNavItem} ${isActive(item.path) ? styles.mobileNavItemActive : ''}`}
                onClick={closeMobileMenu}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>
      )}
    </header>
  );
};

export default Header;
