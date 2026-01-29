import React from 'react';
import { Link } from 'react-router-dom';
import { Category, Tag, Article } from '@/types';
import { useMockData } from '@/hooks';
import { formatDateShort, getArticleDetailPath, getCategoryDetailPath, getTagDetailPath } from '@/lib';
import Loading from '@/components/ui/Loading';
import Empty from '@/components/ui/Empty';
import styles from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  // 使用公共 Hook 加载数据
  const { data: categories, loading: categoriesLoading } = useMockData<Category[]>(
    '/mock/categories.json',
    'categories'
  );
  const { data: tags, loading: tagsLoading } = useMockData<Tag[]>(
    '/mock/tags.json',
    'tags'
  );
  const { data: allArticles } = useMockData<Article[]>(
    '/mock/articles.json',
    'articles'
  );

  // 取最新的 5 篇文章
  const latestArticles = allArticles ? allArticles.slice(0, 5) : [];
  const loading = categoriesLoading || tagsLoading;

  return (
    <aside className={`${styles.sidebar} ${className || ''}`}>
      {/* 分类列表 */}
      <div className={styles.widget}>
        <h3 className={styles.widgetTitle}>分类</h3>
        {loading ? (
          <Loading size="small" />
        ) : categories && categories.length > 0 ? (
          <ul className={styles.categoryList}>
            {categories.map((category) => (
              <li key={category.slug} className={styles.categoryItem}>
                <Link
                  to={getCategoryDetailPath(category.slug)}
                  className={styles.categoryLink}
                >
                  <span className={styles.categoryName}>{category.name}</span>
                  {category.articleCount !== undefined && (
                    <span className={styles.categoryCount}>({category.articleCount})</span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <Empty message="暂无分类" />
        )}
      </div>

      {/* 标签云 */}
      <div className={styles.widget}>
        <h3 className={styles.widgetTitle}>标签云</h3>
        {loading ? (
          <Loading size="small" />
        ) : tags && tags.length > 0 ? (
          <div className={styles.tagCloud}>
            {tags.map((tag) => (
              <Link
                key={tag.slug}
                to={getTagDetailPath(tag.slug)}
                className={styles.tag}
              >
                {tag.name}
              </Link>
            ))}
          </div>
        ) : (
          <Empty message="暂无标签" />
        )}
      </div>

      {/* 最新文章 */}
      <div className={styles.widget}>
        <h3 className={styles.widgetTitle}>最新文章</h3>
        {loading ? (
          <Loading size="small" />
        ) : latestArticles.length > 0 ? (
          <ul className={styles.articleList}>
            {latestArticles.map((article) => (
              <li key={article.id} className={styles.articleItem}>
                <Link
                  to={getArticleDetailPath(article.id)}
                  className={styles.articleLink}
                >
                  <span className={styles.articleTitle}>{article.title}</span>
                  <span className={styles.articleDate}>
                    {formatDateShort(article.publishDate)}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <Empty message="暂无文章" />
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
