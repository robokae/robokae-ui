import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import json from "@rollup/plugin-json";
import { dts } from "rollup-plugin-dts";
import PeerDepsExternalPlugin from "rollup-plugin-peer-deps-external";
import { createFilter } from "@rollup/pluginutils";
import terser from "@rollup/plugin-terser";
import path from "path";

const packageJson = require("./package.json");

const excludeStories = createFilter(["**/*.stories.*"], { resolve: false });

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
        sourcemapPathTransform: (sourcePath) =>
          path.relative(process.cwd(), sourcePath).replace(/\\/g, "/"),
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
        sourcemapPathTransform: (sourcePath) =>
          path.relative(process.cwd(), sourcePath).replace(/\\/, "/"),
      },
    ],
    plugins: [
      PeerDepsExternalPlugin(),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
        compilerOptions: {
          sourceMap: true,
          inlineSources: false,
        },
      }),
      json(),
      terser(),
      {
        name: "exclude-stories",
        load(id) {
          if (typeof id === "string" && excludeStories(id)) {
            return null;
          }
          return null;
        },
      },
    ],
    external: [
      ...Object.keys(packageJson.peerDependencies || {}),
      ...Object.keys(packageJson.dependencies || {}),
    ],
  },
  {
    input: "src/index.ts",
    output: [{ file: "dist/types.d.ts", format: "es" }],
    plugins: [dts()],
  },
];
