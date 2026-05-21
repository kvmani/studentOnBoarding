# Student Onboarding Platform

Offline-first onboarding app for interns and beginner students working with VS Code, Python, microstructural image annotation, CycleGAN/pix2pix, segmentation, and GPU-cluster workflows.

## Quick Start

```powershell
npm install
npm run dev
```

Build static files:

```powershell
npm run build
```

The production output is written to `dist/` and can be hosted from a desktop intranet server.

## Runtime Configuration

The app loads internal links from YAML at runtime:

1. `config/environment.real.yaml`
2. `config/environment.example.yaml`

`environment.real.yaml` is intentionally ignored by Git. Create it on the deployment machine when the real intranet URLs are known.

Required keys:

```yaml
siteTitle: Student Onboarding Hub
pythonVirtualEnvTutorialUrl: http://intranet.example.local/python-venv
annotationToolUrl: http://intranet.example.local/annotation
hydrideSegmentationRepoUrl: http://intranet.example.local/repos/hydride-segmentation
cycleGanRepoUrl: http://intranet.example.local/repos/microi2i
gpuClusterDocsUrl: http://intranet.example.local/hpc
helpDeskOrContactUrl: mailto:mentor@example.local
```

During `npm run dev`, Vite serves files from `config/`. During `npm run build`, the same folder is copied into `dist/config/`.

## Project Structure

```text
config/                 runtime YAML config files
src/
  data/                 structured lesson content
  components/           UI and original SVG diagrams
  App.tsx               app shell, search, navigation
  config.ts             YAML config fallback loader
```

## Current Lesson Set

- Welcome to the lab workflow
- VS Code basics
- Python basics
- Python virtual environments on Windows
- Microstructure annotation workflow
- Machine-learning basics
- pix2pix and CycleGAN for microscopy
- Hydride segmentation dataset workflow
- GPU cluster workflow

