# Git Quick Guide
This is a short reference for common Git commands: setting up identity, creating repositories, pushing to GitHub, and handling submodules.

## Configure Identity
```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```
Sets your username and email for all repositories (remove `--global` to set only in the current repo).

## Initialize a Repository
```bash
git init
```
Creates a new local repository in the current folder.

## Create Repository, Rename Branch, Push to GitHub
```bash
git init
git branch -M main
git remote add origin https://github.com/username/repo.git
git add .
git commit -m "first commit"
git push -u origin main
```
Initializes a repo, renames the branch to `main`, links it to GitHub, and pushes the first commit.

## Submodules

### Add a Submodule
```bash
git submodule add https://github.com/other/repo.git path/to/repo
git submodule update --init --recursive
```
Adds another repository inside your project.

### Update Submodules
```bash
git submodule update --remote --merge
```
Fetches and updates submodules to the latest commit on their tracked branch.

### Clone with Submodules
```bash
git clone --recurse-submodules https://github.com/username/repo.git
```
Clones a repository and initializes its submodules in one step.
