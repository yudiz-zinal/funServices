import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact(),tsconfigPaths()],
  server: {
    port: 3000,
    open: '/',
},   
 // @ts-ignore
test: {
    environment: 'happy-dom',
    setupFiles: ['./__test__/test-setup.ts'],
    includeSource: ['src/**/*.{ts,tsx}'],
    coverage: {
        reporter: ['text-summary', 'text', 'html'],
    },
    mockReset: true,
    restoreMocks: true,
    globals: true,
},
})
