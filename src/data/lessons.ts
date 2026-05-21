import type { Lesson } from "../types";

export const lessons: Lesson[] = [
  {
    id: "welcome-lab-workflow",
    title: "Welcome to the Lab Workflow",
    summary: "Understand the office intranet, air-gapped work habits, and how to ask for help without losing time.",
    category: "Start Here",
    tags: ["intranet", "air-gap", "workflow", "help"],
    durationMinutes: 10,
    level: "Beginner",
    prerequisites: ["None"],
    visual: "network",
    sections: [
      {
        heading: "The working idea",
        blocks: [
          {
            type: "paragraph",
            text: "Most work here happens inside a controlled office network. Some machines may not have direct internet access, so students should learn to rely on local documentation, internal links, prepared installers, and mentor-approved transfer steps."
          },
          {
            type: "bullets",
            items: [
              "Internet means the public network outside the lab.",
              "Intranet means the local office network where internal tools and tutorials are hosted.",
              "Air-gapped means a machine or workflow is deliberately separated from the internet.",
              "Do not randomly download packages, models, or scripts on production or cluster machines."
            ]
          }
        ]
      },
      {
        heading: "What to do when blocked",
        blocks: [
          {
            type: "steps",
            items: [
              "Read the relevant lesson and copy the exact error message.",
              "Check whether you are on the correct machine, folder, and Python environment.",
              "Record what command you ran and what output you received.",
              "Ask for help with the command, folder path, screenshot, and expected result."
            ]
          },
          {
            type: "callout",
            title: "Good help request",
            text: "I opened the hydride project in VS Code, activated .venv, ran dataset QA, and got this exact error. The dataset path is D:\\datasets\\hydride_v1."
          }
        ]
      }
    ],
    links: [{ label: "Help or mentor contact", configKey: "helpDeskOrContactUrl" }],
    nextLessonIds: ["vscode-basics"]
  },
  {
    id: "vscode-basics",
    title: "VS Code Basics: Navigate, Search, Run",
    summary: "Learn the editor layout, Explorer, search tools, terminal, plugins, Python files, and the habits that prevent confusion.",
    category: "Tools",
    tags: ["VS Code", "Windows", "Linux", "terminal", "search", "extensions"],
    durationMinutes: 15,
    level: "Beginner",
    prerequisites: ["A project folder on your machine"],
    visual: "vscode",
    sections: [
      {
        heading: "The screen you will use daily",
        blocks: [
          {
            type: "image",
            src: "tutorial-assets/screenshots/vscode-hydride-qa.png",
            alt: "Representative VS Code screenshot showing a hydride segmentation project, Python file, Explorer, and activated PowerShell terminal.",
            caption: "This representative screenshot shows the daily pattern: project folder open, Python file in the editor, and an activated PowerShell terminal running dataset checks."
          },
          {
            type: "bullets",
            items: [
              "Explorer: shows folders and files in the current project.",
              "Editor: where you read and edit Python, YAML, Markdown, and text files.",
              "Terminal: where commands are run from the current folder.",
              "Status bar: shows interpreter, branch, errors, and environment clues.",
              "Command Palette: searchable command box opened with Ctrl+Shift+P."
            ]
          }
        ]
      },
      {
        heading: "Search before you ask",
        blocks: [
          {
            type: "image",
            src: "tutorial-assets/vscode-search-navigation.svg",
            alt: "VS Code search and navigation shortcuts showing Ctrl+P, Ctrl+Shift+F and Ctrl+Shift+P.",
            caption: "Use Quick Open for files, global search for words/errors, and the Command Palette for actions."
          },
          {
            type: "bullets",
            items: [
              "Use Ctrl+P to open a file when you know part of its name.",
              "Use Ctrl+Shift+F to search the whole project for a command, filename, variable, or error text.",
              "Use Ctrl+Shift+P to find commands such as Python interpreter selection or notebook actions.",
              "Use the Explorer when you need to understand the folder structure slowly.",
              "When asking for help, mention the file path and line number if possible."
            ]
          }
        ]
      },
      {
        heading: "Open the right folder",
        blocks: [
          {
            type: "paragraph",
            text: "Always open the repository folder itself, not a random subfolder. If the terminal starts in the wrong folder, commands may fail even when the code is correct."
          },
          {
            type: "code",
            language: "powershell",
            code: "cd C:\\Users\\kvman\\PycharmProjects\\studentOnBoarding\ncode ."
          }
        ]
      },
      {
        heading: "Run commands in Windows and Linux terminals",
        blocks: [
          {
            type: "image",
            src: "tutorial-assets/vscode-terminal-os.svg",
            alt: "Side by side VS Code terminal examples for Windows PowerShell and Linux bash.",
            caption: "The terminal inside VS Code can be PowerShell on Windows or bash on Linux/HPC. The command ideas are similar, but activation and path syntax differ."
          },
          {
            type: "code",
            language: "powershell",
            code: "python -m venv .venv\n.\\.venv\\Scripts\\Activate.ps1\npython scripts\\check_data.py"
          },
          {
            type: "code",
            language: "bash",
            code: "python3 -m venv .venv\nsource .venv/bin/activate\npython scripts/check_data.py"
          },
          {
            type: "callout",
            title: "Check the prompt first",
            text: "Before running a command, confirm the current folder, active environment, and shell type. Many beginner errors are caused by running a good command in the wrong place."
          }
        ]
      },
      {
        heading: "Run a Python file safely",
        blocks: [
          {
            type: "steps",
            items: [
              "Open the repository folder, not an unrelated parent folder.",
              "Open Terminal in VS Code.",
              "Activate the project virtual environment.",
              "Run Python with an explicit file path.",
              "Read the first real error before changing code or reinstalling packages."
            ]
          }
        ]
      }
    ],
    links: [{ label: "Help or mentor contact", configKey: "helpDeskOrContactUrl" }],
    nextLessonIds: ["terminal-shell-basics", "python-basics", "python-venv-windows", "mobaxterm-ssh-hpc", "jupyter-notebooks-vscode"]
  },
  {
    id: "terminal-shell-basics",
    title: "Terminal Basics: PowerShell and Linux",
    summary: "Understand what a shell is, how commands are shaped, and why Windows and Linux commands look different.",
    category: "Command Line",
    tags: ["PowerShell", "bash", "terminal", "paths", "execution policy"],
    durationMinutes: 15,
    level: "Beginner",
    prerequisites: ["VS Code basics"],
    visual: "vscode",
    sections: [
      {
        heading: "What the terminal is",
        blocks: [
          {
            type: "paragraph",
            text: "A terminal is a text control panel for the computer. You type a command, the shell interprets it, and the program prints output. In this lab you will usually use Windows PowerShell on your desktop and Linux bash after connecting to a server or GPU cluster."
          },
          {
            type: "image",
            src: "tutorial-assets/infographics/shell-command-map.svg",
            alt: "Command map comparing Windows PowerShell and Linux bash commands.",
            caption: "PowerShell and bash solve the same basic tasks, but path separators, activation commands, permissions, and script rules differ."
          }
        ]
      },
      {
        heading: "Read the prompt before typing",
        blocks: [
          {
            type: "bullets",
            items: [
              "The folder shown in the prompt is the folder where relative paths start.",
              "A prefix such as (.venv) means the Python environment is active.",
              "PowerShell paths usually look like C:\\Users\\Student\\project.",
              "Linux paths usually look like /home/student/project or /scratch/student/run_01.",
              "Commands are case-sensitive more often on Linux than on Windows."
            ]
          },
          {
            type: "code",
            language: "powershell",
            code: "pwd\nGet-ChildItem\ncd C:\\Users\\Student\\projects\\HydrideSegmentation"
          },
          {
            type: "code",
            language: "bash",
            code: "pwd\nls -lh\ncd /scratch/student/hydride_runs"
          }
        ]
      },
      {
        heading: "PowerShell execution policy",
        blocks: [
          {
            type: "paragraph",
            text: "PowerShell may block .ps1 scripts, including virtual-environment activation, until the user-level execution policy allows local scripts. Use the lab-approved policy once on your Windows account, then activate the environment normally."
          },
          {
            type: "code",
            language: "powershell",
            code: "Get-ExecutionPolicy -List\nSet-ExecutionPolicy -Scope CurrentUser RemoteSigned\n.\\.venv\\Scripts\\Activate.ps1"
          },
          {
            type: "callout",
            title: "Use the narrow scope",
            text: "Set the policy for CurrentUser, not the whole machine. Do not use random internet commands that disable script checks globally."
          }
        ]
      },
      {
        heading: "Common beginner mistakes",
        blocks: [
          {
            type: "bullets",
            items: [
              "Running a command from the wrong folder.",
              "Using Linux slashes in a PowerShell-only command or PowerShell paths on Linux.",
              "Activating one environment in the terminal while VS Code or Jupyter uses another interpreter.",
              "Copying a command that contains placeholder paths such as <dataset_root> without replacing them.",
              "Ignoring the first real error and reinstalling packages without understanding the problem."
            ]
          }
        ]
      }
    ],
    links: [],
    nextLessonIds: ["python-venv-windows", "mobaxterm-ssh-hpc"]
  },
  {
    id: "mobaxterm-ssh-hpc",
    title: "MobaXterm: Connect to a GPU Server",
    summary: "Use MobaXterm for SSH, server folders, file transfer, job submission, and log inspection.",
    category: "Remote Access",
    tags: ["MobaXterm", "SSH", "SFTP", "GPU", "HPC", "Linux"],
    durationMinutes: 15,
    level: "Guided",
    prerequisites: ["Terminal basics"],
    visual: "hpc",
    sections: [
      {
        heading: "What MobaXterm gives you",
        blocks: [
          {
            type: "paragraph",
            text: "MobaXterm is a Windows tool that combines SSH terminal access and a file-transfer pane. Use it when the work happens on a Linux GPU server but you are starting from a Windows desktop."
          },
          {
            type: "image",
            src: "tutorial-assets/screenshots/mobaxterm-gpu-server.png",
            alt: "Representative MobaXterm screenshot showing SSH terminal, sessions, and SFTP file browser.",
            caption: "A typical session has saved servers on the left, the Linux terminal in the middle, and remote files on the right."
          }
        ]
      },
      {
        heading: "Create an SSH session",
        blocks: [
          {
            type: "steps",
            items: [
              "Open MobaXterm on the Windows desktop.",
              "Click Session, choose SSH, and enter the mentor-provided host name.",
              "Enter your username, usually not your Windows display name.",
              "Keep the port at 22 unless the lab note says otherwise.",
              "Save the session with a clear name such as gpu-lab-server.",
              "Connect and confirm that the terminal prompt shows the server name."
            ]
          },
          {
            type: "code",
            language: "bash",
            code: "ssh student@gpu-lab-server\npwd\nls -lh"
          }
        ]
      },
      {
        heading: "Move and inspect files",
        blocks: [
          {
            type: "paragraph",
            text: "The right-side SFTP browser follows the server folder. Use it for small configs, manifests, and logs. Do not drag large datasets casually; use the lab's approved transfer path for big data."
          },
          {
            type: "code",
            language: "bash",
            code: "cd /scratch/student/hydride_runs\nmkdir -p data logs models scripts\nls -lh"
          },
          {
            type: "callout",
            title: "Know where you are",
            text: "Home folders are for small files. Scratch or project storage is for training runs. Never assume a Windows path exists on the server."
          }
        ]
      },
      {
        heading: "Submit and watch a training job",
        blocks: [
          {
            type: "steps",
            items: [
              "Activate the approved server environment.",
              "Load required modules if the server uses modules.",
              "Open the job script and check dataset paths, output paths, GPU request, and runtime.",
              "Submit the job.",
              "Check the queue.",
              "Watch the log until you see epochs, loss, and validation metrics."
            ]
          },
          {
            type: "code",
            language: "bash",
            code: "module load cuda/12.1\nconda activate microseg\nsbatch train_hydride_unet.slurm\nsqueue -u student\ntail -f logs/train_0421.out"
          }
        ]
      }
    ],
    links: [],
    nextLessonIds: ["gpu-cluster-workflow", "hydride-segmentation-workflow"]
  },
  {
    id: "vscode-offline-extensions",
    title: "Install VS Code Extensions Offline",
    summary: "Use VSIX files from a connected machine so restricted lab computers do not need direct marketplace access.",
    category: "Tools",
    tags: ["VS Code", "VSIX", "extensions", "offline", "air-gap"],
    durationMinutes: 10,
    level: "Guided",
    prerequisites: ["VS Code basics"],
    visual: "network",
    sections: [
      {
        heading: "Why this workflow exists",
        blocks: [
          {
            type: "paragraph",
            text: "Some lab machines should not download extensions directly. The safe workflow is to download the extension package on a connected machine, transfer the .vsix file through the approved path, and install it inside VS Code on the offline machine."
          },
          {
            type: "image",
            src: "tutorial-assets/vscode-offline-vsix.svg",
            alt: "Offline VS Code extension installation workflow using a VSIX file.",
            caption: "A VSIX file is a packaged VS Code extension. Treat it like any other transferred software artifact: verify, transfer, install, and record."
          }
        ]
      },
      {
        heading: "On the connected machine",
        blocks: [
          {
            type: "steps",
            items: [
              "Open the official VS Code Marketplace page for the extension.",
              "Confirm the extension name, publisher, and version with the mentor or lab note.",
              "Download the extension as a .vsix file.",
              "Save it with a clear filename such as ms-python.python-YYYY-MM-DD.vsix.",
              "Place it into the approved transfer folder or approved media."
            ]
          }
        ]
      },
      {
        heading: "On the offline or air-gapped machine",
        blocks: [
          {
            type: "steps",
            items: [
              "Open VS Code.",
              "Open the Extensions panel.",
              "Select the three-dot menu.",
              "Choose Install from VSIX.",
              "Select the transferred .vsix file.",
              "Restart VS Code if the extension asks for it."
            ]
          },
          {
            type: "code",
            language: "powershell",
            code: "code --install-extension C:\\approved_transfer\\ms-python.python.vsix\ncode --list-extensions"
          },
          {
            type: "callout",
            title: "Do not improvise",
            text: "If an extension has dependencies, ask for the full approved VSIX bundle. Do not connect a restricted machine to the internet to fix extension problems."
          }
        ]
      }
    ],
    links: [{ label: "Help or mentor contact", configKey: "helpDeskOrContactUrl" }],
    nextLessonIds: ["python-venv-windows", "jupyter-notebooks-vscode"]
  },
  {
    id: "jupyter-notebooks-vscode",
    title: "Jupyter Notebooks in VS Code",
    summary: "Use .ipynb notebooks for small experiments, notes, plots, and step-by-step dataset inspection.",
    category: "Python",
    tags: ["Jupyter", "ipynb", "notebooks", "VS Code", "kernel"],
    durationMinutes: 15,
    level: "Guided",
    prerequisites: ["VS Code basics", "Python virtual environments"],
    visual: "notebook",
    sections: [
      {
        heading: "What a notebook is for",
        blocks: [
          {
            type: "paragraph",
            text: "A notebook mixes code cells, output, plots, and Markdown notes. Use notebooks for exploration and explanation. Use normal .py scripts for repeatable pipeline steps."
          },
          {
            type: "image",
            src: "tutorial-assets/vscode-jupyter.svg",
            alt: "VS Code Jupyter notebook showing code cells, run buttons, kernel selector and markdown notes.",
            caption: "A notebook is useful when you need to inspect data, run one cell at a time, and keep notes beside the result."
          }
        ]
      },
      {
        heading: "Open and run a notebook",
        blocks: [
          {
            type: "steps",
            items: [
              "Open the project folder in VS Code.",
              "Activate the project virtual environment in the terminal.",
              "Open the .ipynb file.",
              "Select the correct kernel, usually the project .venv Python.",
              "Run cells from top to bottom the first time.",
              "Save the notebook only when the output is useful and not too large."
            ]
          },
          {
            type: "code",
            language: "powershell",
            code: "python -m pip install ipykernel\npython -m ipykernel install --user --name student-onboarding --display-name \"Python (.venv student-onboarding)\""
          }
        ]
      },
      {
        heading: "Notebook habits for lab work",
        blocks: [
          {
            type: "bullets",
            items: [
              "Keep notebooks small and focused: one question or one inspection task.",
              "Write Markdown notes explaining what data was loaded and what conclusion you reached.",
              "Restart the kernel and run all cells before sharing a notebook.",
              "Do not use notebooks as the only copy of important pipeline logic.",
              "Avoid committing huge image outputs unless they are intentional teaching examples."
            ]
          },
          {
            type: "callout",
            title: "Kernel mismatch",
            text: "If imports fail in a notebook but work in the terminal, the notebook is probably using the wrong kernel. Select the .venv kernel again."
          }
        ]
      }
    ],
    links: [{ label: "Help or mentor contact", configKey: "helpDeskOrContactUrl" }],
    nextLessonIds: ["microstructure-annotation", "ml-basics"]
  },
  {
    id: "python-basics",
    title: "Python Basics for Lab Scripts",
    summary: "A short tour of variables, functions, paths, files, and error messages for scientific scripts.",
    category: "Python",
    tags: ["Python", "scripts", "paths", "errors"],
    durationMinutes: 15,
    level: "Beginner",
    prerequisites: ["VS Code basics"],
    visual: "python",
    sections: [
      {
        heading: "What Python is doing",
        blocks: [
          {
            type: "paragraph",
            text: "Python scripts are plain text instructions. In our work they usually load images, transform arrays, write masks, run a model, or summarize results."
          },
          {
            type: "code",
            language: "python",
            code: "from pathlib import Path\n\nimage_dir = Path(\"data/train/images\")\nfor image_path in image_dir.glob(\"*.png\"):\n    print(image_path.name)"
          }
        ]
      },
      {
        heading: "Beginner terms",
        blocks: [
          {
            type: "bullets",
            items: [
              "Variable: a name that stores a value.",
              "Function: a reusable block of work.",
              "Path: the location of a file or folder.",
              "Package: reusable Python code installed into an environment.",
              "Traceback: the error report Python prints when something fails."
            ]
          }
        ]
      },
      {
        heading: "Read errors calmly",
        blocks: [
          {
            type: "callout",
            title: "First useful line",
            text: "In most Python tracebacks, the last few lines show the real error. Copy the exact error text when asking for help."
          }
        ]
      }
    ],
    links: [],
    nextLessonIds: ["python-venv-windows", "jupyter-notebooks-vscode"]
  },
  {
    id: "python-venv-windows",
    title: "Python Virtual Environments on Windows",
    summary: "Create a project-local environment so installed packages do not collide between projects.",
    category: "Python",
    tags: ["venv", "PowerShell", "packages", "Windows"],
    durationMinutes: 15,
    level: "Guided",
    prerequisites: ["VS Code basics", "Python basics"],
    visual: "venv",
    sections: [
      {
        heading: "Why environments matter",
        blocks: [
          {
            type: "paragraph",
            text: "Different projects need different package versions. A virtual environment keeps those packages inside the project instead of mixing them with every other Python installation on the computer."
          },
          {
            type: "equation",
            text: "Project + Python version + packages = reproducible environment"
          }
        ]
      },
      {
        heading: "Create and activate",
        blocks: [
          {
            type: "code",
            language: "powershell",
            code: "python -m venv .venv\n.\\.venv\\Scripts\\Activate.ps1\npython -m pip install --upgrade pip"
          },
          {
            type: "callout",
            title: "Activation clue",
            text: "After activation, PowerShell usually shows (.venv) at the beginning of the prompt."
          }
        ]
      },
      {
        heading: "If activation is blocked",
        blocks: [
          {
            type: "paragraph",
            text: "On a new Windows account, PowerShell can refuse to run Activate.ps1. That does not mean Python is broken. Check the policy, set the approved user-level policy, close and reopen the terminal if needed, then activate again."
          },
          {
            type: "code",
            language: "powershell",
            code: "Get-ExecutionPolicy -List\nSet-ExecutionPolicy -Scope CurrentUser RemoteSigned\n.\\.venv\\Scripts\\Activate.ps1"
          }
        ]
      },
      {
        heading: "Install project packages",
        blocks: [
          {
            type: "code",
            language: "powershell",
            code: "python -m pip install -r requirements.txt\npython -m pip list"
          }
        ]
      },
      {
        heading: "Connect VS Code to the same Python",
        blocks: [
          {
            type: "steps",
            items: [
              "Open Command Palette with Ctrl+Shift+P.",
              "Run Python: Select Interpreter.",
              "Choose the interpreter inside the project .venv folder.",
              "Open a new terminal and confirm python --version and pip list are from the same environment.",
              "If Jupyter is used, select the same .venv kernel in the notebook."
            ]
          }
        ]
      }
    ],
    links: [],
    nextLessonIds: ["microstructure-annotation"]
  },
  {
    id: "microstructure-annotation",
    title: "Microstructure Annotation Workflow",
    summary: "Learn what a training example is and how image-mask pairs are prepared for segmentation.",
    category: "Data",
    tags: ["annotation", "microstructure", "masks", "datasets"],
    durationMinutes: 15,
    level: "Workflow",
    prerequisites: ["Python virtual environments"],
    visual: "annotation",
    sections: [
      {
        heading: "What annotation produces",
        blocks: [
          {
            type: "paragraph",
            text: "For segmentation, annotation turns a microscope image into a mask. The image is the input. The mask is the answer the model should learn to predict."
          },
          {
            type: "image",
            src: "tutorial-assets/examples/hydride-optical-sample.png",
            alt: "Hydride optical microstructure sample image from the local hydride segmentation workflow.",
            caption: "A real local hydride example: dark plate-like features are the structures the workflow tries to segment consistently."
          },
          {
            type: "image",
            src: "tutorial-assets/examples/hydride-synthetic-mask-example.png",
            alt: "Synthetic hydride mask example with white hydride shapes on a black background.",
            caption: "A mask is not a pretty picture. It is the pixel-level answer key: each pixel belongs to a class such as background or hydride."
          },
          {
            type: "bullets",
            items: [
              "Image: original microstructure image.",
              "Mask: same width and height, with pixel values representing classes.",
              "Background often uses 0.",
              "Foreground classes use 1, 2, 3, and so on.",
              "For binary hydride segmentation, hydride pixels are usually class 1."
            ]
          }
        ]
      },
      {
        heading: "Quality checks before training",
        blocks: [
          {
            type: "image",
            src: "tutorial-assets/infographics/dataset-contract.svg",
            alt: "Infographic showing train, validation, and test images and masks folder contract.",
            caption: "This folder contract is the first thing to verify before any model training."
          },
          {
            type: "steps",
            items: [
              "Confirm every image has a mask with the same filename.",
              "Confirm image and mask dimensions match.",
              "Check that mask values use the expected class indices.",
              "Keep near-duplicate images in the same split group to avoid leakage.",
              "Run dataset QA before any serious training."
            ]
          }
        ]
      }
    ],
    links: [{ label: "Internal annotation tool", configKey: "annotationToolUrl" }],
    nextLessonIds: ["ml-basics", "hydride-segmentation-workflow"]
  },
  {
    id: "ml-basics",
    title: "Machine Learning Basics",
    summary: "Understand training, validation, testing, inference, loss, metrics, and why split discipline matters.",
    category: "Machine Learning",
    tags: ["ML", "training", "validation", "metrics"],
    durationMinutes: 15,
    level: "Beginner",
    prerequisites: ["Python basics", "Microstructure annotation workflow"],
    visual: "ml",
    sections: [
      {
        heading: "The learning loop",
        blocks: [
          {
            type: "paragraph",
            text: "A model starts with adjustable numbers called parameters. Training repeatedly changes those parameters so predictions become closer to the target masks. In image segmentation, the input is an image and the answer is a mask with one class value per pixel."
          },
          {
            type: "image",
            src: "tutorial-assets/infographics/deep-learning-segmentation-loop.png",
            alt: "Infographic showing input image, U-Net, prediction, ground truth, loss, optimizer update, and epoch loop.",
            caption: "Deep learning training is a loop: predict, compare with the answer, compute loss, update the model, and repeat over many epochs."
          },
          {
            type: "equation",
            text: "loss = difference(prediction, target)"
          },
          {
            type: "equation",
            text: "training step: parameters <- parameters - learning_rate x gradient"
          }
        ]
      },
      {
        heading: "Segmentation in one sentence",
        blocks: [
          {
            type: "paragraph",
            text: "Classification gives one label for an image. Detection finds boxes. Segmentation labels every pixel. That is why masks must have the same width and height as the image."
          },
          {
            type: "bullets",
            items: [
              "Input: microscope image, often grayscale or RGB.",
              "Target: mask image where each pixel stores the class.",
              "Prediction: model output converted into a mask.",
              "Post-processing: optional cleanup such as removing tiny islands or filling gaps.",
              "Review: humans inspect failures and decide whether data, settings, or labels need correction."
            ]
          }
        ]
      },
      {
        heading: "How a U-Net thinks",
        blocks: [
          {
            type: "paragraph",
            text: "A U-Net is common for segmentation because it combines context and detail. The encoder compresses the image into feature maps that describe larger patterns. The decoder expands those features back to image size. Skip connections bring fine edge detail from the encoder to the decoder."
          },
          {
            type: "bullets",
            items: [
              "Convolution: a small learned filter that detects local patterns such as edges, texture, or contrast changes.",
              "Feature map: an intermediate image-like array showing where a learned pattern appears.",
              "Downsampling: reduces resolution so the model sees larger context.",
              "Upsampling: restores resolution so the model can output one decision per pixel.",
              "Skip connection: passes high-resolution detail around the bottleneck."
            ]
          }
        ]
      },
      {
        heading: "Epochs, batches, and learning rate",
        blocks: [
          {
            type: "bullets",
            items: [
              "Epoch: one pass through the training set.",
              "Batch: a small group of examples processed before one parameter update.",
              "Learning rate: how large each optimizer update is.",
              "Too high a learning rate can make training unstable.",
              "Too low a learning rate can make training painfully slow or stuck.",
              "Validation loss and metrics tell you whether the model is improving on examples it did not train on."
            ]
          },
          {
            type: "equation",
            text: "new_weight = old_weight - learning_rate x gradient"
          }
        ]
      },
      {
        heading: "What the optimizer does",
        blocks: [
          {
            type: "paragraph",
            text: "The optimizer is the rule that turns loss into parameter updates. It uses gradients, which point in the direction that would increase the loss. Training moves in the opposite direction. Adam is a common default because it adapts update sizes from recent gradient history."
          },
          {
            type: "callout",
            title: "Do not tune blindly",
            text: "When a model fails, first inspect data, masks, split leakage, and logs. Hyperparameters cannot fix mislabeled data or a broken dataset path."
          }
        ]
      },
      {
        heading: "Splits have different jobs",
        blocks: [
          {
            type: "bullets",
            items: [
              "Train: examples used to update the model.",
              "Validation: examples used to choose settings and detect overfitting.",
              "Test: examples used only for final reporting.",
              "Never tune settings after looking at test results."
            ]
          }
        ]
      },
      {
        heading: "Common segmentation metrics",
        blocks: [
          {
            type: "paragraph",
            text: "Metrics summarize pixel overlap, but they do not replace visual review. A high score can still hide systematic failures on rare structures, low-contrast regions, or edge cases."
          },
          {
            type: "equation",
            text: "IoU = overlap area / union area"
          },
          {
            type: "equation",
            text: "Dice = 2 x overlap / (predicted area + true area)"
          }
        ]
      }
    ],
    links: [],
    nextLessonIds: ["pix2pix-cyclegan-microscopy", "hydride-segmentation-workflow"]
  },
  {
    id: "pix2pix-cyclegan-microscopy",
    title: "pix2pix and CycleGAN for Microscopy",
    summary: "See how paired and unpaired image-to-image models are used for scientific microscopy workflows.",
    category: "Machine Learning",
    tags: ["pix2pix", "CycleGAN", "image translation", "microscopy"],
    durationMinutes: 15,
    level: "Workflow",
    prerequisites: ["Machine learning basics"],
    visual: "gan",
    sections: [
      {
        heading: "Two related ideas",
        blocks: [
          {
            type: "image",
            src: "tutorial-assets/infographics/paired-vs-unpaired.svg",
            alt: "Infographic comparing pix2pix paired data and CycleGAN unpaired domains.",
            caption: "pix2pix needs aligned input-target examples. CycleGAN can learn from two image domains without exact pairs."
          },
          {
            type: "bullets",
            items: [
              "pix2pix learns from paired examples: input image and target image are aligned.",
              "CycleGAN learns from unpaired domains: images from domain A and images from domain B do not need exact pairs.",
              "In microscopy, these can support restoration, contrast transfer, modality translation, and synthetic target generation."
            ]
          }
        ]
      },
      {
        heading: "Dataset layouts",
        blocks: [
          {
            type: "image",
            src: "tutorial-assets/examples/powder-paired-example.png",
            alt: "Powder segmentation paired image example from the local workflow.",
            caption: "Local paired training examples often place input and target information into one sample file or a strict paired folder contract."
          },
          {
            type: "image",
            src: "tutorial-assets/examples/ebsd-cleaned-map.png",
            alt: "Cleaned EBSD map example from local image-to-image workflow assets.",
            caption: "Image-to-image workflows can learn restoration, cleanup, contrast transfer, or modality translation when the dataset is prepared consistently."
          },
          {
            type: "code",
            language: "text",
            code: "pix2pix paired:\n  dataset/train/*.png\n  dataset/val/*.png\n  dataset/test/*.png\n\nCycleGAN unpaired:\n  dataset/trainA/*.png\n  dataset/trainB/*.png\n  dataset/testA/*.png\n  dataset/testB/*.png"
          }
        ]
      },
      {
        heading: "Typical dry-run habit",
        blocks: [
          {
            type: "code",
            language: "powershell",
            code: "microi2i train --config configs/train/pix2pix.default.yml --dry-run\nmicroi2i train --config configs/train/cyclegan.default.yml --dry-run"
          },
          {
            type: "callout",
            title: "Dry run first",
            text: "A dry run validates configuration and paths before starting a long training job."
          }
        ]
      }
    ],
    links: [{ label: "Internal CycleGAN/pix2pix repo", configKey: "cycleGanRepoUrl" }],
    nextLessonIds: ["gpu-cluster-workflow"]
  },
  {
    id: "hydride-segmentation-workflow",
    title: "Hydride Segmentation Dataset Workflow",
    summary: "Use the canonical image/mask dataset structure expected by the segmentation training stack.",
    category: "Segmentation",
    tags: ["hydride", "segmentation", "dataset", "train-val-test"],
    durationMinutes: 15,
    level: "Workflow",
    prerequisites: ["Microstructure annotation workflow", "Machine learning basics"],
    visual: "segmentation",
    sections: [
      {
        heading: "Canonical dataset layout",
        blocks: [
          {
            type: "image",
            src: "tutorial-assets/infographics/dataset-contract.svg",
            alt: "Hydride segmentation dataset contract with train validation test image mask folders.",
            caption: "The hydride segmentation stack expects a predictable image/mask contract before training, evaluation, or HPC packaging."
          },
          {
            type: "code",
            language: "text",
            code: "<dataset_root>/\n  train/\n    images/\n    masks/\n  val/\n    images/\n    masks/\n  test/\n    images/\n    masks/"
          },
          {
            type: "paragraph",
            text: "Inside each split, image and mask filenames should match. If train/images/sample_001.png exists, train/masks/sample_001.png should be the corresponding label mask."
          }
        ]
      },
      {
        heading: "Fair comparison rules",
        blocks: [
          {
            type: "bullets",
            items: [
              "Freeze one train/val/test split before model comparison.",
              "Use the same split for every model.",
              "Use validation for tuning and test only for final reporting.",
              "Record configs, seeds, dataset path, and output folder for each run."
            ]
          }
        ]
      },
      {
        heading: "Starter commands",
        blocks: [
          {
            type: "image",
            src: "tutorial-assets/screenshots/hydride-qt-segmentation-gui.png",
            alt: "Hydride segmentation GUI screenshot with input image, prediction controls, correction tools, and logs.",
            caption: "The local hydride GUI helps students connect the concepts: input image, predicted mask, correction workflow, classes, and logs."
          },
          {
            type: "code",
            language: "powershell",
            code: "microseg-cli dataset-qa --config configs/dataset_qa.default.yml --dataset-dir outputs/prepared_dataset_hydride_v1 --strict\nmicroseg-cli train --config configs/hydride/train.unet_binary.baseline.yml --dataset-dir outputs/prepared_dataset_hydride_v1 --output-dir outputs/benchmarks/unet_binary_seed42 --set seed=42 --no-auto-prepare-dataset"
          }
        ]
      }
    ],
    links: [{ label: "Internal hydride segmentation repo", configKey: "hydrideSegmentationRepoUrl" }],
    nextLessonIds: ["gpu-cluster-workflow"]
  },
  {
    id: "gpu-cluster-workflow",
    title: "GPU Cluster Workflow",
    summary: "Prepare datasets locally, submit controlled jobs to the GPU cluster, and inspect logs and outputs.",
    category: "Compute",
    tags: ["GPU", "HPC", "cluster", "logs", "checkpoints"],
    durationMinutes: 15,
    level: "Workflow",
    prerequisites: ["Machine learning basics", "Hydride segmentation dataset workflow"],
    visual: "hpc",
    sections: [
      {
        heading: "What moves to the cluster",
        blocks: [
          {
            type: "paragraph",
            text: "The cluster is for heavy training and evaluation. You prepare data, configs, and job bundles carefully before submission. The cluster returns logs, checkpoints, metrics, and reports."
          },
          {
            type: "bullets",
            items: [
              "Inputs: frozen dataset, config files, code version, pretrained weights if approved.",
              "Execution: scheduler job, GPU allocation, logs.",
              "Outputs: checkpoints, metrics JSON/CSV, plots, review HTML, failure logs."
            ]
          }
        ]
      },
      {
        heading: "Bundle habit",
        blocks: [
          {
            type: "code",
            language: "bash",
            code: "microseg-cli hpc-ga-generate \\\n  --config configs/hpc_ga.top5_scratch.default.yml \\\n  --dataset-dir outputs/prepared_dataset_hydride_v1 \\\n  --output-dir outputs/hpc_ga_bundle_top5_scratch"
          },
          {
            type: "callout",
            title: "Never submit blind",
            text: "Open the generated manifest and job scripts before submission. Confirm dataset paths, output paths, scheduler type, and GPU request."
          }
        ]
      },
      {
        heading: "When a job fails",
        blocks: [
          {
            type: "steps",
            items: [
              "Open the job log, not only the final output folder.",
              "Find the first real error after environment setup.",
              "Check whether the dataset path exists on the cluster.",
              "Check whether the expected Python package or model weight exists locally.",
              "Record job ID, command, config, and the first error before asking for help."
            ]
          }
        ]
      }
    ],
    links: [{ label: "Internal GPU cluster docs", configKey: "gpuClusterDocsUrl" }],
    nextLessonIds: []
  }
];

export function getLessonById(id: string): Lesson | undefined {
  return lessons.find((lesson) => lesson.id === id);
}
