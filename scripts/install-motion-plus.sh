#!/bin/bash
# Install motion-plus from the private registry.
# Reads token from MOTION_PLUS_TOKEN env var or .npmrc file.

if [ -d "node_modules/motion-plus" ]; then
  exit 0
fi

TOKEN="${MOTION_PLUS_TOKEN:-}"

if [ -z "$TOKEN" ] && [ -f ".npmrc" ]; then
  TOKEN=$(grep 'api.motion.dev' .npmrc | sed 's/.*_authToken=//')
fi

if [ -z "$TOKEN" ]; then
  echo "⚠ motion-plus: no token found. Skipping install."
  echo "  Set MOTION_PLUS_TOKEN env var or add token to .npmrc"
  exit 0
fi

npm install --no-save "https://api.motion.dev/registry.tgz?package=motion-plus&version=latest&token=${TOKEN}"
