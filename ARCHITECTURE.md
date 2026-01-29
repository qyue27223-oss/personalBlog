# 📐 项目架构说明文档

> 个人博客项目的架构设计和技术选型说明

## 📋 目录

- [架构概述](#架构概述)
- [技术栈选型](#技术栈选型)
- [目录结构](#目录结构)
- [核心模块设计](#核心模块设计)
- [数据流设计](#数据流设计)
- [路由架构](#路由架构)
- [样式架构](#样式架构)
- [状态管理架构](#状态管理架构)
- [构建与部署](#构建与部署)

---

## 🎯 架构概述

本项目采用**模块化、组件化**的前端架构设计，基于 React 19 + TypeScript + SCSS Modules 构建，遵循单一职责原则和关注点分离原则。

### 核心设计理念

1. **模块化设计**：每个功能模块独立封装，便于维护和扩展
2. **类型安全**：完整的 TypeScript 类型定义，确保代码质量
3. **样式隔离**：使用 SCSS Modules 实现样式模块化，避免样式冲突
4. **组件复用**：UI 组件和业务组件分离，提高代码复用率
5. **性能优化**：代码分割、懒加载等优化策略

---

## 🛠 技术栈选型

### 核心框架

| 技术 | 版本 | 用途 | 选型理由 |
|------|------|------|----------|
| **React** | ^19.2.3 | UI 框架 | 最新版本，性能优化，支持并发特性 |
| **TypeScript** | ^5.7.2 | 类型系统 | 提供类型安全，提升开发体验 |
| **Vite** | ^5.4.2 | 构建工具 | 快速构建，优秀的开发体验 |

### 路由管理

| 技术 | 版本 | 用途 |
|------|------|------|
| **React Router** | ^6.28.0 | 客户端路由管理 |

**选型理由**：
- React Router v6 提供声明式路由配置
- 支持嵌套路由和路由守卫
- 完善的 TypeScript 支持

### 状态管理

| 技术 | 版本 | 用途 |
|------|------|------|
| **Zustand** | ^5.0.1 | 全局状态管理 |

**选型理由**：
- 轻量级，API 简洁
- 无需 Provider 包裹
- 优秀的 TypeScript 支持
- 性能优异

### UI 与样式

| 技术 | 版本 | 用途 |
|------|------|------|
| **SCSS** | ^1.83.0 | CSS 预处理器 |
| **SCSS Modules** | - | 样式模块化 |
| **Ant Design** | ^5.20.0 | UI 组件库（可选） |

**选型理由**：
- SCSS Modules 提供样式隔离
- 支持变量、混合宏等高级特性
- Ant Design 提供丰富的组件库

### 工具库

| 技术 | 版本 | 用途 |
|------|------|------|
| **Axios** | ^1.7.7 | HTTP 请求库 |
| **Day.js** | ^1.11.13 | 日期处理库 |
| **React Markdown** | ^9.0.1 | Markdown 渲染 |
| **React Syntax Highlighter** | ^15.5.0 | 代码高亮 |
| **Lucide React** | ^0.468.0 | 图标库 |
| **Framer Motion** | ^11.11.17 | 动画库 |

---

## 📁 目录结构

```
person-blog/
├── public/                      # 静态资源目录
│   ├── icon-fengye.svg          # 站点图标（枫叶）
│   ├── mock/                    # Mock 数据
│   │   ├── articles.json
│   │   ├── projects.json
│   │   ├── carousel.json
│   │   ├── categories.json
│   │   └── tags.json
│   └── robots.txt               # SEO 配置
│
├── src/                         # 源代码目录
│   ├── components/              # 组件目录
│   │   ├── Layout/             # 布局组件
│   │   │   ├── Header/         # 头部（Logo 枫叶 + 导航四项 + 移动端菜单）
│   │   │   ├── Footer/         # 底部（关于博客、快速链接、关注我）
│   │   │   ├── Sidebar/        # 侧栏（仅文章/项目列表页展示；分类、标签为筛选占位）
│   │   │   ├── RouteWrapper.tsx # 路由包装器（按路由控制侧栏显示）
│   │   │   └── index.tsx       # 布局主组件
│   │   └── ui/                 # 基础 UI 组件
│   │       ├── ArticleCard/    # 文章卡片
│   │       ├── ProjectCard/    # 项目卡片
│   │       ├── Empty/          # 空状态
│   │       ├── Loading/        # 加载
│   │       └── Pagination/     # 分页
│   │
│   ├── pages/                  # 页面组件（路由页面）
│   │   ├── Home/               # 首页
│   │   ├── Articles/           # 文章列表页
│   │   ├── ArticleDetail/      # 文章详情页
│   │   ├── Projects/           # 项目列表页
│   │   ├── ProjectDetail/      # 项目详情页
│   │   ├── Search/             # 搜索页
│   │   ├── About/              # 关于页
│   │   └── NotFound/           # 404 页面
│   │
│   ├── hooks/                  # 自定义 Hooks
│   │   ├── useMockData.ts      # Mock 数据 Hook
│   │   ├── usePagination.ts    # 分页 Hook
│   │   ├── useMediaQuery.ts    # 媒体查询 Hook
│   │   └── index.ts            # Hooks 导出
│   │
│   ├── lib/                    # 工具函数库
│   │   ├── date.ts             # 日期处理工具
│   │   ├── router.ts           # 路由工具函数
│   │   └── index.ts            # 工具函数导出
│   │
│   ├── utils/                  # 通用工具函数
│   │   ├── router.tsx          # 路由配置
│   │   └── index.ts            # 工具函数导出
│   │
│   ├── types/                  # TypeScript 类型定义
│   │   └── index.ts            # 全局类型定义
│   │
│   ├── constants/              # 常量配置
│   │   ├── routes.ts           # 路由常量
│   │   └── navigation.ts       # 导航常量
│   │
│   ├── services/               # API 服务层
│   │   └── api.ts              # Axios 配置和 API 封装
│   │
│   ├── store/                  # Zustand 状态管理
│   │   └── index.ts            # Store 定义
│   │
│   ├── styles/                 # 全局样式
│   │   ├── _variables.scss     # SCSS 变量定义
│   │   ├── _mixins.scss        # SCSS 混合宏
│   │   └── index.scss          # 全局样式入口
│   │
│   ├── App.tsx                 # 主应用组件
│   ├── App.module.scss         # 主应用样式
│   ├── index.tsx               # 应用入口文件
│   └── vite-env.d.ts           # Vite 类型声明
│
├── .cursorrules                # Cursor AI 开发规范
├── .gitignore                  # Git 忽略配置
├── index.html                  # 入口 HTML 文件
├── package.json                # 项目依赖配置
├── tsconfig.json               # TypeScript 配置
├── tsconfig.node.json          # Node.js TypeScript 配置
├── vite.config.ts              # Vite 构建配置
├── ARCHITECTURE.md             # 项目架构文档（本文件）
├── CHANGELOG.md                # 更新日志文档
├── DEVELOPMENT.md              # 开发指南文档
├── README.md                   # 项目说明文档
└── TODO.md                     # 开发任务清单
```

### 目录说明

#### `/src/components/`
- **Layout/**：布局相关组件，包括 Header、Footer、Sidebar 等
- **ui/**：可复用的基础 UI 组件，如 Button、Card、Modal 等

#### `/src/pages/`
- 每个页面独立文件夹，包含 `index.tsx` 和 `[PageName].module.scss`
- 页面组件负责业务逻辑和页面级状态管理

#### `/src/hooks/`
- 自定义 React Hooks，封装可复用的逻辑
- 如 `usePagination`、`useMockData` 等

#### `/src/lib/`
- 纯函数工具库，不依赖 React
- 如日期格式化、字符串处理等

#### `/src/utils/`
- 通用工具函数，可能依赖 React 或其他库
- 如路由配置、工具函数等

#### `/src/types/`
- TypeScript 类型定义
- 全局类型、接口定义

#### `/src/constants/`
- 常量配置
- 路由路径、API 端点、配置项等

#### `/src/services/`
- API 服务层
- Axios 配置、API 请求封装

#### `/src/store/`
- Zustand 状态管理
- 全局状态定义和管理

#### `/src/styles/`
- 全局样式文件
- SCSS 变量、混合宏、全局样式

---

## 🧩 核心模块设计

### 1. 组件架构

#### 组件分层

```
┌─────────────────────────────────────┐
│          Pages (页面层)              │
│   - 业务逻辑、页面级状态管理          │
└──────────────┬──────────────────────┘
               │
┌──────────────▼──────────────────────┐
│      Layout Components (布局层)      │
│   - Header、Footer、Sidebar          │
└──────────────┬──────────────────────┘
               │
┌──────────────▼──────────────────────┐
│      UI Components (UI 层)          │
│   - ArticleCard、Pagination 等      │
└─────────────────────────────────────┘
```

#### 组件设计原则

1. **单一职责**：每个组件只负责一个功能
2. **可复用性**：UI 组件设计为可复用组件
3. **Props 接口**：使用 TypeScript Interface 定义 Props
4. **样式隔离**：每个组件使用独立的 SCSS Module

### 2. 路由架构

#### 路由配置结构

```typescript
// src/utils/router.tsx
export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <RouteWrapper><Home /></RouteWrapper>
  },
  // ... 其他路由
]);
```

#### 路由设计特点

- **集中式配置**：所有路由在 `router.tsx` 中统一管理
- **路由常量**：使用 `constants/routes.ts` 定义路由路径
- **路由包装器**：`RouteWrapper` 统一处理布局和权限
- **类型安全**：路由参数使用 TypeScript 类型定义

### 3. 样式架构

#### SCSS Modules 使用

```scss
// Component.module.scss
@import '@/styles/variables';
@import '@/styles/mixins';

.component {
  @include flex-center;
  color: $primary-color;
}
```

#### 样式组织

- **全局变量**：`styles/_variables.scss` 定义颜色、间距等
- **混合宏**：`styles/_mixins.scss` 定义可复用样式块
- **组件样式**：每个组件独立的 `.module.scss` 文件
- **样式隔离**：CSS Modules 自动生成唯一类名

---

## 🔄 数据流设计

### 数据流向

```
┌─────────────┐
│   API 层    │ ← HTTP 请求
│  services/  │
└──────┬──────┘
       │
┌──────▼──────┐
│  Store 层   │ ← 状态管理
│   store/    │
└──────┬──────┘
       │
┌──────▼──────┐
│  Hooks 层   │ ← 业务逻辑封装
│   hooks/    │
└──────┬──────┘
       │
┌──────▼──────┐
│ Components  │ ← UI 渲染
│  components/│
└─────────────┘
```

### 状态管理策略

1. **全局状态**：使用 Zustand 管理用户信息、主题等全局状态
2. **页面状态**：使用 React useState 管理页面级状态
3. **服务端状态**：使用自定义 Hooks 封装 API 调用
4. **表单状态**：使用 React 受控组件或 Formik

---

## 🛣 路由架构

### 路由配置

所有路由在 `src/utils/router.tsx` 中集中配置：

```typescript
export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <RouteWrapper><Home /></RouteWrapper>
  },
  // ...
]);
```

### 路由常量

路由路径在 `src/constants/routes.ts` 中定义：

```typescript
export const ROUTES = {
  HOME: '/',
  ARTICLES: '/articles',
  ARTICLE_DETAIL: '/article/:id',
  PROJECT: '/project',
  PROJECT_DETAIL: '/project/:id',
  ABOUT: '/about',
  SEARCH: '/search',
  NOT_FOUND: '*'
};
```

### 路由参数类型

路由参数类型在 `src/types/index.ts` 中定义：

```typescript
export interface ArticleParams extends Record<string, string | undefined> {
  id: string;
}
export interface ProjectParams extends Record<string, string | undefined> {
  id: string;
}
```

---

## 🎨 样式架构

### SCSS 变量系统

```scss
// styles/_variables.scss
$primary-color: #1890ff;
$spacing-sm: 8px;
$spacing-md: 16px;
```

### SCSS 混合宏系统

```scss
// styles/_mixins.scss
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

### 样式模块化

每个组件使用独立的 SCSS Module：

```scss
// Component.module.scss
@import '@/styles/variables';
@import '@/styles/mixins';

.component {
  padding: $spacing-md;
  @include flex-center;
}
```

---

## 📦 状态管理架构

### Zustand Store 结构

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

### 状态分类

1. **UI 状态**：主题、侧边栏展开/收起等
2. **用户状态**：用户信息、登录状态等
3. **数据状态**：文章列表、分类列表等（可选）

---

## 🚀 构建与部署

### 开发环境

```bash
npm run dev      # 启动开发服务器
```

### 生产构建

```bash
npm run build    # 构建生产版本
npm run preview  # 预览生产构建
```

### 构建配置

- **Vite**：快速构建，支持 HMR
- **TypeScript**：类型检查
- **SCSS**：样式编译和优化

---

## 📚 相关文档

- [开发指南](./DEVELOPMENT.md) - 详细的开发指南
- [更新日志](./CHANGELOG.md) - 代码更新历史
- [README](./README.md) - 项目说明文档

---

**最后更新**：2026-01-30
