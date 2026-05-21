import yaml from "js-yaml";
import type { EnvironmentConfig } from "./types";

type RawConfig = Omit<EnvironmentConfig, "source">;

const requiredKeys: Array<keyof RawConfig> = [
  "siteTitle",
  "officeName",
  "pythonVirtualEnvTutorialUrl",
  "annotationToolUrl",
  "hydrideSegmentationRepoUrl",
  "cycleGanRepoUrl",
  "gpuClusterDocsUrl",
  "helpDeskOrContactUrl"
];

async function fetchYaml(path: string): Promise<RawConfig | null> {
  const response = await fetch(path, { cache: "no-store" });
  if (!response.ok) {
    return null;
  }

  const loaded = yaml.load(await response.text());
  if (!loaded || typeof loaded !== "object") {
    throw new Error(`Config ${path} is empty or invalid.`);
  }

  const config = loaded as Partial<RawConfig>;
  const missing = requiredKeys.filter((key) => !config[key]);
  if (missing.length > 0) {
    throw new Error(`Config ${path} is missing: ${missing.join(", ")}`);
  }

  return config as RawConfig;
}

export async function loadEnvironmentConfig(): Promise<EnvironmentConfig> {
  const base = import.meta.env.BASE_URL;
  const realConfig = await fetchYaml(`${base}config/environment.real.yaml`).catch(() => null);
  if (realConfig) {
    return { ...realConfig, source: "real" };
  }

  const exampleConfig = await fetchYaml(`${base}config/environment.example.yaml`);
  if (!exampleConfig) {
    throw new Error("No runtime config found. Expected config/environment.example.yaml.");
  }
  return { ...exampleConfig, source: "example" };
}

