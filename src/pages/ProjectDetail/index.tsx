import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ProjectParams } from '@/types';
import { useMockData } from '@/hooks';
import { Project } from '@/types';
import { ROUTES } from '@/constants/routes';
import Loading from '@/components/ui/Loading';
import Empty from '@/components/ui/Empty';
import { ExternalLink } from 'lucide-react';
import styles from './ProjectDetail.module.scss';

// 项目详情数据与文章一致：从 public/mock/projects.json 获取列表后按 id 筛选
const ProjectDetail: React.FC = () => {
  const { id } = useParams<ProjectParams>();
  const { data: projects, loading } = useMockData<Project[]>(
    '/mock/projects.json',
    'projects'
  );
  const project = projects?.find((p) => p.id === id);

  if (loading) {
    return (
      <div className={styles.projectDetailPage}>
        <Loading />
      </div>
    );
  }

  if (!project) {
    return (
      <div className={styles.projectDetailPage}>
        <Empty message="未找到该项目" />
        <Link to={ROUTES.PROJECT} className={styles.backLink}>
          ← 返回项目列表
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.projectDetailPage}>
      <article className={styles.project}>
        {project.coverImage && (
          <img
            src={project.coverImage}
            alt={project.title}
            className={styles.coverImage}
          />
        )}
        <header className={styles.header}>
          <h1 className={styles.title}>{project.title}</h1>
          {project.createdAt && (
            <span className={styles.meta}>创建于 {project.createdAt}</span>
          )}
        </header>
        <p className={styles.description}>{project.description}</p>
        {project.techStack && project.techStack.length > 0 && (
          <div className={styles.techSection}>
            <h3 className={styles.techTitle}>技术栈</h3>
            <div className={styles.techStack}>
              {project.techStack.map((tech) => (
                <span key={tech} className={styles.tech}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.externalLink}
          >
            访问项目
            <ExternalLink size={16} />
          </a>
        )}
      </article>
      <Link to={ROUTES.PROJECT} className={styles.backLink}>
        ← 返回项目列表
      </Link>
    </div>
  );
};

export default ProjectDetail;
