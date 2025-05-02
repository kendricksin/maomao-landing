import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import fs from 'fs'

// Read the custom.less file to make variables available globally
const customLess = fs.readFileSync(
  path.resolve(__dirname, './src/styles/custom.less'),
  'utf-8'
)

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true, // Required for antd
        modifyVars: {
          '@primary-color': '#1e5aff', // MaoMao primary color
          '@text-color': '#333333', // Text color
        },
        // Include custom.less content in every less file
        additionalData: customLess,
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    extensions: ['.mjs', '.js', '.jsx', '.json', '.less'],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
})