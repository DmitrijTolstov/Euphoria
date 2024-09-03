import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve:{
    alias:{
    '@': path.resolve(__dirname, './src')
  },
  },
    css: {
    preprocessorOptions: {
      scss: {
        additionalData: 
          `@import "@/assets/styles/mixins.scss";
          @import "@/assets/styles/vars.scss";`
        
      }
    }
  }
  
})
