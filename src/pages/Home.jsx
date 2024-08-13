import React from 'react';
import Topbar from '../components/Topbar';
import SearchBar from '../components/SearchBar';
import ServiceCard from '../components/ServiceCard';

const services = [
  { title: 'Cleaning', icon: 'https://openui.fly.dev/openui/24x24.svg?text=🧼' },
  { title: 'Repair', icon: 'https://openui.fly.dev/openui/24x24.svg?text=🔧' },
  { title: 'Painting', icon: 'https://openui.fly.dev/openui/24x24.svg?text=🎨' },
  { title: 'Shifting', icon: 'https://openui.fly.dev/openui/24x24.svg?text=🚚' },
  { title: 'Plumbing', icon: 'https://openui.fly.dev/openui/24x24.svg?text=🚰' },
  { title: 'Electric', icon: 'https://openui.fly.dev/openui/24x24.svg?text=⚡' },
];

const Home = () => (
  <div className="home bg-background p-8">
    <Topbar />
    <h1 className="text-4xl font-bold text-primary mb-4">Find Home <span className="text-secondary">Service/Repair</span> Near You</h1>
    <p className="text-muted-foreground mb-6">Explore Best Home Service & Repair near you</p>
    <SearchBar />
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {services.map(service => (
        <ServiceCard key={service.title} service={service} />
      ))}
    </div>
  </div>
);

export default Home;