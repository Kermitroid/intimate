import * as React from 'react';
import { Heart } from 'lucide-react';

function Footer() {
  const handleNavigation = (path: string) => {
    window.location.href = path;
  };

  const handleExternalLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="bg-purple-950/80 backdrop-blur-md border-t border-purple-700/50 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => handleNavigation('/')}>
              <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">IV</span>
              </div>
              <h3 className="text-xl font-bold text-white">Intimate Videos</h3>
            </div>
            <p className="text-purple-300 text-sm">
              Premium adult entertainment platform providing high-quality content for mature audiences.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-purple-300 text-sm">
              <li>
                <button 
                  onClick={() => handleNavigation('/')}
                  className="hover:text-white transition-colors text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('/categories')}
                  className="hover:text-white transition-colors text-left"
                >
                  Categories
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('/live')}
                  className="hover:text-white transition-colors text-left"
                >
                  Live Shows
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('/upload')}
                  className="hover:text-white transition-colors text-left"
                >
                  Upload
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-purple-300 text-sm">
              <li>
                <button 
                  onClick={() => handleNavigation('/privacy')}
                  className="hover:text-white transition-colors text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('/terms')}
                  className="hover:text-white transition-colors text-left"
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('/contact')}
                  className="hover:text-white transition-colors text-left"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('/dmca')}
                  className="hover:text-white transition-colors text-left"
                >
                  DMCA
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-3">
              <button 
                onClick={() => handleExternalLink('https://twitter.com')}
                className="w-8 h-8 bg-purple-700 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors"
              >
                <span className="text-white text-xs">T</span>
              </button>
              <button 
                onClick={() => handleExternalLink('https://reddit.com')}
                className="w-8 h-8 bg-purple-700 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors"
              >
                <span className="text-white text-xs">R</span>
              </button>
              <button 
                onClick={() => handleExternalLink('https://discord.com')}
                className="w-8 h-8 bg-purple-700 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors"
              >
                <span className="text-white text-xs">D</span>
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-purple-700/50 mt-8 pt-8 text-center">
          <p className="text-purple-300 text-sm flex items-center justify-center space-x-1">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-400" fill="currentColor" />
            <span>for adults 18+</span>
          </p>
          <p className="text-purple-400 text-xs mt-2">
            © 2024 Intimate Videos. All rights reserved. Must be 18+ to access.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;