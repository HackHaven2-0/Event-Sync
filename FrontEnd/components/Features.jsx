import React from "react";

const Features = () => {
  const featuresList = [
    {
      icon: "📅",
      title: "Event Creation",
      description:
        "Create and customize events in minutes with our intuitive dashboard.",
    },
    {
      icon: "🎤",
      title: "Keynote Speeches",
      description:
        "Hear from industry leaders about the latest trends and innovations.",
    },
    {
      icon: "🚀",
      title: "Exhibition of Technologies",
      description:
        "Explore cutting-edge technologies and solutions from exhibitors.",
    },
    {
      icon: "📱",
      title: "Mobile Ready",
      description: "Manage your events on the go with our responsive platform.",
    },
    {
      icon: "🛠️",
      title: "Hands-on Workshops",
      description:
        "Participate in interactive workshops to enhance your skills.",
    },
    {
      icon: "🤝",
      title: "Networking Opportunities",
      description:
        "Connect with like-minded professionals and expand your network.",
    },
  ];

  return (
    <section className="py-15 px-4 max-w-7xl mx-auto scroll-mt-20" id="feature">
      <div className="text-center mb-16">
        <h2 id="features" className="text-4xl font-bold text-gray-800">
          Powerful Features for Event Planners
        </h2>
        <p className="text-lg text-gray-600 mt-4">
          Everything you need to create successful events
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuresList.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transform transition hover:-translate-y-1">
            <div className="text-5xl mb-4">{feature.icon}</div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
