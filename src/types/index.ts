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

// 路由参数类型
export interface ArticleParams {
  id: string;
}

export interface CategoryParams {
  name: string;
}

export interface TagParams {
  name: string;
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
