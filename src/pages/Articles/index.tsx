import React from 'react';
import styles from './Articles.module.scss';

const Articles: React.FC = () => {
  return (
    <div className={styles.articlesPage}>
      <h1 className={styles.title}>文章列表</h1>
      <p className={styles.description}>这里将展示所有文章</p>
    </div>
  );
};

export default Articles;
