import { defineConfig } from 'vite'
import ReactSWC from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig({
  plugins: [ReactSWC()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      { find: '@apis', replacement: path.resolve(__dirname, 'src/apis') },
      { find: '@components', replacement: path.resolve(__dirname, 'src/components') },
      { find: '@hooks', replacement: path.resolve(__dirname, 'src/hooks') },
      { find: '@pages', replacement: path.resolve(__dirname, 'src/pages') },
      { find: '@routers', replacement: path.resolve(__dirname, 'src/routers') },
      { find: '@stores', replacement: path.resolve(__dirname, 'src/stores') },
      { find: '@styles', replacement: path.resolve(__dirname, 'src/styles') },
      { find: '@utils', replacement: path.resolve(__dirname, 'src/utils') },
    ]
  }
})