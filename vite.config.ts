// @ts-nocheck
import { defineConfig } from 'vite';
import mkcert from 'vite-plugin-mkcert';

import { resolve } from 'path';

import react from '@vitejs/plugin-react';

const shouldAnalyze = process.env.ANALYZE ?? false;
const isHttps = process.env.HTTPS ?? false;

// https://vitejs.dev/config/
export default defineConfig((mode) => {
	return {
		plugins: [
			react({
				// Removes React Devtools in production build
				removeDevtoolsInProd: true,

				// Exclude storybook stories
				exclude: /\.stories\.(t|j)sx?$/,
			}),
			mkcert({
				source: 'coding',
			}),
		],
		/**
		 * defining aliases
		 */
		resolve: {
			alias: [{ find: '~', replacement: resolve(__dirname, 'src') }],
		},
		envDir: resolve(__dirname, 'src', 'env'),
		envPrefix: 'GB_',
		server: {
			https: !!isHttps,
			proxy: {
				/**
				 * When we use proxy API requests, we can get data from an external website that throws an error by default (if we don't use a proxy)
				 * https://localhost:3000/api/**  ->  https://jsonplaceholder.typicode.com/**
				 *
				 * @example
				 * 	https://localhost:3000/api/todos/1  ->  https://jsonplaceholder.typicode.com/todos/1
				 **/
				'/api/': {
					target: 'https://jsonplaceholder.typicode.com/',
					changeOrigin: true,
					rewrite: (path) => path.replace(/^\/api/, ''),
				},
			},
		},
	};
});
