import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), { enableJsx: true }],
  build: {
    chunkSizeWarningLimit: 700, // adjust as needed (value is in kB)
  },
});
