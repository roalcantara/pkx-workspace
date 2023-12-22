/// <reference types='vitest' />
import { VitePWA } from 'vite-plugin-pwa'
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/apps/app',

  server: {
    port: 4200,
    host: 'localhost'
  },

  preview: {
    port: 4300,
    host: 'localhost'
  },

  plugins: [
    react(),
    nxViteTsPaths(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'inline',
      devOptions: {
        enabled: true
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      },
      includeAssets: [
        'favicon.ico',
        'apple-touch-icon-180x180.png',
        'maskable-icon-512x512.png'
      ],
      manifest: {
        name: 'My Awesome App',
        short_name: 'pkx',
        description: 'A simple react app',
        theme_color: '#E05E2E',
        background_color: '#ffffff',
        icons: [
          {
            src: 'pwa-64x64.png',
            sizes: '64x64',
            type: 'image/png'
          },
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'maskable-icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          }
        ]
      }
    })
  ],

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },

  build: {
    outDir: '../../dist/apps/app',
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true
    }
  },

  test: {
    globals: true,
    cache: {
      dir: '../../node_modules/.vitest'
    },
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],

    reporters: ['default'],
    coverage: {
      reportsDirectory: '../../coverage/apps/app',
      provider: 'v8'
    }
  }
})
