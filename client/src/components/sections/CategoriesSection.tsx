import * as React from 'react';
import CategoryCard from '@/components/ui/CategoryCard';

function CategoriesSection() {
  const categories = [
    { name: 'Popular', icon: '🔥', count: '0', href: '/categories/popular' },
    { name: 'New', icon: '✨', count: '0', href: '/categories/new' },
    { name: 'Trending', icon: '📈', count: '0', href: '/categories/trending' },
    { name: 'Live', icon: '🎥', count: '0', href: '/live' },
    { name: 'Premium', icon: '👑', count: '0', href: '/premium' },
    { name: 'HD', icon: '💎', count: '0', href: '/categories/hd' }
  ];

  return (
    <section className="mb-12">
      <h3 className="text-3xl font-bold text-white mb-8">Browse Categories</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {categories.map((category) => (
          <CategoryCard key={category.name} category={category} />
        ))}
      </div>
    </section>
  );
}

export default CategoriesSection;