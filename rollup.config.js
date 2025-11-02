import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import json from "@rollup/plugin-json";
import { dts } from "rollup-plugin-dts";
import { createFilter } from "@rollup/pluginutils";
import terser from "@rollup/plugin-terser";
import typescript from "rollup-plugin-typescript2";
import PeerDepsExternalPlugin from "rollup-plugin-peer-deps-external";

const packageJson = require("./package.json");

const excludeStories = createFilter(["**/*.stories.*"]);

const replaceSourceExtensions = () => ({
  name: "replace-source-extensions",
  renderChunk(code, chunk, options) {
    if (chunk.map) {
      chunk.map.sources = chunk.map.sources.map((source) =>
        source.replace(/\.tsx$/, ".ts")
      );
    }

    return { code, map: chunk.map };
  },
});

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      PeerDepsExternalPlugin(),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
        useTsconfigDeclarationDir: true,
      }),
      json(),
      replaceSourceExtensions(),
      terser(),
      {
        name: "exclude-stories",
        load(id) {
          if (typeof id === "string" && excludeStories(id)) {
            return null;
          }
          return undefined;
        },
      },
    ],
    external: [
      ...Object.keys(packageJson.peerDependencies || {}),
      ...Object.keys(packageJson.dependencies || {}),
      "react",
      "@types/react",
    ],
  },
  {
    input: "src/index.ts",
    output: [{ file: "dist/types.d.ts", format: "es" }],
    plugins: [dts()],
  },
];
