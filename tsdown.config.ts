import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['src/index.ts'],
  dts: true,
  format: ['esm'],
  outDir: 'dist',
  minify: false,
  sourcemap: true,
  clean: true,
})
