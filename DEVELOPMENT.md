# 💻 开发指南

> 个人博客项目的详细开发指南和最佳实践

## 📋 目录

- [环境准备](#环境准备)
- [项目启动](#项目启动)
- [代码规范](#代码规范)
- [开发流程](#开发流程)
- [添加新功能](#添加新功能)
- [组件开发](#组件开发)
- [样式开发](#样式开发)
- [状态管理](#状态管理)
- [API 开发](#api-开发)
- [测试指南](#测试指南)
- [常见问题](#常见问题)
- [最佳实践](#最佳实践)

---

## 🛠 环境准备

### 必需环境

- **Node.js** >= 16.0.0
- **npm** >= 8.0.0 或 **yarn** >= 1.22.0
- **Git** >= 2.0.0

### 推荐工具

- **VS Code** 或 **Cursor** - 代码编辑器
- **Git** - 版本控制
- **Chrome DevTools** - 浏览器调试工具

### VS Code 推荐插件

- **ESLint** - 代码检查
- **Prettier** - 代码格式化
- **SCSS IntelliSense** - SCSS 语法支持
- **TypeScript Vue Plugin** - TypeScript 支持

---

## 🚀 项目启动

### 1. 克隆项目

```bash
git clone <repository-url>
cd person-blog
```

### 2. 安装依赖

```bash
# 使用 npm
npm install

# 或使用 yarn
yarn install
```

### 3. 启动开发服务器

```bash
# 使用 npm
npm run dev

# 或使用 yarn
yarn dev
```

应用将在 [http://localhost:5173](http://localhost:5173) 启动（Vite 默认端口）。

### 4. 构建生产版本

```bash
# 使用 npm
npm run build

# 或使用 yarn
yarn build
```

### 5. 预览生产构建

```bash
# 使用 npm
npm run preview

# 或使用 yarn
yarn preview
```

---

## 📝 代码规范

### TypeScript 规范

#### 类型定义

```typescript
// ✅ 推荐：使用 Interface 定义 Props
interface ArticleCardProps {
  article: Article;
  onClick?: (id: string) => void;
}

// ❌ 不推荐：使用 type 定义 Props
type ArticleCardProps = {
  article: Article;
};
```

#### 组件定义

```typescript
// ✅ 推荐：使用 React.FC 或函数组件
const ArticleCard: React.FC<ArticleCardProps> = ({ article, onClick }) => {
  return <div>...</div>;
};

// ❌ 不推荐：使用 class 组件
class ArticleCard extends React.Component { ... }
```

#### 命名规范

- **组件文件**：PascalCase（如 `ArticleCard.tsx`）
- **工具函数**：camelCase（如 `formatDate.ts`）
- **常量**：UPPER_SNAKE_CASE（如 `API_BASE_URL`）
- **类型/接口**：PascalCase（如 `Article`、`ArticleProps`）

### SCSS 规范

#### 文件命名

- **组件样式**：`[ComponentName].module.scss`
- **全局样式**：`_variables.scss`、`_mixins.scss`

#### 样式类名

```scss
// ✅ 推荐：使用 camelCase（便于 JavaScript 访问）
.articleCard {
  &_title {
    font-size: 18px;
  }
  
  &--featured {
    border: 2px solid $primary-color;
  }
}

// ❌ 不推荐：使用 kebab-case
.article-card {
  .article-card-title { ... }
}
```

#### 变量和混合宏使用

```scss
// ✅ 推荐：使用全局变量和混合宏
@import '@/styles/variables';
@import '@/styles/mixins';

.component {
  @include flex-center;
  padding: $spacing-md;
  color: $primary-color;
}
```

### 导入顺序

```typescript
// 1. React 相关
import React from 'react';
import { useState } from 'react';

// 2. 第三方库
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';

// 3. 项目内部 - 类型
import type { Article } from '@/types';

// 4. 项目内部 - 组件
import ArticleCard from '@/components/ui/ArticleCard';
import Layout from '@/components/Layout';

// 5. 项目内部 - Hooks
import { usePagination } from '@/hooks';

// 6. 项目内部 - 工具函数
import { formatDate } from '@/lib/date';

// 7. 项目内部 - 样式
import styles from './Component.module.scss';
```

---

## 🔄 开发流程

### 1. 创建功能分支

```bash
git checkout -b feature/feature-name
```

### 2. 开发功能

- 编写代码
- 遵循代码规范
- 添加必要的注释

### 3. 提交代码

```bash
git add .
git commit -m "feat: 添加新功能描述"
```

**提交信息规范**：
- `feat`: 新功能
- `fix`: 修复 bug
- `docs`: 文档更新
- `style`: 代码格式调整
- `refactor`: 代码重构
- `perf`: 性能优化
- `test`: 测试相关
- `chore`: 构建/工具相关

### 4. 推送代码

```bash
git push origin feature/feature-name
```

### 5. 创建 Pull Request

在 GitHub/GitLab 上创建 PR，等待代码审查。

---

## ➕ 添加新功能

### 添加新页面

#### 1. 创建页面组件

```bash
# 在 src/pages/ 下创建新文件夹
mkdir src/pages/NewPage
```

#### 2. 创建页面文件

```typescript
// src/pages/NewPage/index.tsx
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
```

```scss
// src/pages/NewPage/NewPage.module.scss
@import '@/styles/variables';
@import '@/styles/mixins';

.newPage {
  padding: $spacing-lg;
  
  h1 {
    color: $primary-color;
  }
}
```

#### 3. 添加路由常量

```typescript
// src/constants/routes.ts
export const ROUTES = {
  // ... 其他路由
  NEW_PAGE: '/new-page',
};
```

#### 4. 配置路由

```typescript
// src/utils/router.tsx
import NewPage from '@/pages/NewPage';

export const router = createBrowserRouter([
  // ... 其他路由
  {
    path: ROUTES.NEW_PAGE,
    element: (
      <RouteWrapper>
        <NewPage />
      </RouteWrapper>
    ),
  },
]);
```

### 添加新组件

#### 1. 创建组件文件夹

```bash
mkdir src/components/ui/NewComponent
```

#### 2. 创建组件文件

```typescript
// src/components/ui/NewComponent/index.tsx
import React from 'react';
import styles from './NewComponent.module.scss';

interface NewComponentProps {
  title: string;
  onClick?: () => void;
}

const NewComponent: React.FC<NewComponentProps> = ({ title, onClick }) => {
  return (
    <div className={styles.newComponent} onClick={onClick}>
      <h2>{title}</h2>
    </div>
  );
};

export default NewComponent;
```

```scss
// src/components/ui/NewComponent/NewComponent.module.scss
@import '@/styles/variables';
@import '@/styles/mixins';

.newComponent {
  padding: $spacing-md;
  border-radius: $border-radius-base;
  
  h2 {
    color: $text-color-primary;
  }
}
```

### 添加新 Hook

#### 1. 创建 Hook 文件

```typescript
// src/hooks/useNewHook.ts
import { useState, useEffect } from 'react';

interface UseNewHookReturn {
  data: any;
  loading: boolean;
  error: Error | null;
}

export const useNewHook = (): UseNewHookReturn => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    // Hook 逻辑
  }, []);

  return { data, loading, error };
};
```

#### 2. 导出 Hook

```typescript
// src/hooks/index.ts
export { useNewHook } from './useNewHook';
```

---

## 🧩 组件开发

### 组件结构

```typescript
// 1. 导入依赖
import React from 'react';
import styles from './Component.module.scss';

// 2. 定义 Props 接口
interface ComponentProps {
  // Props 定义
}

// 3. 定义组件
const Component: React.FC<ComponentProps> = ({ ...props }) => {
  // 4. Hooks
  const [state, setState] = useState();
  
  // 5. 事件处理函数
  const handleClick = () => {
    // 处理逻辑
  };
  
  // 6. 渲染
  return (
    <div className={styles.component}>
      {/* JSX */}
    </div>
  );
};

// 7. 导出组件
export default Component;
```

### 组件最佳实践

1. **单一职责**：每个组件只负责一个功能
2. **Props 类型**：使用 TypeScript Interface 定义 Props
3. **默认值**：使用默认参数或解构默认值
4. **Memo 优化**：必要时使用 `React.memo` 优化性能
5. **错误边界**：添加错误处理

---

## 🎨 样式开发

### SCSS Modules 使用

```scss
// Component.module.scss
@import '@/styles/variables';
@import '@/styles/mixins';

.component {
  // 基础样式
  padding: $spacing-md;
  
  // 嵌套选择器
  &_title {
    font-size: 18px;
    color: $text-color-primary;
  }
  
  // 修饰符
  &--active {
    background-color: $primary-color;
  }
  
  // 媒体查询
  @include respond-to('mobile') {
    padding: $spacing-sm;
  }
}
```

### 样式最佳实践

1. **使用变量**：颜色、间距等使用全局变量
2. **使用混合宏**：复杂样式块使用混合宏
3. **嵌套层级**：不超过 3 层嵌套
4. **BEM 命名**：使用类 BEM 命名规范
5. **响应式**：使用混合宏处理响应式

---

## 📦 状态管理

### Zustand Store 使用

```typescript
// store/index.ts
import { create } from 'zustand';

interface AppState {
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
}

export const useAppStore = create<AppState>((set) => ({
  theme: 'light',
  setTheme: (theme) => set({ theme }),
}));
```

### 在组件中使用

```typescript
import { useAppStore } from '@/store';

const Component: React.FC = () => {
  const { theme, setTheme } = useAppStore();
  
  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      切换主题
    </button>
  );
};
```

---

## 🌐 API 开发

### API 服务配置

```typescript
// services/api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
  timeout: 10000,
});

export default api;
```

### API 请求封装

```typescript
// services/article.ts
import api from './api';
import type { Article, ApiResponse } from '@/types';

export const getArticles = async (): Promise<Article[]> => {
  const response = await api.get<ApiResponse<Article[]>>('/articles');
  return response.data.data;
};
```

### 在组件中使用

```typescript
import { useEffect, useState } from 'react';
import { getArticles } from '@/services/article';
import type { Article } from '@/types';

const ArticlesPage: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  
  useEffect(() => {
    getArticles().then(setArticles);
  }, []);
  
  return <div>{/* 渲染文章列表 */}</div>;
};
```

---

## 🧪 测试指南

### 单元测试

```typescript
// Component.test.tsx
import { render, screen } from '@testing-library/react';
import Component from './Component';

describe('Component', () => {
  it('应该正确渲染', () => {
    render(<Component title="测试" />);
    expect(screen.getByText('测试')).toBeInTheDocument();
  });
});
```

### 运行测试

```bash
npm test
```

---

## ❓ 常见问题

### Q: 如何添加新的路由？

A: 参考 [添加新页面](#添加新页面) 章节。

### Q: 样式不生效怎么办？

A: 
1. 检查 SCSS Module 导入是否正确
2. 检查类名是否正确使用 `styles.className`
3. 检查全局样式变量是否导入

### Q: TypeScript 类型错误？

A:
1. 检查类型定义是否正确
2. 检查导入路径是否正确
3. 运行 `npm run build` 查看详细错误信息

### Q: 如何调试？

A:
1. 使用 Chrome DevTools
2. 使用 React DevTools
3. 使用 `console.log` 或 `debugger`

---

## ✨ 最佳实践

### 1. 代码组织

- 保持文件结构清晰
- 相关功能放在同一目录
- 使用路径别名 `@/` 简化导入

### 2. 性能优化

- 使用 `React.memo` 优化组件渲染
- 使用 `useMemo` 和 `useCallback` 优化计算和函数
- 使用代码分割和懒加载

### 3. 可维护性

- 添加必要的注释
- 使用有意义的变量名
- 遵循单一职责原则

### 4. 类型安全

- 始终使用 TypeScript 类型
- 避免使用 `any` 类型
- 为函数参数和返回值添加类型

---

## 📚 相关文档

- [项目架构文档](./ARCHITECTURE.md)
- [更新日志](./CHANGELOG.md)
- [README](./README.md)

---

**最后更新**：2026-01-29
