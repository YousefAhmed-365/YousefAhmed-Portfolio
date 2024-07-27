import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer';
import purgecss from 'vite-plugin-purgecss';

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        minify: 'terser',
    },
    plugins: [  react(),
                visualizer({ open: true }),
                purgecss({
                    content: [
                      './index.html',
                      './src/**/*.{js,ts,jsx,tsx,html}',
                    ],
                    safelist: ['safelist-class'], // Add classes that should not be purged
                  })],
    base: '/YousefAhmed-Portfolio/'
})
