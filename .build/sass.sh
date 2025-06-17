#!/bin/bash

# Directory containing your CSS modules
CSS_DIR="./modules/styles/components/sidebar"

# Output file
OUTPUT="$CSS_DIR/source.css"

# List your CSS modules in the desired order
MODULES=(
  "index.module.css"
  "links.module.css"
  # Add more module files here if needed
)

# Concatenate, remove @import, and minify
cat /dev/null > "$OUTPUT"  # Empty the output file first

for module in "${MODULES[@]}"; do
  # Remove @import lines and append to output
  grep -v '@import' "$CSS_DIR/$module" >> "$OUTPUT"
done

# Optional: Minify (basic, removes comments and extra whitespace)
sed -i -e 's/\/\*.*\*\///g' -e ':a;N;$!ba;s/\n/ /g' -e 's/  */ /g' "$OUTPUT"

# For better minification, install clean-css-cli and use:
# npx cleancss -o "$OUTPUT" "$OUTPUT"

echo "Compiled and optimized CSS written to $OUTPUT"