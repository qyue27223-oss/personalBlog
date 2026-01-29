import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArticleParams } from '@/types';
import { useMockData } from '@/hooks';
import { Article } from '@/types';
import { formatDate } from '@/lib';
import { ROUTES } from '@/constants/routes';
import Loading from '@/components/ui/Loading';
import Empty from '@/components/ui/Empty';
import styles from './ArticleDetail.module.scss';

const ArticleDetail: React.FC = () => {
  const { id } = useParams<ArticleParams>();
  const { data: articles, loading } = useMockData<Article[]>(
    '/mock/articles.json',
    'articles'
  );
  const article = articles?.find((a) => a.id === id);

  if (loading) {
    return (
      <div className={styles.articleDetailPage}>
        <Loading />
      </div>
    );
  }

  if (!article) {
    return (
      <div className={styles.articleDetailPage}>
        <Empty message="未找到该文章" />
        <Link to={ROUTES.ARTICLES} className={styles.backLink}>
          ← 返回文章列表
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.articleDetailPage}>
      <article className={styles.article}>
        {article.coverImage && (
          <img
            src={article.coverImage}
            alt={article.title}
            className={styles.coverImage}
          />
        )}
        <header className={styles.header}>
          <h1 className={styles.title}>{article.title}</h1>
          <div className={styles.meta}>
            {article.author && (
              <span className={styles.metaItem}>作者：{article.author}</span>
            )}
            <span className={styles.metaItem}>
              发布时间：{formatDate(article.publishDate)}
            </span>
            {article.views !== undefined && (
              <span className={styles.metaItem}>阅读 {article.views}</span>
            )}
            {article.likes !== undefined && (
              <span className={styles.metaItem}>点赞 {article.likes}</span>
            )}
          </div>
          <div className={styles.tagsRow}>
            <span className={styles.category}>{article.category}</span>
            {article.tags?.map((tag) => (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        </header>
        {article.excerpt && (
          <p className={styles.excerpt}>{article.excerpt}</p>
        )}
        <div className={styles.content}>{article.content}</div>
      </article>
      <Link to={ROUTES.ARTICLES} className={styles.backLink}>
        ← 返回文章列表
      </Link>
    </div>
  );
};

export default ArticleDetail;
