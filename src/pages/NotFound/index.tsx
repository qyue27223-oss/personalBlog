import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.scss';

const NotFound: React.FC = () => {
  return (
    <div className={styles.notFoundPage}>
      <h1 className={styles.errorCode}>404</h1>
      <p className={styles.errorMessage}>抱歉，您访问的页面不存在</p>
      <Link to="/" className={styles.homeLink}>
        返回首页
      </Link>
    </div>
  );
};

export default NotFound;
