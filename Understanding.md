# Project Analysis: Positivus

## Overview
Positivus is a responsive single-page landing page for a digital marketing agency. It is built using **Vanilla JavaScript**, **Vite**, and **Tailwind CSS**. The project follows a component-based architecture where each section of the page is handled by a specific JavaScript module that renders HTML into the DOM.

## Technology Stack
- **Build Tool**: Vite
- **Styling**: Tailwind CSS (with PostCSS and Autoprefixer)
- **Language**: JavaScript (ES Modules)
- **Font**: Space Grotesk (via Google Fonts)

## File Structure & Analysis

### Root Directory

#### `index.html`
The main entry point of the application.
- **Head**: Includes meta tags, the favicon, and preconnect links for Google Fonts ("Space Grotesk").
- **Body**: Contains a single `<div id="app"></div>` container where the JavaScript application is mounted.
- **Script**: Imports `/src/main.js` as a module to kickstart the app.

#### `package.json`
Manages project dependencies and scripts.
- **Scripts**:
  - `dev`: Starts the local development server using Vite.
  - `build`: Builds the production-ready assets.
  - `preview`: Previews the built application.
- **Dependencies**: Includes `tailwindcss`, `postcss`, `autoprefixer`, and `vite`.

#### `postcss.config.js`
Configuration for PostCSS.
- Registers `tailwindcss` and `autoprefixer` plugins to process CSS.

#### `tailwind.config.js`
Configuration for Tailwind CSS.
- **Content**: Specifies that Tailwind should scan `./index.html` and all files in `./src/` for class names.
- **Theme Extension**:
  - **Colors**: Adds custom brand colors: `positivus-green` (#B9FF66), `positivus-dark` (#191A23), and `positivus-grey` (#F3F3F3).
  - **Font Family**: Adds `space-grotesk` as the primary font.

### Source Directory (`src/`)

#### `src/main.js`
The central orchestrator of the application.
1. **Imports**: Loads global styles (`style.css`) and setup functions from component modules.
2. **`initApp()` Function**:
   - Selects the `#app` container.
   - Injects the main HTML skeleton (header, main sections, footer) with specific IDs (e.g., `#hero`, `#services`).
   - Calls the setup functions (e.g., `setupHeader`, `setupHero`) to populate each section with content.
3. **Execution**: Calls `initApp()` to run the application immediately.

#### `src/style.css`
The global stylesheet.
- Imports Tailwind's `base`, `components`, and `utilities` layers.

#### `src/constants.js`
A centralized file for static data, promoting separation of concerns.
- **`NAV_LINKS`**: Array of navigation items (About us, Services, etc.).
- **`SERVICES_DATA`**: Array of objects defining the content and styling for the Services grid cards.
- **`COMPANY_LOGOS`**: List of companies for the social proof section.
- **`CONTACT_INFO`**: Object containing email, phone, and address.
- **`SOCIAL_LINKS`**: Array of social media platforms.

#### `src/counter.js`
A simple counter utility function.
- **Note**: This appears to be a leftover file from the default Vite template and is not currently used in the main application logic.

### Components Directory (`src/components/`)

These files export functions that take a DOM element and inject HTML content into it.

#### `src/components/Header.js`
Renders the top navigation bar.
- Uses `NAV_LINKS` to generate menu items dynamically.
- Includes the Logo and a "Request a quote" button.
- Responsive design: Shows a hamburger menu icon on mobile devices.

#### `src/components/Hero.js`
Renders the "Hero" section (top of the page).
- Displays the main headline ("Navigating the digital landscape...").
- Features a "Book a consultation" CTA button.
- Displays a responsive illustration (`HeroIllustration`).
- Renders a grid of company logos (`COMPANY_LOGOS`) below the main content.

#### `src/components/Services.js`
Renders the "Services" section.
- Displays a section title and description.
- Iterates over `SERVICES_DATA` to create a grid of cards.
- Each card has dynamic styling (background colors, text colors) based on the data properties.
- Features hover effects and custom icons.

#### `src/components/CTA.js`
Renders the "Call to Action" section.
- A visually distinct block with a grey background and rounded corners.
- Encourages users to "make things happen" with a "Get your free proposal" button.
- Includes decorative abstract shapes.

#### `src/components/Footer.js`
Renders the site footer.
- **Top**: Logo, navigation links, and social media icons.
- **Middle**: Contact information and a newsletter subscription form.
- **Bottom**: Copyright notice and Privacy Policy link.
- Uses `CONTACT_INFO` and `SOCIAL_LINKS` from constants.

#### `src/components/Icons.js`
A library of SVG components.
- Exports functions that return SVG strings (e.g., `LogoIcon`, `MenuIcon`, `HeroIllustration`).
- Allows passing `className` to customize the size and color of icons.

## Key Architecture Patterns
1. **Module-Based Components**: Instead of a framework like React, this project uses native JS modules to encapsulate logic and rendering for each section.
2. **Data-Driven UI**: Content is separated from markup (in `constants.js`), making it easy to update text and links without touching the HTML generation logic.
3. **Utility-First Styling**: Tailwind CSS is used for almost all styling, ensuring consistency and responsiveness.
