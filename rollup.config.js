import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import json from "@rollup/plugin-json";
import { dts } from "rollup-plugin-dts";
import { createFilter } from "@rollup/pluginutils";
import terser from "@rollup/plugin-terser";
import path from "path";
import typescript from "rollup-plugin-typescript2";
import PeerDepsExternalPlugin from "rollup-plugin-peer-deps-external";

const packageJson = require("./package.json");

const excludeStories = createFilter(["**/*.stories.*"]);

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
        useTsconfigDeclarationDir: true,
      }),
      json(),
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
