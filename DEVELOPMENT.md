# 开发指南

本文档提供详细的开发指南，帮助开发者快速上手项目开发。

## 📋 目录

- [开发环境](#开发环境)
- [项目规范](#项目规范)
- [开发流程](#开发流程)
- [代码示例](#代码示例)
- [常见问题](#常见问题)
- [更新文档](#更新文档)

---

## 🛠 开发环境

### 必需工具

- **Node.js** >= 16.0.0
- **npm** >= 8.0.0 或 **yarn** >= 1.22.0
- **Git** >= 2.0.0
- **VS Code** 或 **Cursor**（推荐）

### 推荐插件

- ESLint
- Prettier
- TypeScript
- SCSS IntelliSense

---

## 📐 项目规范

### 代码风格

本项目严格遵循 `.cursorrules` 中定义的规范：

#### TypeScript

- 所有组件必须使用 TypeScript
- Props 必须使用 Interface 定义
- 避免使用 `any` 类型

```typescript
// ✅ 正确
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  // ...
};

// ❌ 错误
const Button = ({ children, onClick }: any) => {
  // ...
};
```

#### SCSS Modules

- 所有样式文件使用 `.module.scss` 格式
- 样式类名使用 camelCase
- 必须引用全局变量和混合宏

```scss
// ✅ 正确
@import '@/styles/variables';
@import '@/styles/mixins';

.button {
  @include button-base;
  background-color: $primary-color;
}

// ❌ 错误
.button {
  background-color: #1890ff; // 硬编码颜色
}
```

#### 命名规范

- **组件文件**：PascalCase（`ArticleDetail.tsx`）
- **样式文件**：`ComponentName.module.scss`
- **工具函数**：camelCase（`formatDate.ts`）
- **目录名**：PascalCase（组件）或 camelCase（工具）

---

## 🔄 开发流程

### 1. 添加新页面

**步骤：**

1. 在 `src/pages/` 下创建新文件夹
2. 创建 `index.tsx` 和 `ComponentName.module.scss`
3. 在 `src/utils/router.tsx` 中添加路由
4. 在 `src/constants/routes.ts` 中添加路由常量

**示例：**

```typescript
// 1. 创建 src/pages/NewPage/index.tsx
import React from 'react';
import styles from './NewPage.module.scss';

const NewPage: React.FC = () => {
  return (
    <div className={styles.newPage}>
      <h1>新页面</h1>
    </div>
  );
};

export default NewPage;

// 2. 创建 src/pages/NewPage/NewPage.module.scss
@import '@/styles/variables';
@import '@/styles/mixins';

.newPage {
  padding: $spacing-xl;
}

// 3. 在 src/constants/routes.ts 中添加
export const ROUTES = {
  // ...
  NEW_PAGE: '/new-page',
} as const;

// 4. 在 src/utils/router.tsx 中添加路由
import NewPage from '@/pages/NewPage';

export const router = createBrowserRouter([
  // ...
  {
    path: ROUTES.NEW_PAGE,
    element: <NewPage />,
  },
]);
```

### 2. 添加新组件

**步骤：**

1. 在 `src/components/ui/` 下创建新文件夹
2. 创建 `ComponentName.tsx` 和 `ComponentName.module.scss`
3. 定义 Props Interface
4. 使用样式变量和混合宏

**示例：**

```typescript
// src/components/ui/Button/Button.tsx
import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  disabled = false,
}) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
```

### 3. 添加自定义 Hook

**步骤：**

1. 在 `src/hooks/` 下创建 Hook 文件
2. 在 `src/hooks/index.ts` 中导出

**示例：**

```typescript
// src/hooks/useArticle.ts
import { useState, useEffect } from 'react';
import { Article } from '@/types';
import api from '@/services/api';

export const useArticle = (id: string) => {
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        setLoading(true);
        const data = await api.get<Article>(`/articles/${id}`);
        setArticle(data);
      } catch (err) {
        setError('加载文章失败');
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [id]);

  return { article, loading, error };
};

// src/hooks/index.ts
export { useArticle } from './useArticle';
```

### 4. 添加工具函数

**步骤：**

1. 根据复杂度选择 `lib/` 或 `utils/`
2. 创建工具函数文件
3. 在对应的 `index.ts` 中导出

**示例：**

```typescript
// src/lib/dateFormatter.ts
import dayjs from 'dayjs';

export const formatDate = (date: string | Date, format = 'YYYY-MM-DD'): string => {
  return dayjs(date).format(format);
};

export const formatRelativeTime = (date: string | Date): string => {
  return dayjs(date).fromNow();
};

// src/lib/index.ts
export { formatDate, formatRelativeTime } from './dateFormatter';
```

---

## 💡 代码示例

### 使用状态管理

```typescript
// src/store/articleStore.ts
import { create } from 'zustand';
import { Article } from '@/types';

interface ArticleStore {
  articles: Article[];
  setArticles: (articles: Article[]) => void;
  addArticle: (article: Article) => void;
}

export const useArticleStore = create<ArticleStore>((set) => ({
  articles: [],
  setArticles: (articles) => set({ articles }),
  addArticle: (article) =>
    set((state) => ({ articles: [...state.articles, article] })),
}));

// 在组件中使用
import { useArticleStore } from '@/store/articleStore';

const ArticlesPage: React.FC = () => {
  const { articles, setArticles } = useArticleStore();
  // ...
};
```

### 使用 API 服务

```typescript
// src/services/articleService.ts
import api from './api';
import { Article, PaginatedResponse } from '@/types';

export const articleService = {
  getArticles: async (page = 1, pageSize = 10): Promise<PaginatedResponse<Article>> => {
    return api.get(`/articles?page=${page}&pageSize=${pageSize}`);
  },

  getArticle: async (id: string): Promise<Article> => {
    return api.get(`/articles/${id}`);
  },

  createArticle: async (article: Partial<Article>): Promise<Article> => {
    return api.post('/articles', article);
  },
};
```

---

## ❓ 常见问题

### Q: 如何添加新的路由？

A: 参考 [添加新页面](#1-添加新页面) 的步骤。

### Q: 样式不生效怎么办？

A: 检查以下几点：
1. 是否使用了 `.module.scss` 格式
2. 是否正确导入样式：`import styles from './Component.module.scss'`
3. 是否使用了正确的类名：`className={styles.className}`

### Q: TypeScript 类型错误？

A: 检查以下几点：
1. 是否正确定义了 Interface
2. 是否导入了正确的类型
3. 检查 `tsconfig.json` 配置

### Q: 如何更新文档？

A: 参考 [更新文档](#更新文档) 部分。

---

## 📝 更新文档

### README.md

当完成重要功能时，更新以下部分：

1. **开发进度** - 更新完成的功能
2. **更新日志** - 添加新版本记录
3. **功能特性** - 更新已实现的功能列表

### CHANGELOG.md

每次发布新版本时：

1. 创建新的版本号
2. 添加变更记录（新增、优化、修复、删除）
3. 更新日期

### DEVELOPMENT.md

添加新的开发指南或示例时：

1. 在相应章节添加内容
2. 更新代码示例
3. 更新常见问题

---

## 🔗 相关资源

- [React 文档](https://react.dev/)
- [TypeScript 文档](https://www.typescriptlang.org/)
- [React Router 文档](https://reactrouter.com/)
- [Zustand 文档](https://github.com/pmndrs/zustand)
- [SCSS 文档](https://sass-lang.com/)

---

**最后更新**：2026-01-28
