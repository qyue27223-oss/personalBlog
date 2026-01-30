import React from 'react';
import ProjectCard from '@/components/ui/ProjectCard';
import Loading from '@/components/ui/Loading';
import Empty from '@/components/ui/Empty';
import Pagination from '@/components/ui/Pagination';
import { useMockData, usePagination } from '@/hooks';
import type { Project } from '@/types';
import styles from './Projects.module.scss';

// 项目数据与文章一致：从 public/mock/projects.json 通过 useMockData 获取
const Projects: React.FC = () => {
  const { data: allProjects, loading } = useMockData<Project[]>(
    '/mock/projects.json',
    'projects'
  );
  const { paginatedData: projects, totalPages, setPage, pagination } = usePagination<Project>(
    allProjects || [],
    { pageSize: 9 }
  );

  return (
    <div className={styles.projectsPage}>
      <section className={styles.projectsSection}>
        <div className={styles.sectionTitleRow}>
          <div className={styles.iconContainer}>
            <i className={`iconfont icon-xiangmu ${styles.iconSection}`} aria-hidden />
          </div>
          <h1 className={styles.sectionTitle}>项目列表</h1>
        </div>

        {loading ? (
          <Loading />
        ) : projects.length > 0 ? (
          <>
            <div className={styles.projectsGrid}>
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
            <Pagination
              currentPage={pagination.page}
              totalPages={totalPages}
              onPageChange={setPage}
            />
          </>
        ) : (
          <Empty message="暂无项目" />
        )}
      </section>
    </div>
  );
};

export default Projects;
