# 📝 代码更新日志

> 记录项目的所有重要变更和版本更新

本文档遵循 [Keep a Changelog](https://keepachangelog.com/zh-CN/1.0.0/) 规范，版本号遵循 [语义化版本](https://semver.org/lang/zh-CN/) 规范。

## 📋 目录

- [更新日志格式说明](#更新日志格式说明)
- [版本历史](#版本历史)
  - [未发布](#未发布)
  - [0.1.3](#013---2026-01-30)
  - [0.1.2](#012---2026-01-30)
  - [0.1.1](#011---2026-01-29)
  - [0.1.0](#010---2026-01-28)

---

## 📖 更新日志格式说明

### 版本号格式

遵循语义化版本规范：`主版本号.次版本号.修订号`

- **主版本号**：不兼容的 API 修改
- **次版本号**：向下兼容的功能性新增
- **修订号**：向下兼容的问题修正

### 变更类型

- **✨ 新增**：新功能
- **🔧 优化**：性能优化、代码重构
- **🐛 修复**：Bug 修复
- **📚 文档**：文档更新
- **🎨 样式**：样式调整
- **♻️ 重构**：代码重构
- **⚡ 性能**：性能优化
- **🔒 安全**：安全问题修复
- **🗑️ 移除**：功能移除

### 示例格式

```markdown
### [版本号] - YYYY-MM-DD

#### ✨ 新增
- 功能描述

#### 🔧 优化
- 优化描述

#### 🐛 修复
- Bug 修复描述
```

---

## 📅 版本历史

### [0.1.2] - 2026-01-30

#### ✨ 新增

- **导航**：顶部导航四项（首页、文章、项目、关于）；移除分类、标签独立入口
- **文章**：文章列表页（Mock + 分页）、文章详情页（按 id 从 mock 展示）
- **项目**：项目列表页（`pages/Projects`）、项目详情页；Mock 数据 `public/mock/projects.json`；`ProjectCard` 组件
- **侧栏**：仅在「文章」「项目」列表页展示；分类/标签点击为筛选占位（不跳转）；移除「最新文章」模块
- **Logo**：枫叶图标（iconfont + `icon-fengye.svg` 作为站点图标）；整页 favicon 使用 icon-fengye
- **Hooks**：`useMediaQuery`（移动端菜单仅移动端渲染）、`usePagination` 用于文章/项目列表
- **路由**：`PROJECT_DETAIL: '/project/:id'`；`getProjectDetailPath`；移除分类/标签相关路由与页面

#### 🔧 优化

- **布局**：整页最小宽度 320px；Footer 三栏等分布局
- **类型**：新增 `Project`、`ProjectParams`；移除 `CategoryParams`、`TagParams`
- **ArticleCard**：分类/标签改为仅展示（span），不再跳转

#### 🗑️ 移除

- 分类/标签路由页（Categories、CategoryDetail、Tags、TagDetail）及对应路由常量
- `getCategoryDetailPath`、`getTagDetailPath`
- `public/favicon.ico`、`logo192.png`、`logo512.png`、`manifest.json`（未使用）

#### 📚 文档

- 更新 README、ARCHITECTURE、CHANGELOG、DEVELOPMENT、TODO.md 以与当前代码一致

---

### [0.1.1] - 2026-01-29

#### 🐛 修复

- **占位图加载失败**：将 `articles.json`、`carousel.json` 中的 `via.placeholder.com` 替换为 `picsum.photos`，解决国内网络下 `net::ERR_NAME_NOT_RESOLVED` / `net::ERR_CONNECTION_CLOSED` 导致图片无法加载的问题

#### 📚 文档

- 更新 README、CHANGELOG 等文档以与当前实现保持一致

---

### [0.1.3] - 2026-01-30

#### ✨ 新增
- 首页增加「全部项目」区块：2x2 网格展示全部项目，带「查看更多项目」链接至项目列表页
- 项目列表页补全 `Project.module.scss`，统一项目卡片网格样式

#### 🎨 样式
- Footer「关注我」区块在社交链接前增加文案：「如果您有任何问题欢迎随时与我联系。」
- ProjectCard 改为图二风格：标题行含 GitHub / 外链图标，描述 + 药丸状技术标签，圆角深色卡片

---

### [未发布]

#### 计划中
- [ ] 侧栏分类/标签筛选与主内容区数据联调
- [ ] 搜索功能完善
- [ ] Markdown 渲染和代码高亮
- [ ] 暗黑模式切换
- [ ] 响应式与性能优化

---

### [0.1.0] - 2026-01-28

#### ✨ 新增

**项目初始化**
- 初始化 React + TypeScript + Vite 项目
- 配置项目基础结构和目录
- 添加 `.cursorrules` 开发规范文件

**路由系统**
- 配置 React Router v6 路由系统
- 创建基础页面路由：首页 (`/`)、文章列表 (`/articles`)、文章详情 (`/article/:id`)、项目列表 (`/project`)、项目详情 (`/project/:id`)、关于 (`/about`)、搜索 (`/search`)、404 (`/*`)

**类型定义系统**
- 定义全局 TypeScript 类型：
  - `Article` - 文章类型
  - `Category` - 分类类型
  - `Tag` - 标签类型
  - `ApiResponse` - API 响应类型
  - `Pagination` - 分页类型
  - `SearchParams` - 搜索参数类型

**样式系统**
- 配置 SCSS Modules
- 创建全局样式变量文件 (`styles/_variables.scss`)
- 创建 SCSS 混合宏文件 (`styles/_mixins.scss`)
- 配置路径别名 `@/` 指向 `src/`

**组件结构**
- 创建布局组件目录结构：
  - `components/Layout/Header/`
  - `components/Layout/Footer/`
  - `components/Layout/Sidebar/`
  - `components/Layout/RouteWrapper.tsx`
- 创建基础 UI 组件：
  - `components/ui/ArticleCard/`
  - `components/ui/Empty/`
  - `components/ui/Loading/`
  - `components/ui/Pagination/`

**工具函数**
- 创建日期处理工具 (`lib/date.ts`)
- 创建路由工具函数 (`lib/router.ts`)
- 创建自定义 Hooks：
  - `hooks/useMockData.ts` - Mock 数据 Hook
  - `hooks/usePagination.ts` - 分页 Hook

**API 服务**
- 配置 Axios (`services/api.ts`)
- 创建 API 服务基础结构

**状态管理**
- 配置 Zustand 状态管理 (`store/index.ts`)
- 创建 Store 基础结构

**Mock 数据**
- 创建 Mock 数据文件：
  - `public/mock/articles.json`
  - `public/mock/carousel.json`
  - `public/mock/categories.json`
  - `public/mock/tags.json`

**常量配置**
- 创建路由常量 (`constants/routes.ts`)
- 创建导航常量 (`constants/navigation.ts`)

**文档**
- 创建项目 README.md
- 创建项目架构文档 (ARCHITECTURE.md)
- 创建开发指南文档 (DEVELOPMENT.md)
- 创建更新日志文档 (CHANGELOG.md)
- 创建开发任务清单 (TODO.md)

#### 🔧 优化

**项目结构**
- 采用模块化目录结构
- 每个页面组件独立文件夹
- 组件和样式文件分离

**代码规范**
- 统一使用 TypeScript 类型定义
- 统一使用 SCSS Modules 样式
- 统一命名规范（PascalCase、camelCase）

**构建配置**
- 配置 Vite 构建工具
- 配置 TypeScript 编译选项
- 配置路径别名

#### 📚 文档

- 完善项目 README.md
- 添加项目架构说明
- 添加开发指南
- 添加代码更新日志

---

## 🔗 相关链接

- [项目架构文档](./ARCHITECTURE.md)
- [开发指南](./DEVELOPMENT.md)
- [README](./README.md)

---

**维护者**：项目开发团队  
**最后更新**：2026-01-30
