// vite.config.ts
import path from 'path';

import { defineConfig, Alias } from 'vite';

import react from '@vitejs/plugin-react';
import tsconfigPaths from "vite-tsconfig-paths";

function readAliasFromTsConfig(): Alias[] {
  const pathReplaceRegex = new RegExp(/\/\*$/, '');
  return Object.entries(tsconfig.compilerOptions.paths).reduce(
    (aliases, [fromPaths, toPaths]) => {
      const find = fromPaths.replace(pathReplaceRegex, '');
      const toPath = toPaths[0].replace(pathReplaceRegex, '');
      const replacement = path.resolve(__dirname, toPath);
      aliases.push({ find, replacement });
      return aliases;
    },
    [] as Alias[],
  );
}


export default defineConfig(({ mode }) => ({
  plugins: [
    tsconfigPaths(),
    react(),
    ...(mode !== 'test') ?
      [
        eslintPlugin()
      ] : []
  ],
  // resolve: {
  //   alias: readAliasFromTsConfig(),
  // },
}));
