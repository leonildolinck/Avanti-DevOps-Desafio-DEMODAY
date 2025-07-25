import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
    coverage: {
      reporter: ['text', 'lcov'],
      exclude: [
        'dist/',
        'node_modules/',
        'src/setupTests.js',
        'eslint.config.js',
        'postcss.config.js',
        'tailwind.config.js',
        'vite.config.js',
        'src/assets/**',
        'src/main.jsx',
      ],
    },
  },
})
