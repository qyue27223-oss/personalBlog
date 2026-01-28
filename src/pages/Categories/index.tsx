import React from 'react';
import styles from './Categories.module.scss';

const Categories: React.FC = () => {
  return (
    <div className={styles.categoriesPage}>
      <h1 className={styles.title}>分类列表</h1>
      <p className={styles.description}>这里将展示所有分类</p>
    </div>
  );
};

export default Categories;
