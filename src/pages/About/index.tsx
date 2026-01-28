import React from 'react';
import styles from './About.module.scss';

const About: React.FC = () => {
  return (
    <div className={styles.aboutPage}>
      <h1 className={styles.title}>关于我</h1>
      <p className={styles.description}>这里是我的个人介绍</p>
    </div>
  );
};

export default About;
