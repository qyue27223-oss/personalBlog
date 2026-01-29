import { useState, useMemo, useEffect } from 'react';
import { Pagination } from '@/types';

interface UsePaginationOptions {
  pageSize?: number;
  initialPage?: number;
}

interface UsePaginationReturn<T> {
  pagination: Pagination;
  paginatedData: T[];
  totalPages: number;
  setPage: (page: number) => void;
  setPageSize: (pageSize: number) => void;
}

/**
 * 分页逻辑 Hook
 * 用于统一处理数据分页逻辑
 * 
 * @param data - 需要分页的数据数组
 * @param options - 分页选项
 * @returns 分页相关的状态和方法
 */
export function usePagination<T>(
  data: T[],
  options: UsePaginationOptions = {}
): UsePaginationReturn<T> {
  const { pageSize: initialPageSize = 6, initialPage = 1 } = options;
  
  // 确保 data 是数组
  const safeData = Array.isArray(data) ? data : [];
  
  const [pagination, setPagination] = useState<Pagination>({
    page: initialPage,
    pageSize: initialPageSize,
    total: safeData.length,
  });

  // 当数据变化时更新总数
  useEffect(() => {
    setPagination((prev) => ({
      ...prev,
      total: safeData.length,
    }));
  }, [safeData.length]);

  // 计算分页数据
  const paginatedData = useMemo(() => {
    const startIndex = (pagination.page - 1) * pagination.pageSize;
    const endIndex = startIndex + pagination.pageSize;
    return safeData.slice(startIndex, endIndex);
  }, [safeData, pagination.page, pagination.pageSize]);

  // 计算总页数
  const totalPages = useMemo(() => {
    return Math.ceil(safeData.length / pagination.pageSize);
  }, [safeData.length, pagination.pageSize]);

  // 更新页码
  const setPage = (page: number) => {
    setPagination((prev) => ({
      ...prev,
      page,
      total: safeData.length, // 更新总数
    }));
    // 滚动到顶部
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 更新每页数量
  const setPageSize = (newPageSize: number) => {
    setPagination((prev) => ({
      ...prev,
      pageSize: newPageSize,
      page: 1, // 重置到第一页
      total: safeData.length,
    }));
  };

  return {
    pagination,
    paginatedData,
    totalPages,
    setPage,
    setPageSize,
  };
}
