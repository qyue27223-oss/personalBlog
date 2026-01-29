/**
 * 日期格式化工具函数
 * 统一处理日期格式化逻辑，避免重复代码
 */

/**
 * 格式化日期为中文格式
 * @param dateString - ISO 日期字符串
 * @param options - 格式化选项
 * @returns 格式化后的日期字符串
 */
export function formatDate(
  dateString: string,
  options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
): string {
  try {
    return new Date(dateString).toLocaleDateString('zh-CN', options);
  } catch (error) {
    console.error('日期格式化失败:', error);
    return dateString;
  }
}

/**
 * 格式化日期为简短格式（YYYY-MM-DD）
 */
export function formatDateShort(dateString: string): string {
  return formatDate(dateString, {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
}
