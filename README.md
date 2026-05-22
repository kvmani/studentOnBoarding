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

Preview the production build locally:

```powershell
npm run preview -- --host 127.0.0.1 --port 4173
```

Student-facing command snippets in the app include copy buttons. When adding lessons, keep commands short enough to inspect before copying, and prefer explicit paths over hidden assumptions.

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
public/tutorial-assets/ local screenshots, examples, and infographics
src/
  data/                 structured lesson content
  components/           UI and original SVG diagrams
  App.tsx               app shell, search, navigation
  config.ts             YAML config fallback loader
```

## Content and Asset Guidelines

- Keep lessons self-contained for offline use.
- Prefer annotated screenshots when explaining UI, terminals, or GUIs.
- Store original screenshots and annotated siblings together under `public/tutorial-assets/screenshots/`.
- Use local SVG/PNG assets only; do not depend on CDN images or remote fonts.
- When adding an internal URL, add it to `config/environment.example.yaml`, the config schema in `src/types.ts`, and this README.
- Run `npm run build` after content or UI changes.

## Current Lesson Set

- Welcome to the lab workflow
- VS Code basics
- Terminal basics: PowerShell and Linux
- MobaXterm SSH/GPU-server workflow
- Python basics
- Python virtual environments on Windows
- Jupyter notebooks in VS Code
- Microstructure annotation workflow
- Deep-learning basics for image analysis
- pix2pix and CycleGAN image translation workflows
- Hydride segmentation science, training, and inference
- GPU cluster workflow

Representative screenshots and annotated screenshots are generated assets stored locally in `public/tutorial-assets/screenshots/`.
Microscopy examples are copied from the local hydride, powder, and image-to-image workflow repositories so the deployed site remains self-contained.

## Release Checklist

```powershell
npm run build
```

Before copying `dist/` to an intranet host:

- Confirm `config/environment.real.yaml` is present only on the deployment machine, not committed.
- Open the built app with `npm run preview` and check search, lesson navigation, copy buttons, and local image rendering.
- Search for common terms such as `venv`, `hydride`, `pix2pix`, `QA`, and `HPC`.
- Confirm annotated screenshots are readable on the target display size.
