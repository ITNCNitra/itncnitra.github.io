# ITNC Website Repository
Welcome to the official ITNC Website repository.  
This is where we build and maintain the official website for the Informatics & Technology Club (ITNC).

## Repository Structure
- `src/` → css, js, etc.
- `docs/` submodule:
    - `docs/` → Documentation, guides, and tutorials.
    - `resources/` → Shared assets, libraries, and references.

## Getting Started
### Download and Install Visual Studio Code and Git
- download and install VSCODE ([link](https://code.visualstudio.com/))
- download and install Git ([Git](https://git-scm.com/downloads))     

### Configure Git Identity
```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

### Setup Project Folder
1. On your desktop, create a new folder named **"ITNC (anything you want)"**  
2. Open the folder and in the folder path bar, type **cmd** and press Enter  
3. Once Command Prompt opens, clone the Repository and open the folder in Visual Studio Code:
    ```bash
    git clone https://github.com/ITNCNitra/itncnitra.github.io.git
    cd itncnitra.github.io
    code .
    ```
4. Open new terminal in Visual Studio Code from the terminal bar at the top
5. Pull `docs/` submodules files:
    ```
    git submodule update --remote --rebase
    ```
5. **Optional:** sync local files with remote (github):
    ```
    git fetch origin
    git pull
    ```
    **Note:** read more about git cmd here [itncnitra.github.io\docs\docs\git.md](https://github.com/ITNCNitra/ITNC/blob/main/docs/git.md)

<br>

## 🤝 Contributing
Members of **ITNC** who want to contribute directly can request access to be added as a **collaborator** on this repository.  
Just contact one of the maintainers or open an issue titled “Access Request.”

For contributors **outside the organization**, you’re welcome to **fork** this repo and open a **Pull Request (PR)** with your improvements.  
Make sure your changes are clear and follow our commit style (e.g., `feat:`, `fix:`, `docs:`).

### Basic steps for external contributors:
1. Fork this repository  
2. Create a new branch for your change  
3. Commit with a clear message  
4. Push to your fork  
5. Open a Pull Request

We’ll review your PR and merge it if it fits our goals.

## Basic Step for internal contributors:
### Start a New Branch
```bash
git checkout -b <branch name>
```

Work on your code inside the new `<branch name>` branch.   
Commit changes regularly to your project branch.

### Commit and Push Changes

```bash
git add <file>
git commit -m "<commit message>"
git push -u origin <branch name>
```

When the project is stable, open a Pull Request to merge it into `main`.

<br>

## Contribution Guidelines
1. Always create a new branch for your project or feature (`git checkout -b project-name` or `feature-name`).
2. Write clear, descriptive commit messages.
3. Push your branch and open a Pull Request when ready to merge into `main`.