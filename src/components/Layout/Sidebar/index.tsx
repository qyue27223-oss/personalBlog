import React from 'react';
import { Category, Tag } from '@/types';
import { useMockData } from '@/hooks';
import Loading from '@/components/ui/Loading';
import Empty from '@/components/ui/Empty';
import styles from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
  /** 选中分类时触发，用于对主内容做筛选（占位） */
  onCategorySelect?: (category: Category) => void;
  /** 选中标签时触发，用于对主内容做筛选（占位） */
  onTagSelect?: (tag: Tag) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ className, onCategorySelect, onTagSelect }) => {
  const { data: categories, loading: categoriesLoading } = useMockData<Category[]>(
    '/mock/categories.json',
    'categories'
  );
  const { data: tags, loading: tagsLoading } = useMockData<Tag[]>(
    '/mock/tags.json',
    'tags'
  );
  const loading = categoriesLoading || tagsLoading;

  // 占位：点击分类/标签时触发筛选回调，不跳转路由
  const handleCategoryClick = (category: Category) => {
    onCategorySelect?.(category);
    // TODO: 后续接入主内容区数据筛选逻辑
  };

  const handleTagClick = (tag: Tag) => {
    onTagSelect?.(tag);
    // TODO: 后续接入主内容区数据筛选逻辑
  };

  return (
    <aside className={`${styles.sidebar} ${className || ''}`}>
      {/* 分类列表：点击为筛选主内容，不跳转 */}
      <div className={styles.widget}>
        <div className={styles.widgetTitleRow}>
          <div className={styles.iconContainer}>
            <i className={`iconfont icon-fenlei ${styles.widgetIcon}`} aria-hidden />
          </div>
          <h3 className={styles.widgetTitle}>分类</h3>
        </div>
        {loading ? (
          <Loading size="small" />
        ) : categories && categories.length > 0 ? (
          <ul className={styles.categoryList}>
            {categories.map((category) => (
              <li key={category.slug} className={styles.categoryItem}>
                <button
                  type="button"
                  className={styles.categoryLink}
                  onClick={() => handleCategoryClick(category)}
                >
                  <span className={styles.categoryName}>{category.name}</span>
                  {category.articleCount !== undefined && (
                    <span className={styles.categoryCount}>({category.articleCount})</span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <Empty message="暂无分类" />
        )}
      </div>

      {/* 标签云：点击为筛选主内容，不跳转 */}
      <div className={styles.widget}>
        <div className={styles.widgetTitleRow}>
          <div className={styles.iconContainer}>
            <i className={`iconfont icon-biaoqian ${styles.widgetIcon}`} aria-hidden />
          </div>
          <h3 className={styles.widgetTitle}>标签云</h3>
        </div>
        {loading ? (
          <Loading size="small" />
        ) : tags && tags.length > 0 ? (
          <div className={styles.tagCloud}>
            {tags.map((tag) => (
              <button
                key={tag.slug}
                type="button"
                className={styles.tag}
                onClick={() => handleTagClick(tag)}
              >
                {tag.name}
              </button>
            ))}
          </div>
        ) : (
          <Empty message="暂无标签" />
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
