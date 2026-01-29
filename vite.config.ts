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
        // 使用 Sass 现代 API，消除 legacy-js-api 弃用警告（Dart Sass 2.0 将移除旧 API）
        api: 'modern',
        // 供 @use '@/styles/...' 解析路径
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
