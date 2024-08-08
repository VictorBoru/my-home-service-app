import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ServiceCard.scss';

const ServiceCard = ({ service }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/search/${service.title.toLowerCase()}`);
  };

  return (
    <div className="service-card" onClick={handleClick}>
      <img src={service.icon} alt={service.title} />
      <h3>{service.title}</h3>
    </div>
  );
};

export default ServiceCard;