export type ConfigKey =
  | "pythonVirtualEnvTutorialUrl"
  | "annotationToolUrl"
  | "hydrideSegmentationRepoUrl"
  | "cycleGanRepoUrl"
  | "gpuClusterDocsUrl"
  | "helpDeskOrContactUrl";

export interface EnvironmentConfig {
  siteTitle: string;
  officeName: string;
  pythonVirtualEnvTutorialUrl: string;
  annotationToolUrl: string;
  hydrideSegmentationRepoUrl: string;
  cycleGanRepoUrl: string;
  gpuClusterDocsUrl: string;
  helpDeskOrContactUrl: string;
  source: "real" | "example";
}

export interface LessonLink {
  label: string;
  configKey: ConfigKey;
}

export type LessonBlock =
  | { type: "paragraph"; text: string }
  | { type: "bullets"; items: string[] }
  | { type: "steps"; items: string[] }
  | { type: "code"; language: string; code: string }
  | { type: "callout"; title: string; text: string }
  | { type: "equation"; text: string }
  | { type: "image"; src: string; alt: string; caption: string; size?: "normal" | "wide" | "compact" };

export interface LessonSection {
  heading: string;
  blocks: LessonBlock[];
}

export type VisualKind =
  | "network"
  | "vscode"
  | "python"
  | "notebook"
  | "venv"
  | "annotation"
  | "ml"
  | "gan"
  | "segmentation"
  | "hpc";

export interface Lesson {
  id: string;
  title: string;
  summary: string;
  category: string;
  tags: string[];
  durationMinutes: number;
  level: "Beginner" | "Guided" | "Workflow";
  prerequisites: string[];
  visual: VisualKind;
  sections: LessonSection[];
  links: LessonLink[];
  nextLessonIds: string[];
}
