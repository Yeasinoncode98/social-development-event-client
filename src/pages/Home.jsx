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
import {
  FiEdit,
  FiUsers,
  FiSettings,
  FiMail,
  FiPhone,
  FiStar,
  FiAward,
} from "react-icons/fi";
import { HiMail } from "react-icons/hi";

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
    icon: FiEdit,
  },
  {
    title: "Join Events",
    description: "Find events near you and join to make a difference.",
    icon: FiUsers,
  },
  {
    title: "Manage Your Events",
    description: "Keep track of events you have created or joined.",
    icon: FiSettings,
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

// Best Social Event Handlers Data
const topHandlers = [
  {
    id: 1,
    name: "Sarah Anderson",
    age: 24,
    expertise: "Community Outreach & Environmental Campaigns",
    email: "sarah.anderson@socials.com",
    phone: "+1 (555) 123-4567",
    rating: 4.9,
    image:
      "https://i.ibb.co.com/tP2qQ5Qq/ayo-ogunseinde-6-W4-F62s-N-y-I-unsplash.jpg",
    events: 127,
    badge: "Gold Handler",
    color: "from-amber-400 to-yellow-600",
  },
  {
    id: 2,
    name: "Michael Chen",
    age: 28,
    expertise: "Youth Development & Educational Programs",
    email: "michael.chen@socials.com",
    phone: "+1 (555) 234-5678",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    events: 98,
    badge: "Silver Handler",
    color: "from-gray-400 to-gray-600",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    age: 26,
    expertise: "Disaster Relief & Emergency Response",
    email: "emily.rodriguez@socials.com",
    phone: "+1 (555) 345-6789",
    rating: 5.0,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    events: 156,
    badge: "Platinum Handler",
    color: "from-purple-400 to-indigo-600",
  },
];

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="space-y-18  min-h-screen bg-white dark:bg-gray-900">
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
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-4 animate-fadeInDown">
            Social Development Events
          </h1>
          <p className="text-lg md:text-2xl text-[#B7E5CD] animate-fadeInUp">
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
            const Icon = feature.icon;
            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 transform hover:-translate-y-1 group"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-blue-500 text-white rounded-full transition-colors duration-300 group-hover:bg-blue-600 dark:bg-blue-600 dark:group-hover:bg-blue-500">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mt-4 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-16 text-center tracking-tight">
          <span className="text-blue-600 dark:text-blue-400">Our</span> Impact
          in Action
        </h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
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
          className="relative pb-10"
        >
          {galleryImages.map((img, idx) => (
            <SwiperSlide key={idx}>
              <div
                data-aos="fade-up"
                data-aos-delay={idx * 150}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-103 hover:shadow-2xl border border-gray-100 dark:border-gray-700 cursor-pointer group"
              >
                <div className="h-60 sm:h-72 overflow-hidden">
                  <img
                    src={img}
                    alt={`Gallery ${idx + 1}`}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-button-prev custom-swiper-nav-btn !left-2 !-translate-y-1/2"></div>
          <div className="swiper-button-next custom-swiper-nav-btn !right-2 !-translate-y-1/2"></div>
        </Swiper>
      </section>

      {/* NEW: Best Event Handlers Section */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div data-aos="fade-up" className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900 dark:text-gray-100 mb-4 tracking-tight">
            <span className="text-blue-600 dark:text-blue-400">Top</span> Event
            Handlers
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Meet our exceptional event coordinators who have made remarkable
            contributions to the community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topHandlers.map((handler, index) => (
            <div
              key={handler.id}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="group relative"
            >
              {/* Glassmorphism Card */}
              <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transform hover:-translate-y-3 transition-all duration-500 border border-white/20 dark:border-gray-700/50">
                {/* Gradient Top Border */}
                <div className={`h-2 bg-gradient-to-r ${handler.color}`}></div>

                {/* Badge */}
                <div className="absolute top-6 right-6 z-10">
                  <div
                    className={`bg-gradient-to-r ${handler.color} text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1`}
                  >
                    <FiAward className="w-3 h-3" />
                    {handler.badge}
                  </div>
                </div>

                {/* Image Section with Gradient Overlay */}
                <div className="relative h-64 overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-b ${handler.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500 z-10`}
                  ></div>
                  <img
                    src={handler.image}
                    alt={handler.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>

                {/* Content Section */}
                <div className="p-6 space-y-4">
                  {/* Name & Age */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                      {handler.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {handler.age} years old
                    </p>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <FiStar
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(handler.rating)
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-300 dark:text-gray-600"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-bold text-gray-700 dark:text-gray-300">
                      {handler.rating}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      ({handler.events} events)
                    </span>
                  </div>

                  {/* Expertise */}
                  <div className="bg-blue-50 dark:bg-gray-700/50 p-3 rounded-xl">
                    <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-1">
                      Expertise
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      {handler.expertise}
                    </p>
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-2 pt-2">
                    <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                      <HiMail className="w-4 h-4 flex-shrink-0" />
                      <span className="truncate">{handler.email}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                      <FiPhone className="w-4 h-4 flex-shrink-0" />
                      <span>{handler.phone}</span>
                    </div>
                  </div>

                  {/* Contact Button */}
                  <button
                    className={`w-full mt-4 bg-gradient-to-r ${handler.color} text-white font-semibold py-3 rounded-xl hover:shadow-xl transform hover:scale-105 transition-all duration-300`}
                  >
                    Contact Handler
                  </button>
                </div>

                {/* Bottom Glow Effect */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${handler.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="max-w-4xl mx-auto px-4 py-12 mb-16">
        <div
          data-aos="fade-up"
          className="bg-blue-50 dark:bg-gray-700 p-8 md:p-12 rounded-3xl shadow-2xl border-t-4 border-blue-600 dark:border-blue-400 text-center"
        >
          <FiMail className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-4">
            Join Our Movement!
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Get the latest updates on community events, volunteering
            opportunities, and positive impact stories delivered straight to
            your inbox.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="px-6 py-3 rounded-full border-2 border-blue-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 w-full transition-all duration-300 shadow-md"
            />
            <button
              type="button"
              onClick={() => alert("Newsletter subscription coming soon!")}
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

// ....................dark problem solve  2,..............
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
// import {
//   FiEdit,
//   FiUsers,
//   FiSettings,
//   FiMail,
//   FiPhone,
//   FiStar,
//   FiAward,
// } from "react-icons/fi";
// import { HiMail } from "react-icons/hi";

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

// // PageWrapper Import
// import PageWrapper from "../components/PageWrapper";

// const bannerImages = [banner1, banner2, banner3];

// const features = [
//   {
//     title: "Create Events",
//     description: "Easily create community-driven social service events.",
//     icon: FiEdit,
//   },
//   {
//     title: "Join Events",
//     description: "Find events near you and join to make a difference.",
//     icon: FiUsers,
//   },
//   {
//     title: "Manage Your Events",
//     description: "Keep track of events you have created or joined.",
//     icon: FiSettings,
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

// // Best Social Event Handlers Data
// const topHandlers = [
//   {
//     id: 1,
//     name: "Sarah Anderson",
//     age: 24,
//     expertise: "Community Outreach & Environmental Campaigns",
//     email: "sarah.anderson@socials.com",
//     phone: "+1 (555) 123-4567",
//     rating: 4.9,
//     image:
//       "https://i.ibb.co.com/tP2qQ5Qq/ayo-ogunseinde-6-W4-F62s-N-y-I-unsplash.jpg",
//     events: 127,
//     badge: "Gold Handler",
//     color: "from-amber-400 to-yellow-600",
//   },
//   {
//     id: 2,
//     name: "Michael Chen",
//     age: 28,
//     expertise: "Youth Development & Educational Programs",
//     email: "michael.chen@socials.com",
//     phone: "+1 (555) 234-5678",
//     rating: 4.8,
//     image:
//       "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
//     events: 98,
//     badge: "Silver Handler",
//     color: "from-gray-400 to-gray-600",
//   },
//   {
//     id: 3,
//     name: "Emily Rodriguez",
//     age: 26,
//     expertise: "Disaster Relief & Emergency Response",
//     email: "emily.rodriguez@socials.com",
//     phone: "+1 (555) 345-6789",
//     rating: 5.0,
//     image:
//       "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
//     events: 156,
//     badge: "Platinum Handler",
//     color: "from-purple-400 to-indigo-600",
//   },
// ];

// const Home = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   return (
//     <PageWrapper>
//       <div className="space-y-18">
//         {/* Banner Section */}
//         <section className="mt-10 relative h-[500px] flex items-center justify-center bg-gray-200 dark:bg-gray-800 overflow-hidden">
//           <Swiper
//             modules={[Autoplay]}
//             spaceBetween={0}
//             slidesPerView={1}
//             loop
//             autoplay={{ delay: 4000, disableOnInteraction: false }}
//             className="absolute inset-0 w-full h-full"
//           >
//             {bannerImages.map((img, idx) => (
//               <SwiperSlide key={idx} className="relative">
//                 <img
//                   src={img}
//                   alt={`Banner ${idx + 1}`}
//                   className="w-full h-full object-cover opacity-70 transform transition duration-1000 hover:scale-105"
//                 />
//               </SwiperSlide>
//             ))}
//           </Swiper>

//           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4 z-10">
//             <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fadeInDown">
//               Social Development Events
//             </h1>
//             <p className="text-lg md:text-2xl text-white/80 animate-fadeInUp">
//               Join hands in creating positive change! Social Development Events
//               connects communities, volunteers, and organizations through
//               meaningful events that inspire growth, learning, and social
//               impact.
//             </p>
//           </div>
//         </section>

//         {/* Features Section */}
//         <section className="max-w-6xl mx-auto px-4 py-16">
//           <h2 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-16 text-center tracking-tight">
//             <span className="text-blue-600 dark:text-blue-400">Core</span>{" "}
//             Features
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {features.map((feature, index) => {
//               const Icon = feature.icon;
//               return (
//                 <div
//                   key={index}
//                   data-aos="fade-up"
//                   data-aos-delay={index * 100}
//                   className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 transform hover:-translate-y-1 group"
//                 >
//                   <div className="flex items-center space-x-4 mb-4">
//                     <div className="p-3 bg-blue-500 text-white rounded-full transition-colors duration-300 group-hover:bg-blue-600 dark:bg-blue-600 dark:group-hover:bg-blue-500">
//                       <Icon className="w-6 h-6" />
//                     </div>
//                     <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
//                       {feature.title}
//                     </h3>
//                   </div>
//                   <p className="text-gray-600 dark:text-gray-300 mt-4 leading-relaxed">
//                     {feature.description}
//                   </p>
//                 </div>
//               );
//             })}
//           </div>
//         </section>

//         {/* Gallery Section */}
//         <section className="max-w-6xl mx-auto px-4">
//           <h2 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-16 text-center tracking-tight">
//             <span className="text-blue-600 dark:text-blue-400">Our</span> Impact
//             in Action
//           </h2>

//           <Swiper
//             modules={[Navigation, Pagination, Autoplay]}
//             spaceBetween={30}
//             slidesPerView={1}
//             breakpoints={{
//               640: { slidesPerView: 2, spaceBetween: 20 },
//               1024: { slidesPerView: 3, spaceBetween: 30 },
//             }}
//             navigation={{
//               nextEl: ".swiper-button-next",
//               prevEl: ".swiper-button-prev",
//             }}
//             pagination={{ clickable: true }}
//             autoplay={{ delay: 3500, disableOnInteraction: false }}
//             className="relative pb-10"
//           >
//             {galleryImages.map((img, idx) => (
//               <SwiperSlide key={idx}>
//                 <div
//                   data-aos="fade-up"
//                   data-aos-delay={idx * 150}
//                   className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-103 hover:shadow-2xl border border-gray-100 dark:border-gray-700 cursor-pointer group"
//                 >
//                   <div className="h-60 sm:h-72 overflow-hidden">
//                     <img
//                       src={img}
//                       alt={`Gallery ${idx + 1}`}
//                       className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
//                     />
//                   </div>
//                 </div>
//               </SwiperSlide>
//             ))}
//             <div className="swiper-button-prev custom-swiper-nav-btn !left-2 !-translate-y-1/2"></div>
//             <div className="swiper-button-next custom-swiper-nav-btn !right-2 !-translate-y-1/2"></div>
//           </Swiper>
//         </section>

//         {/* NEW: Best Event Handlers Section */}
//         <section className="max-w-7xl mx-auto px-4 py-20">
//           <div data-aos="fade-up" className="text-center mb-16">
//             <h2 className="text-5xl font-extrabold text-gray-900 dark:text-gray-100 mb-4 tracking-tight">
//               <span className="text-blue-600 dark:text-blue-400">Top</span>{" "}
//               Event Handlers
//             </h2>
//             <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 rounded-full"></div>
//             <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
//               Meet our exceptional event coordinators who have made remarkable
//               contributions to the community
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {topHandlers.map((handler, index) => (
//               <div
//                 key={handler.id}
//                 data-aos="fade-up"
//                 data-aos-delay={index * 150}
//                 className="group relative"
//               >
//                 {/* Glassmorphism Card */}
//                 <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transform hover:-translate-y-3 transition-all duration-500 border border-white/20 dark:border-gray-700/50">
//                   {/* Gradient Top Border */}
//                   <div
//                     className={`h-2 bg-gradient-to-r ${handler.color}`}
//                   ></div>

//                   {/* Badge */}
//                   <div className="absolute top-6 right-6 z-10">
//                     <div
//                       className={`bg-gradient-to-r ${handler.color} text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1`}
//                     >
//                       <FiAward className="w-3 h-3" />
//                       {handler.badge}
//                     </div>
//                   </div>

//                   {/* Image Section with Gradient Overlay */}
//                   <div className="relative h-64 overflow-hidden">
//                     <div
//                       className={`absolute inset-0 bg-gradient-to-b ${handler.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500 z-10`}
//                     ></div>
//                     <img
//                       src={handler.image}
//                       alt={handler.name}
//                       className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
//                     />
//                     {/* Shimmer Effect */}
//                     <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
//                   </div>

//                   {/* Content Section */}
//                   <div className="p-6 space-y-4">
//                     {/* Name & Age */}
//                     <div>
//                       <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
//                         {handler.name}
//                       </h3>
//                       <p className="text-sm text-gray-500 dark:text-gray-400">
//                         {handler.age} years old
//                       </p>
//                     </div>

//                     {/* Rating */}
//                     <div className="flex items-center gap-2">
//                       <div className="flex items-center">
//                         {[...Array(5)].map((_, i) => (
//                           <FiStar
//                             key={i}
//                             className={`w-4 h-4 ${
//                               i < Math.floor(handler.rating)
//                                 ? "text-yellow-400 fill-yellow-400"
//                                 : "text-gray-300 dark:text-gray-600"
//                             }`}
//                           />
//                         ))}
//                       </div>
//                       <span className="text-sm font-bold text-gray-700 dark:text-gray-300">
//                         {handler.rating}
//                       </span>
//                       <span className="text-xs text-gray-500 dark:text-gray-400">
//                         ({handler.events} events)
//                       </span>
//                     </div>

//                     {/* Expertise */}
//                     <div className="bg-blue-50 dark:bg-gray-700/50 p-3 rounded-xl">
//                       <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-1">
//                         Expertise
//                       </p>
//                       <p className="text-sm text-gray-700 dark:text-gray-300">
//                         {handler.expertise}
//                       </p>
//                     </div>

//                     {/* Contact Info */}
//                     <div className="space-y-2 pt-2">
//                       <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
//                         <HiMail className="w-4 h-4 flex-shrink-0" />
//                         <span className="truncate">{handler.email}</span>
//                       </div>
//                       <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
//                         <FiPhone className="w-4 h-4 flex-shrink-0" />
//                         <span>{handler.phone}</span>
//                       </div>
//                     </div>

//                     {/* Contact Button */}
//                     <button
//                       className={`w-full mt-4 bg-gradient-to-r ${handler.color} text-white font-semibold py-3 rounded-xl hover:shadow-xl transform hover:scale-105 transition-all duration-300`}
//                     >
//                       Contact Handler
//                     </button>
//                   </div>

//                   {/* Bottom Glow Effect */}
//                   <div
//                     className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${handler.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
//                   ></div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Newsletter Section */}
//         <section className="max-w-4xl mx-auto px-4 py-12 mb-16">
//           <div
//             data-aos="fade-up"
//             className="bg-blue-50 dark:bg-gray-700 p-8 md:p-12 rounded-3xl shadow-2xl border-t-4 border-blue-600 dark:border-blue-400 text-center"
//           >
//             <FiMail className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
//             <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-4">
//               Join Our Movement!
//             </h2>
//             <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
//               Get the latest updates on community events, volunteering
//               opportunities, and positive impact stories delivered straight to
//               your inbox.
//             </p>
//             <div className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:max-w-md mx-auto">
//               <input
//                 type="email"
//                 placeholder="Your email address"
//                 className="px-6 py-3 rounded-full border-2 border-blue-200 dark:border-gray-600 bg-white dark:bg-gray-800 dark:text-gray-100 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 w-full transition-all duration-300 shadow-md"
//               />
//               <button
//                 type="button"
//                 onClick={() => alert("Newsletter subscription coming soon!")}
//                 className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
//               >
//                 Subscribe Now
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-5 w-5"
//                   viewBox="0 0 20 20"
//                   fill="currentColor"
//                 >
//                   <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
//                   <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </section>
//       </div>
//     </PageWrapper>
//   );
// };

// export default Home;

// ...............................3.................
