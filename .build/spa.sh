#!/bin/bash

# JARVEIS SPA Build Script
# This script builds a single-page application version of the JARVEIS app
# with client-side routing for all routes

echo "🚀 Starting JARVEIS SPA build process..."

# Install dependencies if needed
if [ ! -d "node_modules" ] || [ ! -f "node_modules/.bin/vite" ]; then
  echo "📦 Installing dependencies..."
  npm install
fi

# Install additional dependencies for SPA build
echo "📦 Installing SPA build dependencies..."
npm install --save-dev @sveltejs/adapter-static cross-env @types/node

# Build the SPA version
echo "🔨 Building SPA version..."
npm run build:spa

# Check if build was successful
if [ -d "build-spa" ]; then
  echo "✅ SPA build completed successfully!"
  echo "📁 Output directory: $(pwd)/build-spa"
  echo ""
  echo "🌐 To preview the SPA locally:"
  echo "   npm run preview:spa"
  echo ""
  echo "📋 Deployment instructions:"
  echo "   1. Copy the contents of the build-spa directory to your web server"
  echo "   2. Configure your web server to serve index.html for all routes"
  echo "   3. For Netlify, create a _redirects file with: /* /index.html 200"
  echo ""
  echo "🔍 Note: This build uses client-side routing for all pages"
else
  echo "❌ Build failed. Check for errors above."
  exit 1
fi
