import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react-swc";
import { visualizer } from "rollup-plugin-visualizer";
import viteImagemin from "vite-plugin-imagemin";
import postcssPresetEnv from "postcss-preset-env";
import cssnano from "cssnano";

export default defineConfig({
    plugins: [
        react(),
        visualizer({
            open: true,
            filename: "stats.html",
            gzipSize: true,
            brotliSize: true,
            template: "treemap",
            // template: "sunburst",
        }),
        viteImagemin({
            optipng: {
                optimizationLevel: 7,
            },
        }),
        postcssPresetEnv({
            stage: 3, // 启用稳定阶段的 CSS 特性
            features: { "nesting-rules": true }, // 支持嵌套语法
        }),
        cssnano({
            preset: [
                "default",
                {
                    discardComments: {
                        removeAll: true, //删除所有注释
                    },
                    zindex: false,
                },
            ],
        }),
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    server: {
        proxy: {
            "/api": {
                target: "http://localhost:8888",
                changeOrigin: true,
            },
        },
    },
    build: {
        rollupOptions: {
            external: ["three", "three/examples/jsm/**/*"],
        },
    },
});
