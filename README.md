# 📝 个人博客项目

> 基于 React + TypeScript + SCSS 构建的现代化个人博客系统

[![React](https://img.shields.io/badge/React-19.2.3-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.2-blue.svg)](https://www.typescriptlang.org/)
[![SCSS](https://img.shields.io/badge/SCSS-Modules-pink.svg)](https://sass-lang.com/)

## 📋 目录

- [项目简介](#项目简介)
- [功能特性](#功能特性)
- [技术栈](#技术栈)
- [项目结构](#项目结构)
- [快速开始](#快速开始)
- [开发指南](#开发指南)
- [开发进度](#开发进度)
- [更新日志](#更新日志)
- [相关文档](#相关文档)

---

## 🎯 项目简介

这是一个基于 React 19 和 TypeScript 构建的现代化个人博客系统（枫叶博客），采用模块化架构设计，支持文章与项目列表/详情、侧栏分类/标签筛选、搜索等核心特性；数据暂用 public/mock 下的 JSON 模拟。

### 核心特点

- ✨ **现代化技术栈**：React 19 + TypeScript + SCSS Modules
- 🎨 **模块化设计**：组件化开发，易于维护和扩展
- 📱 **响应式布局**：完美适配移动端和桌面端
- 🎭 **主题支持**：支持暗黑模式切换
- ⚡ **性能优化**：代码分割、懒加载等优化策略
- 🔒 **类型安全**：完整的 TypeScript 类型定义

---

## ✨ 功能特性

### 已实现功能

- [x] 项目基础搭建（TypeScript + SCSS Modules + Vite）
- [x] 路由系统配置（React Router v6）
- [x] 页面结构：首页、文章列表/详情、项目列表/详情、关于、搜索、404
- [x] 布局组件（Header、Footer、Sidebar、RouteWrapper）
- [x] 顶部导航四项：首页、文章、项目、关于（Logo 枫叶图标 + iconfont）
- [x] 侧栏仅在「文章」「项目」列表页展示；分类/标签点击为筛选占位（不跳转）
- [x] 样式系统（全局变量、混合宏、body 最小宽度 320px）
- [x] 类型定义系统（Article、Project、Category、Tag 等）
- [x] Mock 数据：`public/mock/`（articles、projects、carousel、categories、tags）
- [x] 文章/项目列表分页、详情页从 mock 按 id 展示
- [x] useMockData、usePagination、useMediaQuery 等 Hooks

### 计划功能

- [ ] 侧栏分类/标签筛选与主内容区联调
- [ ] 搜索功能完善
- [ ] Markdown 渲染和代码高亮
- [ ] 暗黑模式切换
- [ ] 响应式与性能优化（代码分割、懒加载）

> 📌 **提示**：详细的功能开发计划请查看 [开发进度](#开发进度) 和 [TODO.md](./TODO.md)

---

## 🛠 技术栈

### 核心框架

- **React** `^19.2.3` - UI 框架
- **TypeScript** `^5.7.2` - 类型系统
- **React Router** `^6.28.0` - 路由管理

### UI & 样式

- **SCSS** `^1.83.0` - CSS 预处理器
- **SCSS Modules** - 样式模块化
- **Ant Design** `^5.20.0` - UI 组件库（可选）

### 状态管理

- **Zustand** `^5.0.1` - 轻量级状态管理

### 工具库

- **Axios** `^1.7.7` - HTTP 请求
- **Day.js** `^1.11.13` - 日期处理
- **React Markdown** `^9.0.1` - Markdown 渲染
- **React Syntax Highlighter** `^15.5.0` - 代码高亮
- **Lucide React** `^0.468.0` - 图标库
- **Framer Motion** `^11.11.17` - 动画库

### 开发工具

- **Vite** `^5.4.2` - 构建工具
- **ESLint** - 代码检查
- **TypeScript** - 类型检查

---

## 📁 项目结构

```
person-blog/
├── public/                 # 静态资源
│   ├── icon-fengye.svg    # 站点图标（枫叶）
│   ├── mock/              # Mock 数据
│   │   ├── articles.json
│   │   ├── projects.json
│   │   ├── carousel.json
│   │   ├── categories.json
│   │   └── tags.json
│   ├── robots.txt
│   └── index.html 由根目录提供
├── src/
│   ├── components/
│   │   ├── Layout/        # Header、Footer、Sidebar、RouteWrapper
│   │   └── ui/            # ArticleCard、ProjectCard、Empty、Loading、Pagination
│   ├── pages/
│   │   ├── Home/
│   │   ├── Articles/
│   │   ├── ArticleDetail/
│   │   ├── Projects/
│   │   ├── ProjectDetail/
│   │   ├── About/
│   │   ├── Search/
│   │   └── NotFound/
│   ├── hooks/             # useMockData、usePagination、useMediaQuery
│   ├── lib/               # date、router（getArticleDetailPath、getProjectDetailPath）
│   ├── utils/router.tsx   # 路由配置
│   ├── types/
│   ├── constants/         # routes、navigation
│   ├── services/
│   ├── store/
│   ├── styles/            # _variables、_mixins、index.scss
│   ├── App.tsx
│   ├── index.tsx
│   └── vite-env.d.ts
├── .cursorrules
├── tsconfig.json
├── package.json
├── TODO.md
└── README.md
```

> 📖 详细的项目结构说明请查看 [ARCHITECTURE.md](./ARCHITECTURE.md)

---

## 🚀 快速开始

### 环境要求

- Node.js >= 16.0.0
- npm >= 8.0.0 或 yarn >= 1.22.0

### 安装依赖

```bash
# 使用 npm
npm install

# 或使用 yarn
yarn install
```

### 启动开发服务器

```bash
# 使用 npm
npm run dev

# 或使用 yarn
yarn dev
```

应用将在 [http://localhost:3000](http://localhost:3000) 启动。

### 构建生产版本

```bash
# 使用 npm
npm run build

# 或使用 yarn
yarn build
```

### 代码检查

```bash
npm run lint
```

---

## 💻 开发指南

### 代码规范

本项目严格遵循 `.cursorrules` 中定义的开发规范：

- **TypeScript**：所有组件和函数必须使用 TypeScript，Props 使用 Interface 定义
- **SCSS Modules**：所有样式文件使用 `.module.scss` 格式
- **命名规范**：
  - 组件文件：PascalCase（如 `ArticleDetail.tsx`）
  - 样式类名：camelCase（如 `articleTitle`）
  - 工具函数：camelCase（如 `formatDate.ts`）

### 添加新页面

1. 在 `src/pages/` 下创建新文件夹（如 `NewPage/`）
2. 创建 `index.tsx` 和 `NewPage.module.scss`
3. 在 `src/utils/router.tsx` 中添加路由配置
4. 在 `src/constants/routes.ts` 中添加路由常量

**示例：**

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

### 添加新组件

1. 在 `src/components/ui/` 下创建新文件夹（如 `Button/`）
2. 创建 `Button.tsx` 和 `Button.module.scss`
3. 使用类型定义和样式变量

**示例：**

```typescript
// src/components/ui/Button/Button.tsx
import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
```

### 使用样式变量和混合宏

```scss
// src/components/ui/Button/Button.module.scss
@import '@/styles/variables';
@import '@/styles/mixins';

.button {
  @include button-base;
  background-color: $primary-color;
  color: white;
  padding: $spacing-sm $spacing-md;
  border-radius: $border-radius-base;
  
  &:hover {
    background-color: $primary-hover;
  }
}
```

### 路径别名

项目使用 `@/` 作为 `src/` 的别名：

```typescript
// ✅ 推荐
import { Article } from '@/types';
import styles from '@/styles/variables';

// ❌ 不推荐
import { Article } from '../../types';
```

---

## 📊 开发进度

> 📅 **最后更新**：2026-01-29

### 第一阶段：项目基础搭建 ✅

- [x] 安装核心依赖（React Router、Zustand、Axios、Lucide React 等）
- [x] 项目结构规划（创建所有必要目录）
- [x] TypeScript 配置和类型定义
- [x] SCSS 样式系统（变量、混合宏）
- [x] 路由配置（首页、文章列表/详情、项目列表/详情、关于、搜索、404）
- [x] 模块化页面（每页独立文件夹 + module.scss）

**完成度**：100% ✅

### 第二阶段：核心页面开发 ✅

- [x] 布局组件（Header、Footer、Sidebar、RouteWrapper）
- [x] 首页（轮播图、文章列表 + 分页）
- [x] 文章列表页（Mock 联调、分页、点击进入详情）
- [x] 文章详情页（按 id 从 mock 展示）
- [x] 项目列表页（Projects、Mock、分页、ProjectCard）
- [x] 项目详情页（按 id 展示）
- [x] 侧栏仅在文章/项目列表页展示；分类/标签点击为筛选占位
- [x] 关于页、搜索页、404 页

**完成度**：100% ✅

### 第三阶段：功能模块开发 🚧

- [ ] 侧栏分类/标签筛选与主内容区数据联调
- [ ] 数据管理（API 服务替换 Mock）
- [ ] 搜索功能完善
- [ ] 用户交互（点赞、收藏等，可选）

**完成度**：0% 📋

### 第四阶段：UI/UX 优化 🎨

- [ ] 响应式设计优化
- [ ] 暗黑模式切换
- [ ] 动画效果
- [ ] 加载状态和骨架屏

**完成度**：0% 🎨

### 第五阶段：性能优化 ⚡

- [ ] 代码分割
- [ ] 组件懒加载
- [ ] 图片优化
- [ ] SEO 优化

**完成度**：0% ⚡

> 📌 **详细任务清单**：请查看 [TODO.md](./TODO.md)

---

## 📝 更新日志

### [0.2.0] - 2026-01-29

#### ✨ 新增

- 顶部导航四项：首页、文章、项目、关于（移除分类、标签独立页）
- 文章列表页与详情页（Mock 数据、分页、按 id 展示）
- 项目列表页（`pages/Projects`）与项目详情页（Mock、ProjectCard）
- 侧栏仅在文章/项目列表页展示；分类/标签点击为筛选占位（不跳转）
- Logo 枫叶图标（iconfont + icon-fengye.svg 作为站点图标）
- useMediaQuery、usePagination 等 Hooks；`public/mock/projects.json`

#### 🔧 优化

- 整页最小宽度 320px；Footer 三栏等分布局
- 移除分类/标签路由页与相关常量、类型（CategoryParams、TagParams）
- 移除 public 下未使用的 favicon.ico、logo192/512、manifest.json

#### 📚 文档

- 见 CHANGELOG.md 完整版本历史

### [0.1.0] - 2026-01-28

#### ✨ 新增

- 项目初始化和基础搭建
- TypeScript + SCSS Modules 配置
- 完整项目目录结构
- 全局样式系统（变量、混合宏）
- 类型定义系统
- 路由配置和常量管理

#### 🔧 优化

- 模块化目录结构
- 代码规范和文档完善

---

## 📚 相关文档

- [项目架构文档](./ARCHITECTURE.md) - 详细的目录结构与架构说明
- [开发任务清单](./TODO.md) - 详细的开发任务和进度
- [开发规范](./.cursorrules) - Cursor AI 开发规范

---

## 🤝 贡献指南

### 开发流程

1. Fork 本项目
2. 创建功能分支（`git checkout -b feature/AmazingFeature`）
3. 提交更改（`git commit -m 'Add some AmazingFeature'`）
4. 推送到分支（`git push origin feature/AmazingFeature`）
5. 开启 Pull Request

### 代码提交规范

- `feat`: 新功能
- `fix`: 修复 bug
- `docs`: 文档更新
- `style`: 代码格式调整
- `refactor`: 代码重构
- `perf`: 性能优化
- `test`: 测试相关
- `chore`: 构建/工具相关

---

## 📄 许可证

本项目采用 MIT 许可证。

---

## 👤 作者

**个人博客项目**

- GitHub: [@qyue](https://github.com/qyue27223-oss)

---

## 🙏 致谢

- [React](https://reactjs.org/) - UI 框架
- [TypeScript](https://www.typescriptlang.org/) - 类型系统
- [React Router](https://reactrouter.com/) - 路由管理
- [Zustand](https://github.com/pmndrs/zustand) - 状态管理
- [Ant Design](https://ant.design/) - UI 组件库

---

<div align="center">

**⭐ 如果这个项目对你有帮助，请给个 Star！⭐**

</div>
