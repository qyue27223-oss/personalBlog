import React from 'react';
import { ExternalLink } from 'lucide-react';
import { useMockData } from '@/hooks/useMockData';
import Empty from '@/components/ui/Empty';
import Loading from '@/components/ui/Loading';
import type { AboutData, ExperienceData } from '@/types';
import styles from './About.module.scss';

const ABOUT_MOCK_URL = '/mock/about.json';
const EXPERIENCE_MOCK_URL = '/mock/experience.json';

const About: React.FC = () => {
  const { data: aboutData, loading: aboutLoading, error: aboutError } = useMockData<AboutData>(ABOUT_MOCK_URL);
  const { data: experienceData, loading: experienceLoading, error: experienceError } = useMockData<ExperienceData>(EXPERIENCE_MOCK_URL);

  if (aboutLoading && !aboutData) {
    return <Loading />;
  }

  if (aboutError || !aboutData) {
    return <Empty message={aboutError?.message ?? '加载关于页数据失败'} />;
  }

  const { personalInfo, detailedDescription } = aboutData;

  return (
    <div className={styles.aboutPage}>
      {/* 第一部分：个人信息 + 详细描述 */}
      <section id="about-me" className={styles.sectionIntro}>
        <div className={styles.introGrid}>
          <div className={styles.introLeft}>
            <h1 className={styles.name}>{personalInfo.name}</h1>
            <p className={styles.position}>{personalInfo.position}</p>
            <p className={styles.shortIntro}>{personalInfo.shortIntroduction}</p>
          </div>
          <div className={styles.introRight}>
            {detailedDescription.map((paragraph, index) => (
              <p key={index} className={styles.detailParagraph}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* 第二部分：工作经历 */}
      <section id="experience" className={styles.sectionExperience}>
        <div className={styles.sectionTitleRow}>
          <div className={styles.iconContainer}>
            <i className={`iconfont icon-gongzuo ${styles.iconSection}`} aria-hidden />
          </div>
          <h2 className={styles.sectionTitle}>
            {experienceLoading ? '工作经历' : experienceData?.title ?? '工作经历'}
          </h2>
        </div>

        {experienceLoading && !experienceData ? (
          <Loading />
        ) : experienceError || !experienceData ? (
          <Empty message={experienceError?.message ?? '加载工作经历失败'} />
        ) : (
          <>
            <ul className={styles.experienceList}>
              {experienceData.experiences.map((item, index) => (
                <li key={index} className={styles.experienceItem}>
                  <span className={styles.duration}>{item.duration}</span>
                  <div className={styles.experienceContent}>
                    <a
                      href={item.link ?? '#'}
                      className={styles.positionCompany}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.position}·{item.company}
                      <ExternalLink className={styles.externalIcon} aria-hidden />
                    </a>
                    <p className={styles.experienceDesc}>{item.description}</p>
                    <ul className={styles.skillsList}>
                      {item.skills.map((skill) => (
                        <li key={skill} className={styles.skillTag}>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
            <a
              href={experienceData.resumeDownloadUrl}
              className={styles.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              查看完整简历
              <ExternalLink className={styles.externalIcon} aria-hidden />
            </a>
          </>
        )}
      </section>
    </div>
  );
};

export default About;
