// Swiper jss
import React from "react";
// Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";
// Corrected Swiper Import
import { Autoplay, Navigation, Pagination } from "swiper";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Image Imports
import banner1 from "../assets/images/banner1.jpg";
import banner2 from "../assets/images/banner2.jpg";
import banner3 from "../assets/images/banner3.jpg";

import gallery1 from "../assets/images/banner1.jpg";
import gallery2 from "../assets/images/pexels-cottonbro-6157554.jpg";
import gallery3 from "../assets/images/pexels-levsi-31858860.jpg";
import gallery4 from "../assets/images/FoodtoPoors.jpg";
import gallery5 from "../assets/images/RoadWorker.jpg";
import gallery6 from "../assets/images/Firefighter.jpg";

const bannerImages = [banner1, banner2, banner3];

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

const galleryImages = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
];

const Home = () => {
  return (
    <div className="space-y-18">
      {/* Banner Section */}
      {/* We keep the height and relative positioning on the parent section */}
      <section className="mt-10 relative h-[500px] flex items-center justify-center bg-gray-200 dark:bg-gray-800">
        {/* Swiper Container for Banner (Background) */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          className="absolute inset-0 w-full h-full"
        >
          {bannerImages.map((img, idx) => (
            <SwiperSlide key={idx} className="relative">
              <img
                src={img}
                alt={`Banner ${idx + 1}`}
                className="w-full h-full object-cover opacity-70"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Text Overlay (ABSOLUTE CENTERING METHOD APPLIED) */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4 z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Social Development Events
          </h1>
          <p className="text-lg md:text-2xl text-white/80">
            Join hands in creating positive change! Social Development Events
            connects communities, volunteers, and organizations through
            meaningful events that inspire growth, learning, and social impact.
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
          Social Events
        </h2>

        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            navigation={true}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            className="mySwiper"
          >
            {galleryImages.map((img, idx) => (
              <SwiperSlide key={idx}>
                <div className="overflow-hidden rounded-lg shadow-xl">
                  <img
                    src={img}
                    alt={`Gallery ${idx + 1}`}
                    className="w-full h-80 object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
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
