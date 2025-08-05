import { defineConfig } from 'vite'

export default defineConfig({
  root: 'src',
  base: '/',
  publicDir: '../public',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: 'src/index.html',
        contact: 'src/contact/index.html',
        gallery: 'src/gallery/index.html'
      }
    }
  },
  server: {
    port: 3000,
    open: true
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "src/main/variables.scss"; @import "src/main/common.scss";`
      }
    }
  }
}) 