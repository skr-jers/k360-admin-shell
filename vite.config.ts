import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  plugins: [
    react(),
    federation({
      name: 'kerno360-admin-host-app',
      remotes: {
        "superset-management-app": "http://localhost:5173/assets/remoteEntry.js",
      },
      shared: ['react', 'react-dom'],
  })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3609,
  },
  preview: {
    port: 3609,
  }
})
