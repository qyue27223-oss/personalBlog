import React from 'react';
import styles from './Home.module.scss';

const Home: React.FC = () => {
  return (
    <div className={styles.homePage}>
      <h1 className={styles.title}>欢迎来到我的博客</h1>
      <p className={styles.description}>这里是我的个人博客首页</p>
    </div>
  );
};

export default Home;
