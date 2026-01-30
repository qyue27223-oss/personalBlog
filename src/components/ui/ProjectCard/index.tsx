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

// 无封面图时使用的渐变背景（按 id 取模实现多色）
const FALLBACK_GRADIENTS = [
  'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
  'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
  'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
];

const ProjectCard: React.FC<ProjectCardProps> = ({ project, className }) => {
  const linkUrl = project.link || '#';
  const dateStr = project.createdAt;
  const views = project.views ?? 0;
  const likes = project.likes ?? 0;
  const bannerStyle = project.coverImage
    ? { backgroundImage: `url(${project.coverImage})` }
    : { background: FALLBACK_GRADIENTS[Number(project.id) % FALLBACK_GRADIENTS.length] };

  return (
    <article className={`${styles.card} ${className || ''}`}>
      <div className={styles.banner} style={bannerStyle}>
        <div className={styles.bannerOverlay} aria-hidden />
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
      </div>
      <div className={styles.content}>
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
