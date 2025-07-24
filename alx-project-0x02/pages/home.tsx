import Head from 'next/head';
import Header from '../components/layout/Header';

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <Header />
      <main className="p-6 text-center">
        <h1 className="text-3xl font-bold text-gray-800">Welcome to the Home Page</h1>
      </main>
    </>
  );
};

export default HomePage;
