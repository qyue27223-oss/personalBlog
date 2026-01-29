import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './Pagination.module.scss';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

/**
 * 分页组件
 * 统一的分页 UI，避免重复代码
 */
const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  className,
}) => {
  if (totalPages <= 1) return null;

  const handlePrev = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className={`${styles.pagination} ${className || ''}`}>
      <button
        className={styles.paginationButton}
        onClick={handlePrev}
        disabled={currentPage === 1}
        aria-label="上一页"
      >
        <ChevronLeft size={18} />
        上一页
      </button>

      <div className={styles.paginationPages}>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            className={`${styles.paginationPage} ${
              page === currentPage ? styles.paginationPageActive : ''
            }`}
            onClick={() => onPageChange(page)}
            aria-label={`第 ${page} 页`}
            aria-current={page === currentPage ? 'page' : undefined}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        className={styles.paginationButton}
        onClick={handleNext}
        disabled={currentPage === totalPages}
        aria-label="下一页"
      >
        下一页
        <ChevronRight size={18} />
      </button>
    </div>
  );
};

export default Pagination;
