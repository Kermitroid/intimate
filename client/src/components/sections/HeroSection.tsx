import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Play, Heart } from 'lucide-react';

function HeroSection() {
  const handleWatchNow = () => {
    // Navigate to featured video player
    window.location.href = '/video/featured';
  };

  const handleSaveForLater = () => {
    // Add to user's saved videos
    console.log('Adding to saved videos...');
    // This would typically make an API call to save the video
  };

  return (
    <section className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-purple-800 to-purple-600 p-8 mb-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
            Premium Content
          </h2>
          <p className="text-purple-100 text-lg">
            Discover exclusive content from verified creators. High-quality videos updated daily.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={handleWatchNow}
              className="bg-white text-purple-900 hover:bg-purple-50 px-8 py-3 text-lg font-semibold"
            >
              <Play className="w-5 h-5 mr-2" />
              Explore Now
            </Button>
            <Button 
              onClick={handleSaveForLater}
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-purple-900 px-8 py-3 text-lg"
            >
              <Heart className="w-5 h-5 mr-2" />
              Get Started
            </Button>
          </div>
        </div>
        
        <div className="relative">
          <div className="aspect-video bg-gradient-to-br from-purple-700 to-purple-500 rounded-xl flex items-center justify-center relative overflow-hidden cursor-pointer" onClick={handleWatchNow}>
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10 bg-white/20 backdrop-blur-sm rounded-full p-6 hover:bg-white/30 transition-colors">
              <Play className="w-12 h-12 text-white" fill="white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;