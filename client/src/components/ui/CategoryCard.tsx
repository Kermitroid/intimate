import * as React from 'react';

interface CategoryCardProps {
  category: {
    name: string;
    icon: string;
    count: string;
    href: string;
  };
}

function CategoryCard({ category }: CategoryCardProps) {
  const handleClick = () => {
    window.location.href = category.href;
  };

  return (
    <div 
      onClick={handleClick}
      className="bg-purple-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-purple-700/50 transition-all cursor-pointer group border border-purple-600/30"
    >
      <div className="text-center space-y-3">
        <div className="text-3xl group-hover:scale-110 transition-transform">
          {category.icon}
        </div>
        <h4 className="text-white font-semibold">{category.name}</h4>
        <p className="text-purple-300 text-sm">Explore {category.name.toLowerCase()}</p>
      </div>
    </div>
  );
}

export default CategoryCard;