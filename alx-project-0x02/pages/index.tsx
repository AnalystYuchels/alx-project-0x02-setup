// pages/index.tsx

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
