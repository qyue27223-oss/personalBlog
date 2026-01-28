# 更新日志

本文档记录项目的所有重要变更。

格式基于 [Keep a Changelog](https://keepachangelog.com/zh-CN/1.0.0/)，
并且本项目遵循 [语义化版本](https://semver.org/lang/zh-CN/)。

## [未发布]

### 计划中
- 布局组件开发
- 文章列表和详情页
- 分类和标签系统
- 搜索功能
- 暗黑模式切换

---

## [0.1.0] - 2026-01-28

### ✨ 新增

#### 项目基础
- 项目初始化和配置
- TypeScript 5.7.2 配置
- SCSS Modules 样式系统
- React Router v6 路由配置

#### 目录结构
- 创建完整的模块化目录结构
- `components/ui/` - UI 组件目录
- `pages/` - 页面组件（10个页面模块）
- `hooks/` - 自定义 Hooks
- `lib/` - 工具函数库
- `utils/` - 通用工具函数
- `types/` - TypeScript 类型定义
- `constants/` - 常量配置
- `services/` - API 服务
- `store/` - 状态管理
- `styles/` - 全局样式系统

#### 页面组件
- Home - 首页
- Articles - 文章列表
- ArticleDetail - 文章详情
- Categories - 分类列表
- CategoryDetail - 分类详情
- Tags - 标签列表
- TagDetail - 标签详情
- About - 关于页面
- Search - 搜索页面
- NotFound - 404 页面

#### 样式系统
- `_variables.scss` - 全局变量（颜色、间距、字体、断点等）
- `_mixins.scss` - 混合宏（响应式、Flexbox、文本处理等）
- `index.scss` - 全局样式入口

#### 类型定义
- Article - 文章类型
- Category - 分类类型
- Tag - 标签类型
- 路由参数类型
- API 响应类型
- 分页和搜索类型

#### 工具配置
- Axios API 配置
- 路由配置和常量
- TypeScript 类型声明文件

### 🔧 优化

- 模块化目录结构重构
- 代码规范和文档完善
- 删除临时文件和脚本

### 📚 文档

- README.md - 完整的项目说明文档
- PROJECT_STRUCTURE.md - 项目结构文档
- STRUCTURE_VALIDATION.md - 结构验证报告
- CHANGELOG.md - 更新日志
- 各目录的 README.md 说明文档

### 🗑️ 删除

- 所有旧的 JavaScript 文件（已转换为 TypeScript）
- 所有旧的 CSS 文件（已转换为 SCSS Modules）
- 临时清理脚本

---

## 版本说明

- **主版本号**：不兼容的 API 修改
- **次版本号**：向下兼容的功能性新增
- **修订号**：向下兼容的问题修正

---

## 更新说明

本文档会随着项目开发实时更新，记录每个版本的变更内容。

每次发布新版本时，请：
1. 更新版本号
2. 添加变更记录
3. 更新日期
4. 更新 README.md 中的版本信息
