import * as React from 'react';
import { Button } from '@/components/ui/button';

function VideoGallery() {
  const [sortBy, setSortBy] = React.useState('recent');
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(event.target.value);
    // This would trigger a new API call to fetch sorted videos
    console.log('Sorting by:', event.target.value);
  };

  const handleLoadMore = () => {
    setIsLoading(true);
    // Simulate loading more videos
    setTimeout(() => {
      setIsLoading(false);
      console.log('Loading more videos...');
    }, 1000);
  };

  return (
    <section>
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-3xl font-bold text-white">Latest Videos</h3>
        <select 
          value={sortBy}
          onChange={handleSortChange}
          className="bg-purple-800/50 text-white border border-purple-600/50 rounded-lg px-4 py-2 outline-none focus:border-purple-400"
        >
          <option value="recent">Most Recent</option>
          <option value="popular">Most Popular</option>
          <option value="rated">Highest Rated</option>
          <option value="views">Most Viewed</option>
        </select>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
        <div className="text-center text-purple-300 py-16 col-span-full">
          <p className="text-lg">No videos available. Upload content to get started.</p>
          <Button 
            className="mt-4 bg-purple-600 hover:bg-purple-700"
            onClick={() => window.location.href = '/upload'}
          >
            Upload Video
          </Button>
        </div>
      </div>
      
      <div className="text-center">
        <Button 
          onClick={handleLoadMore}
          disabled={isLoading}
          className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3"
        >
          {isLoading ? 'Loading...' : 'Load More Videos'}
        </Button>
      </div>
    </section>
  );
}

export default VideoGallery;