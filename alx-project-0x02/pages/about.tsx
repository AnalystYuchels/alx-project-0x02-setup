'use client';

import React from 'react';
import Button from '@/components/common/Button';

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-gray-100 p-8">
      <h1 className="text-2xl font-bold mb-6">Reusable Button Demo</h1>
      <Button size="small" shape="rounded-sm">Small Button</Button>
      <Button size="medium" shape="rounded-md">Medium Button</Button>
      <Button size="large" shape="rounded-full">Large Button</Button>
    </div>
  );
};

export default AboutPage;

import Header from '@/components/layout/Header';

const About = () => {
  return (
    <>
      <Header />
      <main className="p-8">
        <h1 className="text-2xl font-bold">About Us</h1>
      </main>
    </>
  );
};

export default About;
