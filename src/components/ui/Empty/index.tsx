import React from 'react';
import styles from './Empty.module.scss';

interface EmptyProps {
  message?: string;
  description?: string;
  className?: string;
}

/**
 * 空状态组件
 * 统一的无数据状态 UI，避免重复代码
 */
const Empty: React.FC<EmptyProps> = ({
  message = '暂无数据',
  description,
  className,
}) => {
  return (
    <div className={`${styles.empty} ${className || ''}`}>
      <p className={styles.message}>{message}</p>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
};

export default Empty;
