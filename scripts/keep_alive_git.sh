#!/usr/bin/env bash
# Keeps scheduled GitHub Actions alive: commit if the last commit is older than 60 days.
set -euo pipefail
last=$(git log -1 --format=%ct)
now=$(date +%s)
if [ $(( (now - last) / 86400 )) -ge 60 ]; then
  git commit --allow-empty -m "keep-alive: 60-day reset"
  echo "keep-alive commit created"
else
  echo "recent activity; nothing to do"
fi
