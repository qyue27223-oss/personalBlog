import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ArticleCard from '@/components/ui/ArticleCard';
import Loading from '@/components/ui/Loading';
import Empty from '@/components/ui/Empty';
import Pagination from '@/components/ui/Pagination';
import { useMockData, usePagination } from '@/hooks';
import { Article } from '@/types';
import styles from './Home.module.scss';

interface CarouselItem {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

const Home: React.FC = () => {
  const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0);

  // 使用公共 Hook 加载数据
  const { data: carouselItems } = useMockData<CarouselItem[]>(
    '/mock/carousel.json',
    'carousel'
  );
  const { data: allArticles, loading } = useMockData<Article[]>(
    '/mock/articles.json',
    'articles'
  );

  // 使用公共分页 Hook
  const { paginatedData: articles, totalPages, setPage, pagination } = usePagination<Article>(
    allArticles || [],
    { pageSize: 6 }
  );

  // 轮播图自动播放
  useEffect(() => {
    if (!carouselItems || carouselItems.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentCarouselIndex((prev) => (prev + 1) % carouselItems.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [carouselItems]);

  // 切换轮播图
  const handleCarouselPrev = () => {
    if (!carouselItems || carouselItems.length === 0) return;
    setCurrentCarouselIndex(
      (prev) => (prev - 1 + carouselItems.length) % carouselItems.length
    );
  };

  const handleCarouselNext = () => {
    if (!carouselItems || carouselItems.length === 0) return;
    setCurrentCarouselIndex((prev) => (prev + 1) % carouselItems.length);
  };

  const handleCarouselDotClick = (index: number) => {
    setCurrentCarouselIndex(index);
  };


  return (
    <div className={styles.homePage}>
        {/* 轮播图 */}
        {carouselItems && carouselItems.length > 0 && (
          <section className={styles.carouselSection}>
            <div className={styles.carousel}>
              <div
                className={styles.carouselTrack}
                style={{
                  transform: `translateX(-${currentCarouselIndex * 100}%)`,
                }}
              >
                {carouselItems.map((item) => (
                  <div key={item.id} className={styles.carouselItem}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className={styles.carouselImage}
                    />
                    <div className={styles.carouselContent}>
                      <h2 className={styles.carouselTitle}>{item.title}</h2>
                      <p className={styles.carouselDescription}>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* 轮播图控制按钮 */}
              {carouselItems.length > 1 && (
                <>
                  <button
                    className={styles.carouselButton}
                    onClick={handleCarouselPrev}
                    aria-label="上一张"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    className={`${styles.carouselButton} ${styles.carouselButtonNext}`}
                    onClick={handleCarouselNext}
                    aria-label="下一张"
                  >
                    <ChevronRight size={24} />
                  </button>

                  {/* 轮播图指示器 */}
                  <div className={styles.carouselDots}>
                    {carouselItems.map((_, index) => (
                      <button
                        key={index}
                        className={`${styles.carouselDot} ${
                          index === currentCarouselIndex ? styles.carouselDotActive : ''
                        }`}
                        onClick={() => handleCarouselDotClick(index)}
                        aria-label={`切换到第 ${index + 1} 张`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </section>
        )}

        {/* 文章列表 */}
        <section className={styles.articlesSection}>
          <h2 className={styles.sectionTitle}>全部文章</h2>

          {loading ? (
            <Loading />
          ) : articles.length > 0 ? (
            <>
              <div className={styles.articlesGrid}>
                {articles.map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>

              {/* 分页组件 */}
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

export default Home;
