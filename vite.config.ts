import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(({ mode }) => ({
  plugins: mode === "development" ? [react(), tsconfigPaths()] : [],
  esbuild: {
    jsxInject: `import * as React from 'react'`,
  },
}));
