import { defineConfig } from "vite";
import { speedyReactiveAstPlugin } from "vite-plugin-speedy-jsx";
import { speedyJsxAstTransformPlugin } from "vite-plugin-speedy-jsx";

export default defineConfig({
  plugins: [
    speedyReactiveAstPlugin({
      features: {
        labels: {
          ref: true,
          watchEffect: true,
        },
        comments: {
          computed: true,
        },
        functions: {
          computed: true,
          ref: true,
        },
      },
      scopeComponent: true,
    }),
    speedyJsxAstTransformPlugin(),
  ],
});
