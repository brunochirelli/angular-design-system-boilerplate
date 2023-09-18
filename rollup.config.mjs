import scss from "rollup-plugin-scss";

export default {
  input: "main.js",
  output: { file: "dist/output.js", format: "esm" },
  plugins: [
    scss({
      fileName: "ui/lib/styles/main.css",
      outputStyle: "compressed",
    }),
  ],
};
