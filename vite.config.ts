import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 允许在 SCSS 中使用 @import '@/styles/...'
        // 注意：不在 additionalData 中自动导入，让每个文件显式导入以保持清晰
        includePaths: [path.resolve(__dirname, './src')],
      },
    },
    modules: {
      // CSS Modules 类名生成规则
      generateScopedName: '[name]__[local]___[hash:base64:5]',
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
});
