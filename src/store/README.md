# Store 目录

存放 Zustand 状态管理相关的 store 文件。

## 使用示例

```typescript
// store/articleStore.ts
import { create } from 'zustand';

export const useArticleStore = create((set) => ({
  articles: [],
  setArticles: (articles) => set({ articles }),
}));
```
