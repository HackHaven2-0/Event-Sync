import React from 'react';

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
    <section className="py-24 px-4 max-w-7xl mx-auto" id="features">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-800">Powerful Features for Event Planners</h2>
        <p className="text-lg text-gray-600 mt-4">Everything you need to create successful events</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuresList.map((feature, index) => (
          <div
            className="bg-white p-8 rounded-lg shadow-lg transform transition-all hover:translate-y-1 mx-4"
            key={index}
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">{feature.title}</h3>
            <p className="text-gray-600 leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
