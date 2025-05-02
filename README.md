# MaoMao Social Platform - Vite Migration

This project is a migration of the MaoMao Social Platform landing page from Create React App (CRA) to Vite to solve dependency issues and improve development experience.

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## Project Structure

```
maomao-landing-vite/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   └── Home/
│   │       ├── data.source.js (contains all section data)
│   │       ├── Feature0.jsx (feature grid section)
│   │       ├── Footer2.jsx (footer component)
│   │       ├── Nav0.jsx (navigation component)
│   │       └── utils.js (utility functions)
│   ├── pages/
│   │   ├── Contact.jsx (contact page)
│   │   ├── FAQ.jsx (FAQ and terms page)
│   │   └── Home.jsx (home page)
│   ├── styles/
│   │   ├── common.less (common styles)
│   │   ├── custom.less (variables and overrides)
│   │   ├── footer2.less (footer styles)
│   │   ├── nav0.less (navigation styles)
│   │   └── index.less (imports all styles)
│   ├── App.jsx (main app with routing)
│   ├── main.jsx (entry point)
│   └── index.css (global CSS)
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Migration Progress

- [x] Basic project setup with Vite
- [x] Core dependencies installed
- [x] Routing configured
- [x] Navigation component migrated
- [x] Footer component migrated
- [x] Contact page migrated
- [x] FAQ page migrated
- [x] Feature0 component migrated
- [ ] Content11 component (needs migration)
- [ ] Content1 component (needs migration)
- [ ] Feature1 component (needs migration)
- [ ] Feature2 component (needs migration)
- [ ] Pricing0 component (needs migration)
- [ ] Style files (partially migrated)

## Component Migration Guide

To migrate the remaining components:

1. Copy the component JSX file from the original project to `src/components/Home/`
2. Create the corresponding LESS file in `src/styles/`
3. Import the component in `src/pages/Home.jsx`
4. Uncomment the component in the `children` array
5. Check for any dependencies and update as needed

## Dependency Notes

This project uses:

- React 18
- Ant Design 4.24.10 (to maintain compatibility with other components)
- React Router DOM 6
- RC Animation libraries (rc-queue-anim, rc-scroll-anim, rc-tween-one)

## Build for Production

```bash
npm run build
```

Build output will be in the `dist` directory.