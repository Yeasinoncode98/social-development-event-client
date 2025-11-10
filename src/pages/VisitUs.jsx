import React, { useEffect, useState } from "react";

const VisitUs = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/visitus.json") // directly fetch from public folder
      .then((res) => res.json())
      .then((data) => {
        setImages(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load gallery:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <span className="loading loading-bars loading-xl text-blue-600"></span>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Page Header */}
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
        Visit Us & Our Social Development Gallery
      </h1>
      <p className="text-center text-gray-500 mb-12">
        Explore our community initiatives and social development events through
        our gallery.
      </p>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((item, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
              loading="lazy" // lazy load images
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                {item.title}
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VisitUs;
