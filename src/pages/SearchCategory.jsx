import React from 'react';
import { useParams } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import '../styles/SearchCategory.scss';

const services = [
  { title: 'Cleaning', icon: 'https://openui.fly.dev/openui/24x24.svg?text=🧼' },
  { title: 'Repair', icon: 'https://openui.fly.dev/openui/24x24.svg?text=🔧' },
  { title: 'Painting', icon: 'https://openui.fly.dev/openui/24x24.svg?text=🎨' },
  { title: 'Shifting', icon: 'https://openui.fly.dev/openui/24x24.svg?text=🚚' },
  { title: 'Plumbing', icon: 'https://openui.fly.dev/openui/24x24.svg?text=🚰' },
  { title: 'Electric', icon: 'https://openui.fly.dev/openui/24x24.svg?text=⚡' },
];

const SearchCategory = () => {
  const { category } = useParams();
  const filteredServices = services.filter(service => service.title.toLowerCase() === category.toLowerCase());

  return (
    <div className="search-category">
      <h1>Results for "{category}"</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {filteredServices.map(service => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </div>
    </div>
  );
};

export default SearchCategory;