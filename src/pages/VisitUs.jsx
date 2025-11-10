import React from "react";

// Import images from src/images
import gallery1 from "../assets/images/FoodtoPoors.jpg";
import gallery2 from "../assets/images/Firefighter.jpg";
import gallery3 from "../assets/images/Firefighter.jpg";
import gallery4 from "../assets/images/Firefighter.jpg";
import gallery5 from "../assets/images/Firefighter.jpg";
import gallery6 from "../assets/images/Firefighter.jpg";

const images = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];

const VisitUs = () => {
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
        {images.map((img, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300"
          >
            <img
              src={img}
              alt={`Gallery ${index + 1}`}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                Event {index + 1}
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Description about this social development initiative or event.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VisitUs;
