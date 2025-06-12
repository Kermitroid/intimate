import * as React from 'react';

function Sidebar() {
  return (
    <div className="space-y-8">
      <div className="bg-purple-800/30 backdrop-blur-sm rounded-xl p-6 border border-purple-600/20">
        <h4 className="text-white font-semibold mb-4">Top Rated</h4>
        <div className="text-center text-purple-300 py-8">
          <p className="text-sm">No content available yet</p>
        </div>
      </div>

      <div className="bg-purple-800/30 backdrop-blur-sm rounded-xl p-6 border border-purple-600/20">
        <h4 className="text-white font-semibold mb-4">Live Models</h4>
        <div className="text-center text-purple-300 py-8">
          <p className="text-sm">No live streams active</p>
          <button 
            onClick={() => window.location.href = '/live'}
            className="text-purple-400 hover:text-white text-xs mt-2 underline"
          >
            Go Live
          </button>
        </div>
      </div>

      <div className="bg-purple-800/30 backdrop-blur-sm rounded-xl p-6 border border-purple-600/20">
        <h4 className="text-white font-semibold mb-4">Newest Uploads</h4>
        <div className="text-center text-purple-300 py-8">
          <p className="text-sm">No recent uploads</p>
          <button 
            onClick={() => window.location.href = '/upload'}
            className="text-purple-400 hover:text-white text-xs mt-2 underline"
          >
            Upload Content
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;