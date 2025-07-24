# Next.js Project Setup and Basics

![Next.js](https://img.shields.io/badge/Next.js-Framework-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-Strict--Typed-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-Styled-green)
![License](https://img.shields.io/badge/License-MIT-lightgrey)

## 📌 Project Description

This project is a comprehensive introduction to setting up and working with **Next.js**, **TypeScript**, and **Tailwind CSS**. It walks you through building a modern web application featuring reusable components, client-side routing, external API integration, and clean project structure. It’s designed for learners looking to solidify their understanding of these technologies by building hands-on.


## 🎯 Learning Objectives

By the end of this project, you will be able to:

- Scaffold a Next.js app with TypeScript and Tailwind CSS
- Implement basic routing using the Pages Router
- Build reusable components with TypeScript interfaces
- Add interactivity with modals, buttons, and forms
- Fetch and display data from external APIs (like JSONPlaceholder)
- Structure your project following scalable best practices
- Use props and manage state in functional components
- Create responsive layouts and a consistent user experience


## ⚙️ Requirements

Before starting, ensure you have the following tools installed:

- **Node.js** (v16 or later)
- **npm** or **yarn**
- **Git** and a GitHub account
- A **code editor** (we recommend VS Code)
- Basic knowledge of **React** and **TypeScript**
- Familiarity with **HTML/CSS**


## 🧱 Project Structure

```

alx-project-0x02/
├── components/
│   ├── common/                  # Reusable UI elements
│   │   ├── Button.tsx           # Customizable button component
│   │   ├── Card.tsx             # Simple display card
│   │   ├── PostCard.tsx         # Post display component
│   │   ├── PostModal.tsx        # Modal for creating posts
│   │   └── UserCard.tsx         # User info display component
│   └── layout/
│       └── Header.tsx           # Site-wide navigation bar
├── interfaces/
│   └── index.ts                 # TypeScript interfaces for props
├── pages/
│   ├── \_app.tsx                 # App wrapper
│   ├── \_document.tsx           # Custom document structure
│   ├── about.tsx               # About page
│   ├── home.tsx                # Home page
│   ├── index.tsx               # Landing page
│   ├── posts.tsx               # Posts listing
│   └── users.tsx               # Users listing
├── public/
│   └── assets/
│       └── images/             # Public image assets
├── styles/
│   └── globals.css             # Global Tailwind styles
├── .eslintrc.json              # Linter configuration
├── next.config.js              # Next.js configuration
├── package.json                # Project dependencies
├── README.md                   # Project documentation
└── tsconfig.json               # TypeScript configuration

```


## 🛠️ Implementation Guide

### 0. Initial Repository Setup:
- **Repo**: [alx-project-0x02-setup](https://github.com/)
- Initialize with `README.md`
- Add: _"Next.js Project Setup and Basics"_ title and description

### 1. Scaffold Next.js + TS + Tailwind:
- `npx create-next-app@latest alx-project-2 --typescript`
- Enable ESLint and Tailwind CSS
- Add folder structure: `/components/layout/`, `/interfaces/`, `/public/assets/images/`
- Create `pages/index.tsx` with a welcome message

### 2. Add Basic Routing:
- Create `pages/home.tsx` and `pages/about.tsx`
- Add headings in both files
- Modify `Header.tsx` to link to `/home` and `/about`

### 3. Reusable Card Component:
- Define `CardProps` in `interfaces/index.ts`
- Create `Card.tsx` accepting `title` and `content` props
- Use `Card` on the home page

### 4. Modal Component with Form:
- Create `PostModal.tsx` with form fields
- Pass submitted data to `home.tsx`
- Add a button to toggle modal visibility

### 5. Customizable Button Component:
- Define `ButtonProps` with `size` and `shape` in `interfaces/index.ts`
- Use it on `about.tsx` with three variations

### 6. Navigation Header:
- Build a `Header` with links to `/home`, `/about`, and `/posts`
- Import `Header` in all main pages

### 7. Display Posts with PostCard:
- Define `PostProps` in `interfaces/index.ts`
- Fetch from [JSONPlaceholder](https://jsonplaceholder.typicode.com/posts)
- Display posts on `/posts.tsx` using `PostCard.tsx`

### 8. Show Users with UserCard:
- Define `UserProps` in `interfaces/index.ts`
- Fetch from [JSONPlaceholder](https://jsonplaceholder.typicode.com/users)
- Render user list on `/users.tsx` with `UserCard.tsx`


## ✅ Expected Outcomes

- A working, responsive Next.js web app
- Clean routing between multiple pages
- Reusable, maintainable components built with TypeScript
- Working modals and buttons with props and events
- External API integration with displayed data
- Tailwind CSS for utility-first styling
- Organized, scalable codebase


## 🧑‍💻 Best Practices

### 🔹 Project Structure:
- Group components by domain (`common/`, `layout/`)
- Centralize all interfaces in one file
- Separate logic and layout

### 🔹 Component Design:
- Reuse components across pages
- Keep each component focused on one task
- Use strict typing with TypeScript

### 🔹 Code Quality:
- Enable ESLint for linting
- Maintain a consistent code style
- Comment on non-obvious logic

### 🔹 Performance:
- Optimize API calls (e.g., use `getStaticProps`)
- Use `dynamic()` for lazy-loaded components
- Use Tailwind to reduce custom CSS

### 🔹 Documentation:
- Maintain this `README.md` as the project evolves
- Comment complex logic inside components
- Use clear, meaningful commit messages


## 📎 Useful Links:

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Docs](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [JSONPlaceholder API](https://jsonplaceholder.typicode.com)
