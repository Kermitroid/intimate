import * as React from 'react';
import { Button } from '@/components/ui/button';
import { User, Search, Menu, Download } from 'lucide-react';

function Header() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isDownloading, setIsDownloading] = React.useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  const handleNavigation = (path: string) => {
    window.location.href = path;
  };

  const handleUserAccount = () => {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem('user_token');
    if (isLoggedIn) {
      window.location.href = '/profile';
    } else {
      window.location.href = '/login';
    }
  };

  const handleDownloadProject = async () => {
    setIsDownloading(true);
    try {
      const response = await fetch('/api/download-project');
      
      if (!response.ok) {
        throw new Error('Download failed');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'intimate-videos-xhamster-clone.zip';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Download failed:', error);
      alert('Download failed. Please try again.');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <header className="bg-purple-900/80 backdrop-blur-md border-b border-purple-700/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => handleNavigation('/')}>
              <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">IV</span>
              </div>
              <h1 className="text-2xl font-bold text-white">Intimate Videos</h1>
            </div>
            
            <nav className="hidden md:flex items-center space-x-6">
              <button 
                onClick={() => handleNavigation('/')}
                className="text-purple-200 hover:text-white transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => handleNavigation('/categories')}
                className="text-purple-200 hover:text-white transition-colors"
              >
                Categories
              </button>
              <button 
                onClick={() => handleNavigation('/live')}
                className="text-purple-200 hover:text-white transition-colors"
              >
                Live
              </button>
              <button 
                onClick={() => handleNavigation('/upload')}
                className="text-purple-200 hover:text-white transition-colors"
              >
                Upload
              </button>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <form onSubmit={handleSearch} className="hidden lg:flex items-center bg-purple-800/50 rounded-lg px-4 py-2">
              <Search className="w-4 h-4 text-purple-300 mr-2" />
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search videos..." 
                className="bg-transparent text-white placeholder:text-purple-300 border-none outline-none w-48"
              />
            </form>

            <Button 
              onClick={handleDownloadProject}
              disabled={isDownloading}
              className="hidden md:flex bg-purple-600 hover:bg-purple-700 text-white px-4 py-2"
              size="sm"
            >
              <Download className="w-4 h-4 mr-2" />
              {isDownloading ? 'Downloading...' : 'Download Source'}
            </Button>
            
            <Button 
              onClick={handleUserAccount}
              variant="ghost" 
              className="text-purple-200 hover:text-white hover:bg-purple-800/50"
            >
              <User className="w-5 h-5" />
            </Button>
            
            <Button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              variant="ghost" 
              className="md:hidden text-purple-200 hover:text-white hover:bg-purple-800/50"
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-purple-700/50 pt-4">
            <nav className="flex flex-col space-y-3">
              <button 
                onClick={() => handleNavigation('/')}
                className="text-purple-200 hover:text-white transition-colors text-left"
              >
                Home
              </button>
              <button 
                onClick={() => handleNavigation('/categories')}
                className="text-purple-200 hover:text-white transition-colors text-left"
              >
                Categories
              </button>
              <button 
                onClick={() => handleNavigation('/live')}
                className="text-purple-200 hover:text-white transition-colors text-left"
              >
                Live
              </button>
              <button 
                onClick={() => handleNavigation('/upload')}
                className="text-purple-200 hover:text-white transition-colors text-left"
              >
                Upload
              </button>
              <Button 
                onClick={handleDownloadProject}
                disabled={isDownloading}
                className="bg-purple-600 hover:bg-purple-700 text-white w-full mt-2"
                size="sm"
              >
                <Download className="w-4 h-4 mr-2" />
                {isDownloading ? 'Downloading...' : 'Download Source Code'}
              </Button>
              <form onSubmit={handleSearch} className="flex items-center bg-purple-800/50 rounded-lg px-4 py-2 mt-4">
                <Search className="w-4 h-4 text-purple-300 mr-2" />
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search videos..." 
                  className="bg-transparent text-white placeholder:text-purple-300 border-none outline-none flex-1"
                />
              </form>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;