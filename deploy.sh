#!/bin/sh

# If a command fails then the deploy stops
set -e

printf "\033[0;32mDeploying updates to GitHub...\033[0m\n"

# Build the project.
hugo # if using a theme, replace with `hugo -t <YOURTHEME>`

# Go To Public folder
cd public

# Check if the directory is a Git repository
if [ ! -d ".git" ]; then
  echo "Not a git repository. Initializing new repository."
  git init
  git remote add origin https://github.com/iconsar/iconsar.github.io.git
fi

# Add changes to git.
git add .

# Commit changes.
msg="rebuilding site $(date)"
if [ -n "$*" ]; then
  msg="$*"
fi
git commit -m "$msg"

# Push source and build repos.
git push origin main
