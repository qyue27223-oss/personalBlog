import { useState, useEffect } from 'react';

/**
 * 通用的 Mock 数据获取 Hook
 * 用于统一处理数据加载、错误处理和加载状态
 * 
 * @param url - Mock 数据的 URL 路径
 * @param dataKey - 返回数据中的 key（可选，用于提取嵌套数据）
 * @returns { data, loading, error }
 */
export function useMockData<T>(url: string, dataKey?: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(`Failed to fetch ${url}: ${res.statusText}`);
        }
        
        const jsonData = await res.json();
        // 如果指定了 dataKey，则提取嵌套数据
        const finalData = dataKey ? jsonData[dataKey] : jsonData;
        setData(finalData || null);
      } catch (err) {
        const error = err instanceof Error ? err : new Error('Unknown error');
        setError(error);
        console.error(`加载数据失败 [${url}]:`, error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, dataKey]);

  return { data, loading, error };
}
