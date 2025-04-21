import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import path from 'path';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import vue from '@vitejs/plugin-vue';

// https://vite.dev/config/
export default defineConfig({
	plugins: [
        vue(),
        createSvgIconsPlugin({
            iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
            symbolId: 'icon-[name]',
        }),
    ],
	resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
});
