'use client';

import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white p-4">
      <nav className="flex gap-6 text-lg">
        <Link href="/home" className="hover:text-blue-400 transition">Home</Link>
        <Link href="/about" className="hover:text-blue-400 transition">About</Link>
        <Link href="/posts" className="hover:text-blue-400 transition">Posts</Link>
      </nav>
    </header>
  );
};

export default Header;
