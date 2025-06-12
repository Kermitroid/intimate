import * as React from 'react';
import Header from '@/components/layout/Header';
import HeroSection from '@/components/sections/HeroSection';
import CategoriesSection from '@/components/sections/CategoriesSection';
import VideoGallery from '@/components/sections/VideoGallery';
import Sidebar from '@/components/layout/Sidebar';
import Footer from '@/components/layout/Footer';

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-purple-900 to-purple-800">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <HeroSection />
        <CategoriesSection />
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-12">
          <div className="lg:col-span-3">
            <VideoGallery />
          </div>
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;