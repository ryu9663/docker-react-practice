import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
  },
  plugins: [react()],
  server: {
    host: "0.0.0.0", // 외부에서 접근 가능하도록 설정

    port: 3000,
  },
  build: {
    outDir: "dist", // 빌드 결과 디렉토리
  },
});
