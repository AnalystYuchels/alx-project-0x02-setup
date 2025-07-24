# Next.js Project Setup and Basics

![Next.js](https://img.shields.io/badge/Next.js-13%2B-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-Enabled-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-Utility--First-green)
![Status](https://img.shields.io/badge/Stage-Setup_Complete-success)

## 📌 Objective

Scaffold a Next.js project with **TypeScript**, **ESLint**, and **Tailwind CSS**. Set up a basic folder structure and create a simple homepage to verify the environment is correctly configured.


## 🛠️ Setup Instructions

### 1. Create Project

Generate a new project using the command below:

```bash
npx create-next-app@latest alx-project-2 --typescript
````

Enable the following:

* ✅ TypeScript
* ✅ ESLint
* ✅ Tailwind CSS

Then navigate into the project:

```bash
cd alx-project-2
```


### 2. Folder Structure

Inside the project, create the following folders and files:

```
alx-project-0x02/
├── components/
│   └── layout/
│       └── Header.tsx
├── interfaces/
│   └── index.ts
├── public/
│   └── assets/
│       └── images/
├── pages/
│   └── index.tsx
├── styles/
│   └── globals.css
```


### 3. Header Component

**File:** `components/layout/Header.tsx`

```tsx
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="font-bold">My Next App</h1>
      <nav className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
};

export default Header;
```


### 4. Home Page

**File:** `pages/index.tsx`

```tsx
import Head from 'next/head';
import Header from '../components/layout/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome</title>
      </Head>
      <Header />
      <main className="p-6 text-center">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to ALX Project 02</h1>
        <p className="mt-4 text-gray-600">This is a Next.js + TypeScript + Tailwind CSS starter</p>
      </main>
    </>
  );
}
```


### 5. Run the App

Run your development server:

```bash
npm run dev -- -p 3000
```

Visit your app at:
🔗 **[http://localhost:3000](http://localhost:3000)**


## ✅ Result

* Project scaffolding is complete.
* ESLint, TypeScript, and Tailwind CSS are successfully integrated.
* Folder structure is in place for further development.
* Basic homepage with a reusable `Header` component is functional.

