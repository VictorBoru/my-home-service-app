import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Topbar from './components/Topbar';
import SearchBar from './components/SearchBar';
import ServiceCard from './components/ServiceCard';
import './styles/App.scss';

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

const Services = () => (
  <div>
    <h1>Our Services</h1>
    {/* Add content for the services page */}
  </div>
);

const About = () => (
  <div>
    <h1>About Us</h1>
    {/* Add content for the about page */}
  </div>
);

const Login = () => (
  <div>
    <h1>Login</h1>
    {/* Add content for the login page */}
  </div>
);

const SearchCategory = () => (
  <div>
    <h1>Search Category</h1>
    {/* Add content for the search category page */}
  </div>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search/:category" element={<SearchCategory />} />
      </Routes>
    </Router>
  );
};

export default App;