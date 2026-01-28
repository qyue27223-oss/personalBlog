import React from 'react';
import styles from './Tags.module.scss';

const Tags: React.FC = () => {
  return (
    <div className={styles.tagsPage}>
      <h1 className={styles.title}>标签云</h1>
      <p className={styles.description}>这里将展示所有标签</p>
    </div>
  );
};

export default Tags;
