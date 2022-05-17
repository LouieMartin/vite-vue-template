import windiCss from 'vite-plugin-windicss';
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [windiCss(), vue()],
});
