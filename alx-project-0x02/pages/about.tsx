import Head from 'next/head';
import Header from '../components/layout/Header';

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About Page</title>
      </Head>
      <Header />
      <main className="p-6 text-center">
        <h1 className="text-3xl font-bold text-gray-800">About This Project</h1>
        <p className="mt-4 text-gray-600">This page gives information about the Next.js setup demo.</p>
      </main>
    </>
  );
};

export default AboutPage;
