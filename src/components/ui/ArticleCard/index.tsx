import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Eye, Heart, Tag as TagIcon } from 'lucide-react';
import { Article } from '@/types';
import { formatDate } from '@/lib';
import { getArticleDetailPath } from '@/lib/router';
import styles from './ArticleCard.module.scss';

interface ArticleCardProps {
  article: Article;
  className?: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, className }) => {

  return (
    <article className={`${styles.card} ${className || ''}`}>
      {/* 封面图片 */}
      {article.coverImage && (
        <Link
          to={getArticleDetailPath(article.id)}
          className={styles.coverLink}
        >
          <img src={article.coverImage} alt={article.title} className={styles.coverImage} />
        </Link>
      )}

      {/* 内容区域 */}
      <div className={styles.content}>
        {/* 分类和标签 */}
        <div className={styles.meta}>
          <span className={styles.category}>{article.category}</span>
          {article.tags && article.tags.length > 0 && (
            <div className={styles.tags}>
              {article.tags.slice(0, 3).map((tag) => (
                <span key={tag} className={styles.tag}>
                  <TagIcon size={12} />
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* 标题 */}
        <h2 className={styles.title}>
          <Link to={getArticleDetailPath(article.id)} className={styles.titleLink}>
            {article.title}
          </Link>
        </h2>

        {/* 摘要 */}
        {article.excerpt && (
          <p className={styles.excerpt}>{article.excerpt}</p>
        )}

        {/* 底部信息 */}
        <div className={styles.footer}>
          <div className={styles.info}>
            {/* 发布日期 */}
            <span className={styles.infoItem}>
              <Calendar size={14} />
              {formatDate(article.publishDate)}
            </span>

            {/* 浏览量 */}
            {article.views !== undefined && (
              <span className={styles.infoItem}>
                <Eye size={14} />
                {article.views}
              </span>
            )}

            {/* 点赞数 */}
            {article.likes !== undefined && (
              <span className={styles.infoItem}>
                <Heart size={14} />
                {article.likes}
              </span>
            )}
          </div>

          {/* 阅读更多 */}
          <Link
            to={getArticleDetailPath(article.id)}
            className={styles.readMore}
          >
            阅读更多 →
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;
