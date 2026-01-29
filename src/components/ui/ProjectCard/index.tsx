import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { Project } from '@/types';
import { getProjectDetailPath } from '@/lib/router';
import styles from './ProjectCard.module.scss';

interface ProjectCardProps {
  project: Project;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, className }) => {
  return (
    <article className={`${styles.card} ${className || ''}`}>
      {project.coverImage && (
        <Link
          to={getProjectDetailPath(project.id)}
          className={styles.coverLink}
        >
          <img
            src={project.coverImage}
            alt={project.title}
            className={styles.coverImage}
          />
        </Link>
      )}
      <div className={styles.content}>
        <h2 className={styles.title}>
          <Link to={getProjectDetailPath(project.id)} className={styles.titleLink}>
            {project.title}
          </Link>
        </h2>
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
        <Link
          to={getProjectDetailPath(project.id)}
          className={styles.readMore}
        >
          查看详情
          <ExternalLink size={14} />
        </Link>
      </div>
    </article>
  );
};

export default ProjectCard;
