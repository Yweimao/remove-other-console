import babel from "rollup-plugin-babel";
import { uglify } from "rollup-plugin-uglify";
import resolve from "rollup-plugin-node-resolve";
const paths = {
  input: {
    root: "src/index.js",
  },
  output: {
    root: "dist/",
  },
};
const fileName = `index.js`;

export default {
  input: `${paths.input.root}`,
  output: {
    file: `${paths.output.root}${fileName}`,
    format: "esm",
    name: "remove-other-console",
  },
  plugins: [
    resolve(),
    babel({
      exclude: "node_modules/**",
      runtimeHelpers: true,
    }),
    uglify(),
  ],
};
