import React from 'react';
import '../styles/Features.css';

const Features = () => {
  const featuresList = [
    {
      icon: '📅',
      title: 'Event Creation',
      description: 'Create and customize events in minutes with our intuitive dashboard.'
    },
    {
      icon: '🎟️',
      title: 'Ticketing',
      description: 'Sell tickets online and manage attendee registrations easily.'
    },
    {
      icon: '📊',
      title: 'Analytics',
      description: 'Get real-time insights about your events and attendees.'
    },
    {
      icon: '📱',
      title: 'Mobile Ready',
      description: 'Manage your events on the go with our responsive platform.'
    },
    {
      icon: '🔔',
      title: 'Notifications',
      description: 'Automated reminders and updates for you and your attendees.'
    },
    {
      icon: '🤝',
      title: 'Collaboration',
      description: 'Invite team members and assign roles for better coordination.'
    }
  ];

  return (
    <section className="features-section" id="features">
      <div className="section-header">
        <h2>Powerful Features for Event Planners</h2>
        <p>Everything you need to create successful events</p>
      </div>
      
      <div className="features-grid">
        {featuresList.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;