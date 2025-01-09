import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // vueDevTools(),
  ],
  build:{
    outDir:"docs"
  },
  base:'./',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server: {
    cors: true,
    proxy: {
      '/qName': {
        target: "https://api.mmp.cc/api/",//后端地址
        changeOrigin: true,
        secure: false, // 忽略本地开发中的自签名证书错误
        logLevel: 'debug', // 增加调试日志
        ws: true,
        rewrite: (path) => path.replace(/^\/qName/, '') // 如果后端不需要 `/api` 前缀
      },
      '/qAva':{
        target: "http://q.qlogo.cn/",//后端地址
        changeOrigin: true,
        secure: false, // 忽略本地开发中的自签名证书错误
        logLevel: 'debug', // 增加调试日志
        ws: true,
        rewrite: (path) => path.replace(/^\/qAva/, '') // 如果后端不需要 `/api` 前缀
      }
    }
  },
})
