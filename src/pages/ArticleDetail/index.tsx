import React from 'react';
import { useParams } from 'react-router-dom';
import { ArticleParams } from '@/types';
import styles from './ArticleDetail.module.scss';

const ArticleDetail: React.FC = () => {
  const { id } = useParams<ArticleParams>();

  return (
    <div className={styles.articleDetailPage}>
      <h1 className={styles.title}>文章详情</h1>
      <p className={styles.articleId}>文章ID: {id}</p>
    </div>
  );
};

export default ArticleDetail;
