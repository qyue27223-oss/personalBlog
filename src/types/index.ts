// 全局类型定义

// 文章相关类型
export interface Article {
  id: string;
  title: string;
  content: string;
  excerpt?: string;
  author?: string;
  publishDate: string;
  updateDate?: string;
  category: string;
  tags: string[];
  views?: number;
  likes?: number;
  coverImage?: string;
}

// 分类相关类型
export interface Category {
  name: string;
  slug: string;
  description?: string;
  articleCount?: number;
}

// 标签相关类型
export interface Tag {
  name: string;
  slug: string;
  articleCount?: number;
}

// 项目相关类型
export interface Project {
  id: string;
  title: string;
  description: string;
  excerpt?: string;
  link?: string;
  coverImage?: string;
  techStack?: string[];
  createdAt?: string;
  /** 浏览量 */
  views?: number;
  /** 点赞数 */
  likes?: number;
}

// 路由参数类型 - 需要满足 Record<string, string | undefined> 约束
export interface ArticleParams extends Record<string, string | undefined> {
  id: string;
}

export interface ProjectParams extends Record<string, string | undefined> {
  id: string;
}

// API 响应类型
export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}

// 分页类型
export interface Pagination {
  page: number;
  pageSize: number;
  total: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: Pagination;
}

// 搜索参数类型
export interface SearchParams {
  q?: string;
  category?: string;
  tag?: string;
  page?: number;
}

// 关于页 - 个人信息
export interface AboutPersonalInfo {
  name: string;
  position: string;
  shortIntroduction: string;
}

export interface AboutData {
  personalInfo: AboutPersonalInfo;
  detailedDescription: string[];
}

// 关于页 - 工作经历
export interface ExperienceItem {
  duration: string;
  position: string;
  company: string;
  description: string;
  skills: string[];
  link?: string;
}

export interface ExperienceData {
  title: string;
  experiences: ExperienceItem[];
  resumeDownloadUrl: string;
}
