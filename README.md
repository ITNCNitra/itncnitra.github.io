# ITNC Repository
Welcome to the official ITNC (Informatics & Technology Club) repository.  
This is where we store, manage, and collaborate on our extracurricular projects.


## About ITNC
ITNC is our school's extracurricular club focused on programming, electronics, robotics, and technology.  
We use this repository to organize source code, documentation, and project assets.

<br>

## Getting Started
### Clone the Repository
```bash
git clone --recurse-submodules https://github.com/your-org/itnc.git
cd itnc
```

### Configure Git Identity (if not already set)
```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

<br>

## Repository Structure
- `projects/` → Contains individual project folders (e.g., robotics, web apps, IoT).
- `docs/` → Documentation, guides, and tutorials.
- `resources/` → Shared assets, libraries, and references.

<br>

## Workflow
### Start a New Project
```bash
git checkout -b project-name
mkdir projects/project-name
````

Work on your code inside the new `projects/project-name/` folder.
Commit changes regularly to your project branch.

### Commit and Push Changes

```bash
git add .
git commit -m "Add project-name initial files"
git push -u origin project-name
```

When the project is stable, open a Pull Request to merge it into `main`.

<br>

## Contribution Guidelines

1. Always create a new branch for your project or feature (`git checkout -b project-name` or `feature-name`).
2. Keep all work inside its folder under `projects/`.
3. Write clear, descriptive commit messages.
4. Push your branch and open a Pull Request when ready to merge into `main`.

<br>

## License
This repository is for ITNC extracurricular projects. Licensing terms may vary per project.  
Check individual project folders for more details.

   /\_/\
  ( o.o )
   > ^ <