# JARVEIS - Desir Technology

Just A Rather Very Excellent Intelligent System - A Matrix-themed Svelte application with neumorphic design elements.

## Project Structure

This project uses SvelteKit, the official Svelte application framework, with TypeScript for type safety.

```
modules/app/
├── src/                  # Source code
│   ├── routes/           # SvelteKit routes
│   │   ├── +layout.svelte  # Main layout with sidebar
│   │   ├── +page.svelte    # Home page
│   │   └── jarveis/        # JARVEIS AI assistant
│   ├── lib/              # Shared libraries
│   ├── components/       # Reusable components
│   └── app.html          # HTML template
├── static/               # Static assets
├── package.json          # Dependencies
├── svelte.config.js      # Svelte configuration
├── tsconfig.json         # TypeScript configuration
├── vite.config.ts        # Vite configuration
└── README.md             # This file
```

## Features

- Matrix-themed UI with neumorphic design elements
- Responsive layout with sidebar navigation
- JARVEIS AI assistant interface
- TypeScript integration
- CSS variables for theming

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn

### Installation

```bash
# Navigate to the project directory
cd modules/app

# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

### Building

```bash
# Create a production version
npm run build

# Preview the production build
npm run preview
```

## CSS Theming

The project uses CSS variables defined in `modules/styles/root.css` for consistent theming:

```css
:root {
    --sidebar-background: #0a0e0a;
    --sidebar-text: #00ff44;
    --sidebar-hover: #00ff99;
}
```

## TOML Configuration Files

The project includes three TOML configuration files that define the system architecture:

- `pragma.toml` - Defines the "WHAT" of the module (identity and context)
- `dogma.toml` - Defines the "WHY" of the module (principles and constraints)
- `schema.toml` - Defines the "HOW" of the module (structure and implementation)

## License

Copyright © 2025 Desir Technology. All rights reserved.
