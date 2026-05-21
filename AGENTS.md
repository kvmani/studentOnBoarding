# Student Onboarding Platform - Agent Context

This repository is an offline-first student onboarding platform for interns and beginners joining a microstructure image-processing and machine-learning workflow.

## Mission

Help students become productive from day one without constant hand-holding. Assume many students have zero coding knowledge and may be seeing VS Code, Python environments, terminal commands, annotation workflows, machine-learning datasets, and GPU-cluster execution for the first time.

The platform must be:
- easy to search and navigate
- usable on a desktop-hosted office intranet
- functional in an air-gapped environment
- visually polished, but low-dependency and maintainable
- tuned to Windows + VS Code + Python scripting
- grounded in local workflows for microstructural image annotation, pix2pix/CycleGAN, hydride segmentation, and GPU/HPC training

## Technical Constraints

- Static React app only unless a future requirement explicitly needs a backend.
- No CDN dependencies, remote fonts, analytics, hosted APIs, or runtime internet requirements.
- Build output must be deployable as static files on a local desktop or intranet server.
- Keep dependencies modest and common. Avoid framework churn.
- Store all tutorial content, diagrams, and images locally.
- Use original diagrams or generated assets by default to avoid licensing ambiguity.

## Runtime Configuration

Internal links must be configured without changing code:
- Commit `config/environment.example.yaml` with safe placeholder values.
- Do not commit `config/environment.real.yaml`.
- At runtime, try `environment.real.yaml`; if missing, use `environment.example.yaml`.
- Any new internal URL must be added to the config schema and documented in the README.

## Content Expectations

Lessons should fit a 10-15 minute offline study session. Keep writing direct and beginner-friendly, but technically accurate. Prefer short sections, annotated diagrams, checklists, and concrete examples over long textbook prose.

Core audience workflows:
- Open a project folder in VS Code on Windows.
- Use the integrated terminal.
- Create and activate a Python virtual environment.
- Understand intranet, internet, and air-gapped systems.
- Prepare and annotate microstructural images.
- Understand training examples, labels, masks, train/val/test splits, checkpoints, metrics, and logs.
- Run or understand pix2pix/CycleGAN image-to-image translation workflows.
- Run or understand segmentation workflows, especially hydride segmentation.
- Prepare jobs for a GPU cluster and inspect results.

## Local Workflow Sources

Ground technical explanations in these local repositories when expanding content:
- `C:\Users\kvman\HydrideSegmentation`
- `C:\Users\kvman\PycharmProjects\pytorch-CycleGAN-and-pix2pix`
- `C:\Users\kvman\PycharmProjects\powderSegementation`

Important existing dataset contract:

```text
<dataset_root>/
  train/
    images/
    masks/
  val/
    images/
    masks/
  test/
    images/
    masks/
```

Image and mask filenames should match inside each split.

## UI Expectations

- The first screen is the usable onboarding dashboard, not a marketing page.
- Use a restrained modern interface that feels like an internal scientific tool.
- Keep cards compact and scannable.
- Use icons for navigation/actions where helpful.
- Ensure text does not overflow on mobile or desktop.
- Verify with a browser after significant frontend changes.

## Quality Bar

For app changes:
- Run `npm run build`.
- Check that config fallback works without `config/environment.real.yaml`.
- Verify search, lesson navigation, and local asset rendering.
- Avoid breaking static deployment with absolute server assumptions.

