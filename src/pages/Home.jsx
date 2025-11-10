import React from "react";
import bannerImg from "../assets/images/banner1.jpg"; // example
import gallery1 from "../assets/images/banner1.jpg";
import gallery2 from "../assets/images/banner1.jpg";
import gallery3 from "../assets/images/banner1.jpg";

const features = [
  {
    title: "Create Events",
    description: "Easily create community-driven social service events.",
  },
  {
    title: "Join Events",
    description: "Find events near you and join to make a difference.",
  },
  {
    title: "Manage Your Events",
    description: "Keep track of events you have created or joined.",
  },
];

const Home = () => {
  return (
    <div className="space-y-16">
      {/* Banner Section */}
      <section className="relative h-[500px] flex items-center justify-center bg-gray-200 dark:bg-gray-800">
        <img
          src={bannerImg}
          alt="Banner"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="relative text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Social Development Events
          </h1>
          <p className="text-lg md:text-2xl text-white">
            Join or create events to make a difference in your community
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8 text-center">
          Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8 text-center">
          Event Gallery
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[gallery1, gallery2, gallery3].map((img, idx) => (
            <div key={idx} className="overflow-hidden rounded-lg shadow-md">
              <img
                src={img}
                alt={`Gallery ${idx + 1}`}
                className="w-full h-64 object-cover transform hover:scale-105 transition"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Get updates on the latest social development events in your area.
        </p>
        <form className="flex flex-col sm:flex-row justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-gray-700 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-auto"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Subscribe
          </button>
        </form>
      </section>
    </div>
  );
};

export default Home;
