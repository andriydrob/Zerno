# ☕ Zerno — Specialty Coffee Shop

A modern, responsive website for Zerno, a specialty coffee shop in Kyiv, Ukraine. Built with Astro, React, TypeScript, and Tailwind CSS, the project combines a clean interface with a warm, coffee-inspired visual identity.

🌐 **Live Demo:** [zerno-omega.vercel.app](https://zerno-omega.vercel.app)

---

## 📖 Overview

Zerno is a website designed to showcase a specialty coffee shop, its story, menu, and location through a modern and intuitive user experience.

The project focuses on clean design, reusable components, maintainable code, and responsive layouts. Its component-based architecture separates individual website sections from the main page structure, making the application easier to maintain and extend.

## ✨ Features

- **Modern UI** — A clean interface with a coffee-inspired visual identity.
- **Responsive Layout** — Designed to provide a consistent experience across desktop and mobile screens.
- **Component-Based Architecture** — Website sections are organized into reusable components.
- **About Section** — Introduces the café and its concept.
- **Interactive Menu** — Organizes food and beverage offerings into structured sections.
- **Location Section** — Provides information for visitors planning to find the café.
- **Navigation** — Links to the main sections of the website.
- **Reusable Layout** — Shared page structure for consistent presentation.
- **SEO Foundation** — Includes a `robots.txt` file for search engine crawler instructions.
- **Production Deployment** — Hosted on Vercel.

## 🛠️ Tech Stack

| Technology | Purpose |
| --- | --- |
| [Astro](https://astro.build/) | Website framework and page rendering |
| [React](https://react.dev/) | Interactive UI components |
| [TypeScript](https://www.typescriptlang.org/) | Static typing and improved code maintainability |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first styling |
| [Vercel](https://vercel.com/) | Deployment and hosting |
| npm | Package management |

## 📂 Project Structure

```text
Zerno/
└── zerno-cafe/
    ├── public/
    │   ├── favicon.svg
    │   └── robots.txt
    │
    ├── src/
    │   ├── components/
    │   │   ├── About.astro
    │   │   ├── Footer.astro
    │   │   ├── Hero.astro
    │   │   ├── Location.astro
    │   │   ├── Menu.astro
    │   │   ├── MenuSection.tsx
    │   │   └── Nav.astro
    │   │
    │   ├── layouts/
    │   │   └── Layout.astro
    │   │
    │   ├── pages/
    │   │   └── index.astro
    │   │
    │   ├── styles/
    │   │   └── global.css
    │   │
    │   └── env.d.ts
    │
    ├── .gitignore
    ├── astro.config.mjs
    ├── package-lock.json
    ├── package.json
    ├── tailwind.config.mjs
    └── tsconfig.json
```

### Directory Overview

| Directory | Description |
| --- | --- |
| `public/` | Static assets served directly to the browser. |
| `src/` | Main application source code. |
| `src/components/` | Components responsible for individual website sections and UI elements. |
| `src/layouts/` | Shared layouts that define the overall page structure. |
| `src/pages/` | Page components and route definitions. |
| `src/styles/` | Global CSS and shared styling rules. |

### Component Breakdown

| File | Description |
| --- | --- |
| `About.astro` | Presents the café's story and concept. |
| `Footer.astro` | Defines the footer and its supporting information. |
| `Hero.astro` | Implements the main introductory section of the homepage. |
| `Location.astro` | Displays location-related information for visitors. |
| `Menu.astro` | Organizes the café's menu section. |
| `MenuSection.tsx` | React component used to render menu content or individual menu sections. |
| `Nav.astro` | Provides navigation between the main website sections. |
| `Layout.astro` | Defines the shared HTML layout and common page elements. |
| `index.astro` | Homepage entry point that assembles the website sections. |
| `global.css` | Contains global styles and shared CSS rules. |
| `env.d.ts` | Provides TypeScript environment declarations. |

### Configuration Files

| File | Description |
| --- | --- |
| `astro.config.mjs` | Astro configuration and integration settings. |
| `tailwind.config.mjs` | Tailwind CSS configuration and theme customization. |
| `tsconfig.json` | TypeScript compiler configuration. |
| `package.json` | Project metadata, dependencies, and npm scripts. |
| `package-lock.json` | Records the resolved npm dependency tree. |
| `.gitignore` | Defines files and directories excluded from Git. |
| `public/favicon.svg` | Browser tab icon. |
| `public/robots.txt` | Search engine crawler instructions. |

## 🏗️ Architecture

Zerno uses a component-based architecture that combines Astro's page rendering capabilities with React components for interactive UI.

- **Astro components** — Build the main website sections and shared layouts.
- **React components** — Support UI elements that require React functionality.
- **Pages** — Define the website's routes and assemble the necessary components.
- **Layouts** — Keep the page structure consistent.
- **Global styles** — Centralize shared styling rules.
- **Configuration files** — Define the framework, styling, and TypeScript setup.

The homepage is defined in `src/pages/index.astro`, while the individual sections are organized in `src/components/`.

## 🚀 Getting Started

Follow these steps to run the project locally.

### Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/) — a version compatible with the project dependencies.
- npm — included with Node.js.
- [Git](https://git-scm.com/).

### 1. Clone the Repository

```bash
git clone https://github.com/andriydrob/Zerno.git
cd Zerno
```

### 2. Navigate to the Application

```bash
cd zerno-cafe
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

Open the local URL printed in the terminal to view the website.

### 5. Build for Production

```bash
npm run build
```

### 6. Preview the Production Build

```bash
npm run preview
```

> The commands above assume `package.json` defines the standard Astro scripts. Check the scripts section in `package.json` if a command is unavailable.

## 📜 Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the local development server. |
| `npm run build` | Builds the website for production. |
| `npm run preview` | Previews the production build locally. |

## 🌍 Deployment

The project is deployed on [Vercel](https://vercel.com/).

To deploy your own instance:

1. Import the GitHub repository into Vercel.
2. Set the project root directory to `zerno-cafe`.
3. Configure the build settings according to the project's Astro configuration.
4. Deploy the application.

Vercel can also be configured to redeploy the website automatically when changes are pushed to the connected GitHub repository.

## 🎨 Design Principles

The website is built around several design principles:

- **Simplicity** — Clear navigation and an intuitive page structure.
- **Consistency** — Reusable components and shared styling.
- **Maintainability** — Separation of layouts, pages, components, and styles.
- **Responsiveness** — A layout intended to work across different screen sizes.
- **Brand Identity** — A visual direction inspired by specialty coffee culture.

## 🔮 Potential Improvements

Possible future enhancements include:

- Online ordering and takeaway functionality.
- A dedicated coffee origins and roasting section.
- Content management for menu items and prices.
- Improved accessibility and keyboard navigation.
- SEO metadata and structured data.
- Automated tests and continuous integration.
- Performance monitoring and Core Web Vitals optimization.

## 🤝 Contributing

Contributions, suggestions, and bug reports are welcome.

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Push the branch to your fork.
5. Open a pull request describing your changes.

## 📄 License

No license has been specified in this README. Unless a license is added to the repository, the project's reuse and redistribution permissions should not be assumed.

---

<p align="center">
  Made with ☕ and care.
</p>
