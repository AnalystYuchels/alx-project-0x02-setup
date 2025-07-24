// components/layout/Header.tsx

import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="font-bold">My Next App</h1>
      <nav className="space-x-4">
        <Link href="/">Main</Link>
        <Link href="/home">Home</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
};

export default Header;
