import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Calendar, Eye, Heart, ArrowRight } from 'lucide-react';
import { Project } from '@/types';
import { getProjectDetailPath } from '@/lib/router';
import { formatDate } from '@/lib/date';
import styles from './ProjectCard.module.scss';

interface ProjectCardProps {
  project: Project;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, className }) => {
  const linkUrl = project.link || '#';
  const dateStr = project.createdAt;
  const views = project.views ?? 0;
  const likes = project.likes ?? 0;

  return (
    <article className={`${styles.card} ${className || ''}`}>
      <div className={styles.content}>
        <div className={styles.titleRow}>
          <h2 className={styles.title}>
            <Link to={getProjectDetailPath(project.id)} className={styles.titleLink}>
              {project.title}
            </Link>
          </h2>
          <div className={styles.actions}>
            {linkUrl !== '#' && (
              <a
                href={linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.iconLink}
                aria-label="GitHub 仓库"
              >
                <Github size={20} />
              </a>
            )}
          </div>
        </div>
        <p className={styles.description}>
          {project.excerpt || project.description}
        </p>
        {project.techStack && project.techStack.length > 0 && (
          <div className={styles.techStack}>
            {project.techStack.map((tech) => (
              <span key={tech} className={styles.tech}>
                {tech}
              </span>
            ))}
          </div>
        )}
        {/* 底部元信息：日期、浏览量、点赞 + 查看详情 */}
        <div className={styles.footerRow}>
          <div className={styles.meta}>
            {dateStr && (
              <span className={styles.metaItem}>
                <Calendar size={16} aria-hidden />
                {formatDate(dateStr)}
              </span>
            )}
            <span className={styles.metaItem}>
              <Eye size={16} aria-hidden />
              {views}
            </span>
            <span className={styles.metaItem}>
              <Heart size={16} aria-hidden />
              {likes}
            </span>
          </div>
          <Link
            to={getProjectDetailPath(project.id)}
            className={styles.readMore}
          >
            查看详情
            <ArrowRight size={16} aria-hidden />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
