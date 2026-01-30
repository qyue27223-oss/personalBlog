import React from 'react';
import ArticleCard from '@/components/ui/ArticleCard';
import Loading from '@/components/ui/Loading';
import Empty from '@/components/ui/Empty';
import Pagination from '@/components/ui/Pagination';
import { useMockData, usePagination } from '@/hooks';
import { Article } from '@/types';
import styles from './Articles.module.scss';

const Articles: React.FC = () => {
  const { data: allArticles, loading } = useMockData<Article[]>(
    '/mock/articles.json',
    'articles'
  );
  const { paginatedData: articles, totalPages, setPage, pagination } = usePagination<Article>(
    allArticles || [],
    { pageSize: 9 }
  );

  return (
    <div className={styles.articlesPage}>
      <section className={styles.articlesSection}>
        <div className={styles.sectionTitleRow}>
          <div className={styles.iconContainer}>
            <i className={`iconfont icon-wenzhang ${styles.iconSection}`} aria-hidden />
          </div>
          <h1 className={styles.sectionTitle}>文章列表</h1>
        </div>

        {loading ? (
          <Loading />
        ) : articles.length > 0 ? (
          <>
            <div className={styles.articlesGrid}>
              {articles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
            <Pagination
              currentPage={pagination.page}
              totalPages={totalPages}
              onPageChange={setPage}
            />
          </>
        ) : (
          <Empty message="暂无文章" />
        )}
      </section>
    </div>
  );
};

export default Articles;
