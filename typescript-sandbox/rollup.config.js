import path from "node:path";
import url from "node:url";
import typescript from "@rollup/plugin-typescript";

const rootDirectory = path.dirname(url.fileURLToPath(import.meta.url));

const taskDirectory = path.resolve(rootDirectory, "src", "task");

export default (args) => {
  const entries = [
    {
      input: path.resolve(taskDirectory, "task1/index.ts"),
      outputFile: path.resolve(rootDirectory, "dist/task1.js"),
    },
  ];

  return entries.map((en) => ({
    input: en.input,
    output: {
      file: en.outputFile,
      format: "es",
    },
    plugins: [typescript()],
  }));
};
