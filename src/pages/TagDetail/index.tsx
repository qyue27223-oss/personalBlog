import React from 'react';
import { useParams } from 'react-router-dom';
import { TagParams } from '@/types';
import styles from './TagDetail.module.scss';

const TagDetail: React.FC = () => {
  const { name } = useParams<TagParams>();

  return (
    <div className={styles.tagDetailPage}>
      <h1 className={styles.title}>标签详情</h1>
      <p className={styles.tagName}>标签名称: {name}</p>
    </div>
  );
};

export default TagDetail;
