import React from 'react';
import { useParams } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';

const services = [
  { title: 'House Cleaning', description: 'Detailed house cleaning', category: 'Cleaning' },
  { title: 'Washing Clothes', description: 'Professional laundry service', category: 'Cleaning' },
  { title: 'Bathroom Cleaning', description: 'Bathroom cleaning service', category: 'Cleaning' },
  { title: 'Floor Cleaning', description: 'Floor cleaning service', category: 'Cleaning' },
  { title: 'House Repairing', description: 'House repair service', category: 'Repair' },
];

const SearchCategory = () => {
  const { category } = useParams();
  const filteredServices = services.filter(service => service.category.toLowerCase() === category.toLowerCase());

  return (
    <div className="search-category">
      {filteredServices.map(service => (
        <ServiceCard key={service.title} service={service} />
      ))}
    </div>
  );
};

export default SearchCategory;
