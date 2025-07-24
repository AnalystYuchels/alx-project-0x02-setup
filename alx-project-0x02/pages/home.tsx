// pages/home.tsx

import Head from 'next/head';
import Header from '../components/layout/Header';
import Card from '../components/common/Card';

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      <main className="p-6 space-y-6">
        <h1 className="text-3xl font-bold text-center">Welcome to the Home Page</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card title="Card One" content="This is the first card's content." />
          <Card title="Card Two" content="Here is some more information in another card." />
          <Card title="Card Three" content="Reusable components make life easier!" />
        </div>
      </main>
    </>
  );
};

export default HomePage;
