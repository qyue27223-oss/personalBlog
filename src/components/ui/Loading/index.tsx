import React from 'react';
import styles from './Loading.module.scss';

interface LoadingProps {
  message?: string;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

/**
 * 加载状态组件
 * 统一的加载状态 UI，避免重复代码
 */
const Loading: React.FC<LoadingProps> = ({
  message = '加载中...',
  size = 'medium',
  className,
}) => {
  return (
    <div className={`${styles.loading} ${styles[`loading${size.charAt(0).toUpperCase() + size.slice(1)}`]} ${className || ''}`}>
      <div className={styles.spinner}></div>
      {message && <p className={styles.message}>{message}</p>}
    </div>
  );
};

export default Loading;
