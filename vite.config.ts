import react from "@vitejs/plugin-react";
import fs from "node:fs";
import path from "node:path";
import type { Plugin } from "vite";
import { defineConfig } from "vite";

function runtimeConfigPlugin(): Plugin {
  const root = process.cwd();
  const configDir = path.join(root, "config");

  return {
    name: "runtime-config",
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (!req.url?.startsWith("/config/")) {
          next();
          return;
        }

        const fileName = decodeURIComponent(req.url.replace("/config/", "").split("?")[0]);
        const requested = path.resolve(configDir, fileName);
        if (!requested.startsWith(configDir)) {
          res.statusCode = 403;
          res.end("Forbidden");
          return;
        }

        if (!fs.existsSync(requested)) {
          res.statusCode = 404;
          res.end("Not found");
          return;
        }

        res.setHeader("Content-Type", "text/yaml; charset=utf-8");
        fs.createReadStream(requested).pipe(res);
      });
    },
    closeBundle() {
      const outDir = path.join(root, "dist", "config");
      if (!fs.existsSync(configDir)) {
        return;
      }
      fs.mkdirSync(outDir, { recursive: true });
      for (const entry of fs.readdirSync(configDir)) {
        if (entry.endsWith(".yaml") || entry.endsWith(".yml")) {
          fs.copyFileSync(path.join(configDir, entry), path.join(outDir, entry));
        }
      }
    }
  };
}

export default defineConfig({
  plugins: [react(), runtimeConfigPlugin()],
  base: "./"
});

