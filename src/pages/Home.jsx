// Gemini 4 trying ..............

// import React, { useEffect } from "react";
// // Swiper Imports
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Navigation, Pagination } from "swiper";

// // Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// // AOS for scroll animations
// import AOS from "aos";
// import "aos/dist/aos.css";

// // Icons for Features
// import { FiEdit, FiUsers, FiSettings } from "react-icons/fi"; // Importing icons

// // Image Imports
// import banner1 from "../assets/images/banner1.jpg";
// import banner2 from "../assets/images/banner2.jpg";
// import banner3 from "../assets/images/banner3.jpg";

// import gallery1 from "../assets/images/banner1.jpg";
// import gallery2 from "../assets/images/pexels-cottonbro-6157554.jpg";
// import gallery3 from "../assets/images/pexels-levsi-31858860.jpg";
// import gallery4 from "../assets/images/FoodtoPoors.jpg";
// import gallery5 from "../assets/images/RoadWorker.jpg";
// import gallery6 from "../assets/images/Firefighter.jpg";

// const bannerImages = [banner1, banner2, banner3];

// const features = [
//   {
//     title: "Create Events",
//     description: "Easily create community-driven social service events.",
//     icon: FiEdit, // Assigned FiEdit icon
//   },
//   {
//     title: "Join Events",
//     description: "Find events near you and join to make a difference.",
//     icon: FiUsers, // Assigned FiUsers icon
//   },
//   {
//     title: "Manage Your Events",
//     description: "Keep track of events you have created or joined.",
//     icon: FiSettings, // Assigned FiSettings icon
//   },
// ];

// const galleryImages = [
//   gallery1,
//   gallery2,
//   gallery3,
//   gallery4,
//   gallery5,
//   gallery6,
// ];

// const Home = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   return (
//     <div className="space-y-18">
//       {/* Banner Section */}
//       <section className="mt-10 relative h-[500px] flex items-center justify-center bg-gray-200 dark:bg-gray-800 overflow-hidden">
//         <Swiper
//           modules={[Autoplay]}
//           spaceBetween={0}
//           slidesPerView={1}
//           loop
//           autoplay={{ delay: 4000, disableOnInteraction: false }}
//           className="absolute inset-0 w-full h-full"
//         >
//           {bannerImages.map((img, idx) => (
//             <SwiperSlide key={idx} className="relative">
//               <img
//                 src={img}
//                 alt={`Banner ${idx + 1}`}
//                 className="w-full h-full object-cover opacity-70 transform transition duration-1000 hover:scale-105"
//               />
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4 z-10">
//           <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fadeInDown">
//             Social Development Events
//           </h1>
//           <p className="text-lg md:text-2xl text-white/80 animate-fadeInUp">
//             Join hands in creating positive change! Social Development Events
//             connects communities, volunteers, and organizations through
//             meaningful events that inspire growth, learning, and social impact.
//           </p>
//         </div>
//       </section>

//       {/* Features Section - UPDATED for better design */}
//       <section className="max-w-6xl mx-auto px-4 py-16">
//         <h2 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-16 text-center tracking-tight">
//           <span className="text-blue-600 dark:text-blue-400">Core</span>{" "}
//           Features
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {features.map((feature, index) => {
//             const Icon = feature.icon; // Get the React Icon component
//             return (
//               <div
//                 key={index}
//                 data-aos="fade-up"
//                 data-aos-delay={index * 100} // Staggered animation
//                 className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 transform hover:-translate-y-1 group"
//               >
//                 <div className="flex items-center space-x-4 mb-4">
//                   {/* Feature Icon with styling */}
//                   <div className="p-3 bg-blue-500 text-white rounded-full transition-colors duration-300 group-hover:bg-blue-600 dark:bg-blue-600 dark:group-hover:bg-blue-500">
//                     <Icon className="w-6 h-6" />
//                   </div>
//                   {/* Feature Title */}
//                   <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
//                     {feature.title}
//                   </h3>
//                 </div>
//                 {/* Feature Description */}
//                 <p className="text-gray-600 dark:text-gray-300 mt-4 leading-relaxed">
//                   {feature.description}
//                 </p>
//               </div>
//             );
//           })}
//         </div>
//       </section>

//       {/* Gallery Section - UPDATED (Text removed) */}
//       <section className="max-w-6xl mx-auto px-4 ">
//         <h2 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-16 text-center tracking-tight">
//           <span className="text-blue-600 dark:text-blue-400">Our</span> Impact
//           in Action
//         </h2>

//         <Swiper
//           modules={[Navigation, Pagination, Autoplay]}
//           spaceBetween={30} // Increased space between slides
//           slidesPerView={1}
//           breakpoints={{
//             640: { slidesPerView: 2, spaceBetween: 20 },
//             1024: { slidesPerView: 3, spaceBetween: 30 },
//           }}
//           navigation={{
//             nextEl: ".swiper-button-next",
//             prevEl: ".swiper-button-prev",
//           }}
//           pagination={{ clickable: true }}
//           autoplay={{ delay: 3500, disableOnInteraction: false }}
//           className="relative pb-10" // Add padding bottom for pagination dots
//         >
//           {galleryImages.map((img, idx) => (
//             <SwiperSlide key={idx}>
//               <div
//                 data-aos="fade-up" // Scroll effect
//                 data-aos-delay={idx * 150} // Staggered animation
//                 className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-103 hover:shadow-2xl border border-gray-100 dark:border-gray-700 cursor-pointer group"
//               >
//                 {/* Image and its container is all that remains */}
//                 <div className="h-60 sm:h-72 overflow-hidden">
//                   <img
//                     src={img}
//                     alt={`Gallery ${idx + 1}`}
//                     className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110" // Zoom on hover
//                   />
//                 </div>
//                 {/* REMOVED: Placeholder text div */}
//               </div>
//             </SwiperSlide>
//           ))}
//           {/* Custom Navigation Arrows if needed (or let Swiper handle defaults) */}
//           <div className="swiper-button-prev custom-swiper-nav-btn !left-2 !-translate-y-1/2"></div>
//           <div className="swiper-button-next custom-swiper-nav-btn !right-2 !-translate-y-1/2"></div>
//         </Swiper>
//       </section>

//       {/* Newsletter Section */}
//       <section className="max-w-3xl mx-auto px-4 text-center mt-16">
//         <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
//           Subscribe to Our Newsletter
//         </h2>
//         <p className="text-gray-600 dark:text-gray-300 mb-6">
//           Get updates on the latest social development events in your area.
//         </p>
//         <form className="flex flex-col sm:flex-row justify-center gap-4">
//           <input
//             type="email"
//             placeholder="Enter your email"
//             className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-gray-700 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-auto"
//             required
//           />
//           <button
//             type="submit"
//             className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
//           >
//             Subscribe
//           </button>
//         </form>
//       </section>
//     </div>
//   );
// };

// export default Home;


// .....................Gekini 5 ,................Nessettler

import React, { useEffect } from "react";
// Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// AOS for scroll animations
import AOS from "aos";
import "aos/dist/aos.css";

// Icons for Features
import { FiEdit, FiUsers, FiSettings, FiMail } from "react-icons/fi"; // Added FiMail icon
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
    icon: FiEdit, // Assigned FiEdit icon
  },
  {
    title: "Join Events",
    description: "Find events near you and join to make a difference.",
    icon: FiUsers, // Assigned FiUsers icon
  },
  {
    title: "Manage Your Events",
    description: "Keep track of events you have created or joined.",
    icon: FiSettings, // Assigned FiSettings icon
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
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="space-y-18">
      {/* Banner Section */}
      <section className="mt-10 relative h-[500px] flex items-center justify-center bg-gray-200 dark:bg-gray-800 overflow-hidden">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          loop
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          className="absolute inset-0 w-full h-full"
        >
          {bannerImages.map((img, idx) => (
            <SwiperSlide key={idx} className="relative">
              <img
                src={img}
                alt={`Banner ${idx + 1}`}
                className="w-full h-full object-cover opacity-70 transform transition duration-1000 hover:scale-105"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4 z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fadeInDown">
            Social Development Events
          </h1>
          <p className="text-lg md:text-2xl text-white/80 animate-fadeInUp">
            Join hands in creating positive change! Social Development Events
            connects communities, volunteers, and organizations through
            meaningful events that inspire growth, learning, and social impact.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-16 text-center tracking-tight">
          <span className="text-blue-600 dark:text-blue-400">Core</span>{" "}
          Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon; // Get the React Icon component
            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100} // Staggered animation
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 transform hover:-translate-y-1 group"
              >
                <div className="flex items-center space-x-4 mb-4">
                  {/* Feature Icon with styling */}
                  <div className="p-3 bg-blue-500 text-white rounded-full transition-colors duration-300 group-hover:bg-blue-600 dark:bg-blue-600 dark:group-hover:bg-blue-500">
                    <Icon className="w-6 h-6" />
                  </div>
                  {/* Feature Title */}
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                    {feature.title}
                  </h3>
                </div>
                {/* Feature Description */}
                <p className="text-gray-600 dark:text-gray-300 mt-4 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="max-w-6xl mx-auto px-4 ">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-16 text-center tracking-tight">
          <span className="text-blue-600 dark:text-blue-400">Our</span> Impact
          in Action
        </h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30} // Increased space between slides
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          className="relative pb-10" // Add padding bottom for pagination dots
        >
          {galleryImages.map((img, idx) => (
            <SwiperSlide key={idx}>
              <div
                data-aos="fade-up" // Scroll effect
                data-aos-delay={idx * 150} // Staggered animation
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-103 hover:shadow-2xl border border-gray-100 dark:border-gray-700 cursor-pointer group"
              >
                {/* Image and its container is all that remains */}
                <div className="h-60 sm:h-72 overflow-hidden">
                  <img
                    src={img}
                    alt={`Gallery ${idx + 1}`}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110" // Zoom on hover
                  />
                </div>
                {/* REMOVED: Placeholder text div */}
              </div>
            </SwiperSlide>
          ))}
          {/* Custom Navigation Arrows if needed (or let Swiper handle defaults) */}
          <div className="swiper-button-prev custom-swiper-nav-btn !left-2 !-translate-y-1/2"></div>
          <div className="swiper-button-next custom-swiper-nav-btn !right-2 !-translate-y-1/2"></div>
        </Swiper>
      </section>

      {/* Newsletter Section - BEAUTIFIED */}
      <section className="max-w-4xl mx-auto px-4 py-12 mb-16">
        <div
          data-aos="fade-up" // Added AOS effect
          className="bg-blue-50 dark:bg-gray-700 p-8 md:p-12 rounded-3xl shadow-2xl border-t-4 border-blue-600 dark:border-blue-400 text-center"
        >
          {/* Icon for visual appeal */}
          <FiMail className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />

          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-4">
            Join Our Movement!
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Get the latest updates on community events, volunteering
            opportunities, and positive impact stories delivered straight to
            your inbox.
          </p>
          <form className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="px-6 py-3 rounded-full border-2 border-blue-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 w-full transition-all duration-300 shadow-md"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
            >
              Subscribe Now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;