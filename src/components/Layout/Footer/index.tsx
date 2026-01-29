import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Mail, Twitter } from 'lucide-react';
import { NAV_ITEMS } from '@/constants/navigation';
import styles from './Footer.module.scss';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  const currentYear = new Date().getFullYear();

  // 社交链接
  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com',
      ariaLabel: '访问 GitHub',
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com',
      ariaLabel: '访问 Twitter',
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:example@example.com',
      ariaLabel: '发送邮件',
    },
  ];

  return (
    <footer className={`${styles.footer} ${className || ''}`}>
      <div className={styles.container}>
        {/* 主要内容区域 */}
        <div className={styles.content}>
          {/* 关于信息 */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>关于博客</h3>
            <p className={styles.sectionDescription}>
              分享前端开发、技术心得和生活感悟的个人博客
            </p>
          </div>

          {/* 快速链接 */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>快速链接</h3>
            <ul className={styles.linkList}>
              {NAV_ITEMS.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className={styles.link}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 社交链接 */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>关注我</h3>
            <div className={styles.socialLinks}>
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                    aria-label={social.ariaLabel}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* 版权信息 */}
        <div className={styles.copyright}>
          <p className={styles.copyrightText}>
            © {currentYear} 个人博客. 保留所有权利.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
