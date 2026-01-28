import React from 'react';
import { useParams } from 'react-router-dom';
import { CategoryParams } from '@/types';
import styles from './CategoryDetail.module.scss';

const CategoryDetail: React.FC = () => {
  const { name } = useParams<CategoryParams>();

  return (
    <div className={styles.categoryDetailPage}>
      <h1 className={styles.title}>分类详情</h1>
      <p className={styles.categoryName}>分类名称: {name}</p>
    </div>
  );
};

export default CategoryDetail;
