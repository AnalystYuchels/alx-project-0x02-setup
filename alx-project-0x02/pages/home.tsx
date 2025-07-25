export default HomePage;

import Header from '@/components/layout/Header';

const Home = () => {
  return (
    <>
      <Header />
      <main className="p-8">
        <h1 className="text-2xl font-bold">Welcome to the Home Page</h1>
      </main>
    </>
  );
};

export default Home;

