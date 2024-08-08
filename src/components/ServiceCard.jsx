import React from 'react';
import '../styles/ServiceCard.scss';

const ServiceCard = ({ service }) => (
  <div className="service-card">
    <img src={service.icon} alt={service.title} />
    <h3>{service.title}</h3>
  </div>
);

export default ServiceCard;
