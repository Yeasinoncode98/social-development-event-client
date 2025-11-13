// // import React, { useEffect, useState } from "react";
// // // Swiper Imports
// // import { Swiper, SwiperSlide } from "swiper/react";
// // import { Autoplay, Navigation, Pagination } from "swiper";

// // // Swiper styles
// // import "swiper/css";
// // import "swiper/css/navigation";
// // import "swiper/css/pagination";

// // // AOS for scroll animations
// // import AOS from "aos";
// // import "aos/dist/aos.css";

// // // Icons for Features
// // import {
// //   FiEdit,
// //   FiUsers,
// //   FiSettings,
// //   FiMail,
// //   FiPhone,
// //   FiStar,
// //   FiAward,
// //   FiMapPin, // New Icon for Location
// //   FiHeart, // New Icon for Loved By
// //   FiZap, // New Icon for Others/Impact
// //   FiX, // Icon for Modal Close
// // } from "react-icons/fi";
// // import { HiMail } from "react-icons/hi";

// // // Image Imports (Keep existing imports)
// // import banner1 from "../assets/images/banner1.jpg";
// // import banner2 from "../assets/images/banner2.jpg";
// // import banner3 from "../assets/images/banner3.jpg";
// // import banner4 from "../assets/images/foodtoChilds.jpg";

// // import gallery1 from "../assets/images/banner1.jpg";
// // import gallery2 from "../assets/images/pexels-cottonbro-6157554.jpg";
// // import gallery3 from "../assets/images/pexels-levsi-31858860.jpg";
// // import gallery4 from "../assets/images/FoodtoPoors.jpg";
// // import gallery5 from "../assets/images/RoadWorker.jpg";
// // import gallery6 from "../assets/images/Firefighter.jpg";
// // import gallery7 from "../assets/images/helpingOldpeople.jpg";
// // import gallery8 from "../assets/images/helpingPoorMan.jpg";

// // const bannerImages = [banner1, banner2, banner3, banner4];

// // const features = [
// //   {
// //     title: "Create Events",
// //     description: "Easily create community-driven social service events.",
// //     icon: FiEdit,
// //   },
// //   {
// //     title: "Join Events",
// //     description: "Find events near you and join to make a difference.",
// //     icon: FiUsers,
// //   },
// //   {
// //     title: "Manage Your Events",
// //     description: "Keep track of events you have created or joined.",
// //     icon: FiSettings,
// //   },
// // ];

// // const galleryImages = [
// //   gallery1,
// //   gallery2,
// //   gallery3,
// //   gallery4,
// //   gallery5,
// //   gallery6,
// //   gallery7,
// //   gallery8,
// // ];

// // // Best Social Event Handlers Data (Keep existing data)
// // const topHandlers = [
// //   {
// //     id: 1,
// //     name: "Sarah Anderson",
// //     age: 24,
// //     expertise: "Community Outreach & Environmental Campaigns",
// //     email: "sarah.anderson@socials.com",
// //     phone: "+1 (555) 123-4567",
// //     rating: 4.9,
// //     image:
// //       "https://i.ibb.co.com/tP2qQ5Qq/ayo-ogunseinde-6-W4-F62s-N-y-I-unsplash.jpg",
// //     events: 127,
// //     badge: "Gold Handler",
// //     color: "from-amber-400 to-yellow-600",
// //   },
// //   {
// //     id: 2,
// //     name: "Michael Chen",
// //     age: 28,
// //     expertise: "Youth Development & Educational Programs",
// //     email: "michael.chen@socials.com",
// //     phone: "+1 (555) 234-5678",
// //     rating: 4.8,
// //     image:
// //       "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
// //     events: 98,
// //     badge: "Silver Handler",
// //     color: "from-gray-400 to-gray-600",
// //   },
// //   {
// //     id: 3,
// //     name: "Emily Rodriguez",
// //     age: 26,
// //     expertise: "Disaster Relief & Emergency Response",
// //     email: "emily.rodriguez@socials.com",
// //     phone: "+1 (555) 345-6789",
// //     rating: 5.0,
// //     image:
// //       "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
// //     events: 156,
// //     badge: "Platinum Handler",
// //     color: "from-purple-400 to-indigo-600",
// //   },
// // ];

// // // --- DATA FOR BEST EVENTS SECTION ---
// // const topEvents = [
// //   {
// //     id: 1,
// //     title: "Coastal Cleanup Drive",
// //     location: "Sunset Beach, CA",
// //     usersJoined: 450,
// //     peopleRating: 4.9,
// //     communityPeople: 12000, // Total people in the community who benefited
// //     lovedBy: "Environmentalists",
// //     others: "Removed 5 tons of trash",
// //     image:
// //       "https://i.ibb.co.com/dJc2S7TQ/ocg-saving-the-ocean-nm-Zh-Tk-Zik8g-unsplash.jpg",
// //     color: "from-teal-400 to-cyan-600",
// //     description:
// //       "An organized effort to clear trash and debris from the local coastline. This event brought together volunteers from all ages to restore the natural beauty of Sunset Beach and protect marine life.",
// //   },
// //   {
// //     id: 2,
// //     title: "STEM Mentorship Workshop",
// //     location: "City Education Center, NY",
// //     usersJoined: 320,
// //     peopleRating: 4.8,
// //     communityPeople: 7500, // Students & Parents
// //     lovedBy: "Young Students",
// //     others: "50+ mentors volunteered",
// //     image:
// //       "https://i.ibb.co.com/xSQTQbNt/frankie-cordoba-pu-A8ce-Prit-E-unsplash.jpg",
// //     color: "from-rose-400 to-pink-600",
// //     description:
// //       "A workshop dedicated to inspiring the next generation of scientists and engineers. Experienced professionals mentored students in various STEM fields, fostering innovation and critical thinking.",
// //   },
// //   {
// //     id: 3,
// //     title: "Seniors' Digital Literacy Class",
// //     location: "Community Library, TX",
// //     usersJoined: 180,
// //     peopleRating: 5.0,
// //     communityPeople: 3000, // Seniors trained
// //     lovedBy: "Elderly Citizens",
// //     others: "Bridging the digital divide",
// //     image: "https://i.ibb.co.com/5WD0KSZX/pexels-kampus-7983553.jpg",
// //     color: "from-indigo-400 to-violet-600",
// //     description:
// //       "Essential classes designed to help elderly citizens navigate modern technology, covering everything from smartphones to online safety. A crucial step in bridging the generational digital divide.",
// //   },
// // ];
// // // ------------------------------------

// // // Helper Component for the Metric Cards inside the Event Card
// // const MetricCard = ({ icon: Icon, value, label, color }) => (
// //   <div className="flex flex-col items-center p-2 rounded-lg bg-gray-100/70 dark:bg-gray-700/70 transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-700/90">
// //     <Icon className={`w-5 h-5 ${color}`} />
// //     <span className="text-lg font-bold text-gray-800 dark:text-white mt-1">
// //       {value}
// //     </span>
// //     <span className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
// //       {label}
// //     </span>
// //   </div>
// // );

// // // New Event Modal Component
// // const EventModal = ({ event, onClose }) => {
// //   if (!event) return null;

// //   return (
// //     // Modal Overlay - Animated fade in
// //     <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70 backdrop-blur-sm transition-opacity duration-300 ease-in-out animate-modal-fade-in">
// //       {/* Modal Container - Animated scale up */}
// //       <div
// //         className={`relative w-full max-w-2xl bg-white dark:bg-gray-900 rounded-3xl shadow-2xl transform transition-all duration-500 ease-in-out animate-modal-pop-in overflow-hidden`}
// //       >
// //         {/* Animated Glossy Gradient Card Background */}
// //         <div
// //           className={`absolute inset-0 bg-gradient-to-br ${event.color} opacity-40 blur-2xl z-0`}
// //         ></div>
// //         <div className="relative z-10 p-1 bg-white/50 dark:bg-gray-800/50 backdrop-blur-xl rounded-3xl border border-white/50 dark:border-gray-700/50">
// //           <div className="relative bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-inner-xl">
// //             {/* Close Button */}
// //             <button
// //               onClick={onClose}
// //               className="absolute top-4 right-4 p-2 bg-white/70 dark:bg-gray-800/70 rounded-full text-gray-800 dark:text-white hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 z-20 shadow-lg hover:scale-110"
// //             >
// //               <FiX className="w-6 h-6" />
// //             </button>

// //             {/* Event Image with Shimmer */}
// //             <div className="relative h-64 overflow-hidden">
// //               <img
// //                 src={event.image}
// //                 alt={event.title}
// //                 className="w-full h-full object-cover"
// //               />
// //               <div
// //                 className={`absolute inset-0 bg-gradient-to-t ${event.color} opacity-30`}
// //               ></div>
// //               {/* Image Shimmer Effect */}
// //               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-shimmer"></div>
// //             </div>

// //             {/* Event Details Content */}
// //             <div className="p-8 space-y-6">
// //               <h2
// //                 className={`text-4xl font-extrabold text-gray-900 dark:text-white mb-2 text-center`}
// //               >
// //                 <span
// //                   className={`bg-clip-text text-transparent bg-gradient-to-r ${event.color}`}
// //                 >
// //                   {event.title}
// //                 </span>
// //               </h2>

// //               <div className="flex items-center justify-center text-lg text-gray-600 dark:text-gray-400 mb-4">
// //                 <FiMapPin className="w-5 h-5 mr-2 text-purple-500" />
// //                 <span>{event.location}</span>
// //               </div>

// //               <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-center">
// //                 {event.description}
// //               </p>

// //               {/* Key Metrics Grid */}
// //               <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
// //                 <MetricCard
// //                   icon={FiUsers}
// //                   value={event.usersJoined.toLocaleString()}
// //                   label="Volunteers"
// //                   color="text-teal-500"
// //                 />
// //                 <MetricCard
// //                   icon={FiStar}
// //                   value={event.peopleRating.toFixed(1)}
// //                   label="Rating"
// //                   color="text-yellow-500"
// //                 />
// //                 <MetricCard
// //                   icon={FiHeart}
// //                   value={event.lovedBy}
// //                   label="Top Supporter"
// //                   color="text-rose-500"
// //                 />
// //                 <MetricCard
// //                   icon={FiZap}
// //                   value={`${(event.communityPeople / 1000).toFixed(1)}K+`}
// //                   label="Benefited"
// //                   color="text-indigo-500"
// //                 />
// //               </div>

// //               {/* Note about joining the event */}
// //               <p className="text-sm text-center text-gray-500 dark:text-gray-400 pt-4">
// //                 For joining this event, please visit the event's dedicated page.
// //               </p>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // const Home = () => {
// //   // New State for Modal Management
// //   const [isModalOpen, setIsModalOpen] = useState(false);
// //   const [selectedEvent, setSelectedEvent] = useState(null);

// //   const openModal = (event) => {
// //     setSelectedEvent(event);
// //     setIsModalOpen(true);
// //   };

// //   const closeModal = () => {
// //     setIsModalOpen(false);
// //     setSelectedEvent(null);
// //   };

// //   useEffect(() => {
// //     AOS.init({ duration: 1000, once: true });
// //   }, []);

// //   return (
// //     <div className="space-y-18 min-h-screen bg-white dark:bg-gray-900">
// //       {/* Banner Section (No Change) */}
// //       <section className="mt-10 relative h-[500px] flex items-center justify-center bg-gray-200 dark:bg-gray-800 overflow-hidden">
// //         <Swiper
// //           modules={[Autoplay]}
// //           spaceBetween={0}
// //           slidesPerView={1}
// //           loop
// //           autoplay={{ delay: 4000, disableOnInteraction: false }}
// //           className="absolute inset-0 w-full h-full"
// //         >
// //           {bannerImages.map((img, idx) => (
// //             <SwiperSlide key={idx} className="relative">
// //               <img
// //                 src={img}
// //                 alt={`Banner ${idx + 1}`}
// //                 className="w-full h-full object-cover opacity-70 transform transition duration-1000 hover:scale-105"
// //               />
// //             </SwiperSlide>
// //           ))}
// //         </Swiper>

// //         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4 z-10">
// //           <h1 className="text-4xl md:text-6xl font-bold text-black mb-4 animate-fadeInDown">
// //             Social Development Events
// //           </h1>
// //           <p className="text-lg md:text-2xl text-[#B7E5CD] animate-fadeInUp">
// //             Join hands in creating positive change! Social Development Events
// //             connects communities, volunteers, and organizations through
// //             meaningful events that inspire growth, learning, and social impact.
// //           </p>
// //         </div>
// //       </section>

// //       {/* Features Section (No Change) */}
// //       <section
// //         className="max-w-6xl mx-auto px-4 py-16
// //                       bg-gradient-to-br from-gray-900 to-gray-950
// //                       rounded-3xl shadow-2xl shadow-indigo-500/10
// //                       dark:shadow-none"
// //         data-aos="fade-in"
// //       >
// //         <h2 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-16 text-center tracking-tight">
// //           <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-indigo-500">
// //             Core
// //           </span>{" "}
// //           Features
// //         </h2>
// //         <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
// //           {features.map((feature, index) => {
// //             const Icon = feature.icon;
// //             return (
// //               <div
// //                 key={index}
// //                 data-aos="fade-up"
// //                 data-aos-delay={index * 150}
// //                 // The inner feature cards still use the futuristic/neon styling
// //                 className="relative bg-gray-900/50 dark:bg-gray-900/80 p-8 rounded-2xl backdrop-blur-sm shadow-xl
// //                                  transition-all duration-500 transform group border border-transparent
// //                                  hover:scale-[1.03] hover:-translate-y-2 border-t-4 border-indigo-500
// //                                  shadow-[0_0_15px_rgba(168,85,247,0.2)] hover:shadow-[0_0_30px_rgba(168,85,247,0.7),0_0_10px_rgba(232,20,186,0.5)]
// //                                  "
// //               >
// //                 {/* Decorative Element: Glowing Bottom Bar on Hover */}
// //                 <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-fuchsia-500 to-indigo-500 rounded-b-xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

// //                 <div className="flex flex-col items-center space-y-4 mb-4 text-center">
// //                   {/* Animated Icon Container */}
// //                   <div
// //                     className="p-5 bg-gradient-to-r from-fuchsia-600/20 to-indigo-600/20 rounded-full transition-all duration-500
// //                                      group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.9)] border border-fuchsia-500/50
// //                                      animate-neon-pulse"
// //                     style={{ animationDuration: "3s" }} // You will need to define 'animate-neon-pulse' in your global CSS
// //                   >
// //                     <Icon className="w-8 h-8 text-fuchsia-400 filter drop-shadow-[0_0_6px_#E879F9]" />
// //                   </div>
// //                   <h3 className="text-2xl font-bold text-gray-100 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-fuchsia-400 group-hover:to-indigo-400 group-hover:bg-clip-text transition-colors duration-300">
// //                     {feature.title}
// //                   </h3>
// //                 </div>
// //                 <p className="text-gray-400 dark:text-gray-300 mt-4 leading-relaxed">
// //                   {feature.description}
// //                 </p>
// //               </div>
// //             );
// //           })}
// //         </div>
// //       </section>

// //       {/* Add Custom CSS for Animation (INCLUDING NEW PULSE-GLOW AND MODAL ANIMATIONS) - NO CHANGE */}
// //       <style global jsx>{`
// //         /* Custom Keyframes for the Icon Pulse (Existing) */
// //         @keyframes neon-pulse {
// //           0%,
// //           100% {
// //             transform: scale(1);
// //             box-shadow: 0 0 10px rgba(232, 20, 186, 0.5); /* Fuchsia glow */
// //           }
// //           50% {
// //             transform: scale(1.05);
// //             box-shadow: 0 0 20px rgba(168, 85, 247, 0.7); /* Purple glow */
// //           }
// //         }
// //         /* The class used in the component */
// //         .animate-neon-pulse {
// //           animation: neon-pulse 3s infinite alternate ease-in-out;
// //         }

// //         /* NEW Keyframes for the Constant Card Glow */
// //         @keyframes pulse-glow {
// //           0%,
// //           100% {
// //             /* Adjust shadow colors for a more purple/pink glow */
// //             box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
// //               0 2px 4px -2px rgba(0, 0, 0, 0.06),
// //               0 0 15px rgba(168, 85, 247, 0.4); /* Purple Glow */
// //           }
// //           50% {
// //             box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
// //               0 4px 6px -4px rgba(0, 0, 0, 0.1),
// //               0 0 25px rgba(236, 72, 153, 0.6); /* Pink Glow */
// //           }
// //         }
// //         /* The class for constant glow */
// //         .animate-pulse-glow {
// //           animation: pulse-glow 4s infinite alternate ease-in-out;
// //         }

// //         /* NEW Keyframes for Modal Fade-In */
// //         @keyframes modal-fade-in {
// //           from {
// //             opacity: 0;
// //           }
// //           to {
// //             opacity: 1;
// //           }
// //         }
// //         .animate-modal-fade-in {
// //           animation: modal-fade-in 0.3s forwards;
// //         }

// //         /* NEW Keyframes for Modal Pop-In */
// //         @keyframes modal-pop-in {
// //           0% {
// //             transform: translate(0, -40px) scale(0.9);
// //             opacity: 0.5;
// //           }
// //           100% {
// //             transform: translate(0, 0) scale(1);
// //             opacity: 1;
// //           }
// //         }
// //         /* Note: For the modal-pop-in to work correctly on a centered component without translate(-50%, -50%),
// //            we usually apply it to the content inside the centered flex container (or adjust the animation).
// //            I've updated the keyframes to look good inside the centered flex container.
// //         */
// //         .animate-modal-pop-in {
// //           animation: modal-pop-in 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
// //         }

// //         /* NEW Keyframes for Shimmer Effect on Modal Image */
// //         @keyframes shimmer {
// //           0% {
// //             transform: translateX(-100%);
// //           }
// //           100% {
// //             transform: translateX(100%);
// //           }
// //         }
// //         .animate-shimmer {
// //           animation: shimmer 1.5s infinite linear;
// //         }
// //       `}</style>

// //       {/* Gallery Section (No Change) */}
// //       <section className="max-w-6xl mx-auto px-4 py-16">
// //         <div data-aos="fade-up" className="text-center mb-16">
// //           <h2 className="text-5xl font-extrabold mb-4 tracking-tight">
// //             <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
// //               Our Impact
// //             </span>{" "}
// //             <span className="text-gray-900 dark:text-gray-100">in Action</span>
// //           </h2>
// //           <div className="w-32 h-1.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 mx-auto rounded-full shadow-lg shadow-blue-500/30"></div>
// //           <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
// //             Witness the power of community through our remarkable events
// //           </p>
// //         </div>

// //         <Swiper
// //           modules={[Navigation, Pagination, Autoplay]}
// //           spaceBetween={30}
// //           slidesPerView={1}
// //           breakpoints={{
// //             640: { slidesPerView: 2, spaceBetween: 20 },
// //             1024: { slidesPerView: 3, spaceBetween: 30 },
// //           }}
// //           navigation={{
// //             nextEl: ".swiper-button-next",
// //             prevEl: ".swiper-button-prev",
// //           }}
// //           pagination={{ clickable: true }}
// //           autoplay={{ delay: 3500, disableOnInteraction: false }}
// //           className="relative pb-14"
// //         >
// //           {galleryImages.map((img, idx) => (
// //             <SwiperSlide key={idx}>
// //               <div
// //                 data-aos="fade-up"
// //                 data-aos-delay={idx * 150}
// //                 className="group relative"
// //               >
// //                 {/* Animated gradient glow */}
// //                 <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 rounded-3xl opacity-0 group-hover:opacity-75 blur-xl transition duration-500 animate-pulse"></div>

// //                 {/* Main card */}
// //                 <div className="relative backdrop-blur-2xl bg-white/40 dark:bg-slate-900/40 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl border-2 border-white/60 dark:border-slate-700/40 transform transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2">
// //                   {/* Frosted glass texture overlay */}
// //                   <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iNCIgLz48L2ZpbHRlcj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI25vaXNlKSIgb3BhY2l0eT0iMC4wMyIgLz48L2Z2Zz4=')] opacity-50 pointer-events-none z-10"></div>

// //                   {/* Image container */}
// //                   <div className="relative h-72 sm:h-80 overflow-hidden">
// //                     {/* Ice shimmer effect */}
// //                     <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-200/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 z-20"></div>

// //                     {/* Gradient overlay */}
// //                     <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/60 via-blue-900/20 to-transparent z-10"></div>

// //                     <img
// //                       src={img}
// //                       alt={`Gallery ${idx + 1}`}
// //                       className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
// //                     />
// //                   </div>

// //                   {/* Content overlay at bottom */}
// //                   <div className="absolute bottom-0 left-0 right-0 p-6 backdrop-blur-xl bg-white/70 dark:bg-slate-900/70 border-t-2 border-white/60 dark:border-slate-700/40 z-20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
// //                     <h3 className="text-lg font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-1">
// //                       Community Event
// //                     </h3>
// //                     <p className="text-sm text-gray-700 dark:text-gray-300">
// //                       Making a difference together
// //                     </p>
// //                   </div>

// //                   {/* Bottom glow bar */}
// //                   <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
// //                 </div>
// //               </div>
// //             </SwiperSlide>
// //           ))}
// //           <div className="swiper-button-prev custom-swiper-nav-btn !left-2 !-translate-y-1/2"></div>
// //           <div className="swiper-button-next custom-swiper-nav-btn !right-2 !-translate-y-1/2"></div>
// //         </Swiper>
// //       </section>

// //       <section className="max-w-7xl mx-auto px-4 py-20">
// //         <div data-aos="fade-up" className="text-center mb-16">
// //           <h2 className="text-5xl font-extrabold text-gray-900 dark:text-gray-100 mb-4 tracking-tight">
// //             <span className="text-purple-600 dark:text-purple-400">Top</span>{" "}
// //             Impact Events
// //           </h2>
// //           <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6 rounded-full"></div>
// //           <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
// //             Discover the most impactful and highly-rated social events.
// //           </p>
// //         </div>

// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// //           {topEvents.map((event, index) => (
// //             <div
// //               key={event.id}
// //               data-aos="fade-up"
// //               data-aos-delay={index * 150}
// //               className="group relative"
// //             >
// //               {/* Card Container with Constant Glow Class */}
// //               <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transform hover:-translate-y-3 transition-all duration-500 border border-white/20 dark:border-gray-700/50 animate-pulse-glow">
// //                 {/* Gradient Top Border */}
// //                 <div className={`h-2 bg-gradient-to-r ${event.color}`}></div>

// //                 {/* Event Image */}
// //                 <div className="relative h-48 overflow-hidden">
// //                   <div
// //                     className={`absolute inset-0 bg-gradient-to-b ${event.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500 z-10`}
// //                   ></div>
// //                   <img
// //                     src={event.image}
// //                     alt={event.title}
// //                     className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
// //                   />
// //                 </div>

// //                 {/* Content Section */}
// //                 <div className="p-6 space-y-4">
// //                   {/* Title & Location */}
// //                   <div>
// //                     <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text transition-all duration-300">
// //                       {event.title}
// //                     </h3>
// //                     <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
// //                       <FiMapPin className="w-4 h-4 mr-1 text-purple-500" />
// //                       {event.location}
// //                     </div>
// //                   </div>

// //                   {/* Key Metrics */}
// //                   <div className="grid grid-cols-2 gap-3 text-center pt-2">
// //                     <MetricCard
// //                       icon={FiUsers}
// //                       value={event.usersJoined.toLocaleString()}
// //                       label="Users Joined"
// //                       color="text-teal-500"
// //                     />
// //                     <MetricCard
// //                       icon={FiStar}
// //                       value={event.peopleRating.toFixed(1)}
// //                       label="People Rating"
// //                       color="text-yellow-500"
// //                     />
// //                     <MetricCard
// //                       icon={FiHeart}
// //                       value={event.lovedBy}
// //                       label="Loved By"
// //                       color="text-rose-500"
// //                     />
// //                     <MetricCard
// //                       icon={FiZap}
// //                       value={`${(event.communityPeople / 1000).toFixed(1)}K+`}
// //                       label="People Benefited"
// //                       color="text-indigo-500"
// //                     />
// //                   </div>

// //                   {/* Impact Highlight */}
// //                   <div className="bg-purple-50 dark:bg-gray-700/50 p-3 rounded-xl">
// //                     <p className="text-sm font-semibold text-purple-600 dark:text-purple-400 mb-1">
// //                       Impact Summary
// //                     </p>
// //                     <p className="text-sm text-gray-700 dark:text-gray-300">
// //                       {event.others}
// //                     </p>
// //                   </div>

// //                   {/* View Details Button - OPENS MODAL */}
// //                   <button
// //                     type="button"
// //                     onClick={() => openModal(event)}
// //                     className={`w-full mt-4 bg-gradient-to-r ${event.color} text-white font-semibold py-3 rounded-xl hover:shadow-xl transform hover:scale-105 transition-all duration-300`}
// //                   >
// //                     View Event Details
// //                   </button>
// //                 </div>

// //                 {/* Bottom Glow Effect */}
// //                 <div
// //                   className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${event.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
// //                 ></div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </section>

// //       {/* ....................Top Event Handlers...................... */}

// //       <section className="max-w-7xl mx-auto px-4 py-20">
// //         <div data-aos="fade-up" className="text-center mb-16">
// //           <h2 className="text-5xl font-extrabold text-gray-900 dark:text-gray-100 mb-4 tracking-tight">
// //             <span className="text-blue-600 dark:text-blue-400">Top</span> Event
// //             Handlers
// //           </h2>
// //           <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 rounded-full"></div>
// //           <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
// //             Meet our exceptional event coordinators who have made remarkable
// //             contributions to the community
// //           </p>
// //         </div>

// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// //           {topHandlers.map((handler, index) => (
// //             <div
// //               key={handler.id}
// //               data-aos="fade-up"
// //               data-aos-delay={index * 150}
// //               className="group relative"
// //             >
// //               {/* Card Container */}
// //               <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transform hover:-translate-y-3 transition-all duration-500 border border-white/20 dark:border-gray-700/50">
// //                 {/* Gradient Top Border */}
// //                 <div className={`h-2 bg-gradient-to-r ${handler.color}`}></div>

// //                 {/* Badge */}
// //                 <div className="absolute top-6 right-6 z-10">
// //                   <div
// //                     className={`bg-gradient-to-r ${handler.color} text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1`}
// //                   >
// //                     <FiAward className="w-3 h-3" />
// //                     {handler.badge}
// //                   </div>
// //                 </div>

// //                 {/* Image Section with Gradient Overlay */}
// //                 <div className="relative h-64 overflow-hidden">
// //                   <div
// //                     className={`absolute inset-0 bg-gradient-to-b ${handler.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500 z-10`}
// //                   ></div>
// //                   <img
// //                     src={handler.image}
// //                     alt={handler.name}
// //                     className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
// //                   />
// //                   {/* Shimmer Effect */}
// //                   <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
// //                 </div>

// //                 {/* Content Section */}
// //                 <div className="p-6 space-y-4">
// //                   {/* Name & Age */}
// //                   <div>
// //                     <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
// //                       {handler.name}
// //                     </h3>
// //                     <p className="text-sm text-gray-500 dark:text-gray-400">
// //                       {handler.age} years old
// //                     </p>
// //                   </div>

// //                   {/* Rating */}
// //                   <div className="flex items-center gap-2">
// //                     <div className="flex items-center">
// //                       {[...Array(5)].map((_, i) => (
// //                         <FiStar
// //                           key={i}
// //                           className={`w-4 h-4 ${
// //                             i < Math.floor(handler.rating)
// //                               ? "text-yellow-400 fill-yellow-400"
// //                               : "text-gray-300 dark:text-gray-600"
// //                           }`}
// //                         />
// //                       ))}
// //                     </div>
// //                     <span className="text-sm font-bold text-gray-700 dark:text-gray-300">
// //                       {handler.rating}
// //                     </span>
// //                     <span className="text-xs text-gray-500 dark:text-gray-400">
// //                       ({handler.events} events)
// //                     </span>
// //                   </div>

// //                   {/* Expertise */}
// //                   <div className="bg-blue-50 dark:bg-gray-700/50 p-3 rounded-xl">
// //                     <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-1">
// //                       Expertise
// //                     </p>
// //                     <p className="text-sm text-gray-700 dark:text-gray-300">
// //                       {handler.expertise}
// //                     </p>
// //                   </div>

// //                   {/* Contact Info */}
// //                   <div className="space-y-2 pt-2">
// //                     <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
// //                       <HiMail className="w-4 h-4 flex-shrink-0" />
// //                       <span className="truncate">{handler.email}</span>
// //                     </div>
// //                     <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
// //                       <FiPhone className="w-4 h-4 flex-shrink-0" />
// //                       <span>{handler.phone}</span>
// //                     </div>
// //                   </div>

// //                   {/* Contact Button */}
// //                   <button
// //                     type="button"
// //                     onClick={() => alert(`Contacting ${handler.name}...`)}
// //                     className={`w-full mt-4 bg-gradient-to-r ${handler.color} text-white font-semibold py-3 rounded-xl hover:shadow-xl transform hover:scale-105 transition-all duration-300`}
// //                   >
// //                     Contact Handler
// //                   </button>
// //                 </div>

// //                 {/* Bottom Glow Effect */}
// //                 <div
// //                   className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${handler.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
// //                 ></div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </section>

// //       {/* Newsletter Section (No Change) */}
// //       <section className="max-w-4xl mx-auto px-4 py-12 mb-16">
// //         <div
// //           data-aos="fade-up"
// //           className="bg-blue-50 dark:bg-gray-700 p-8 md:p-12 rounded-3xl shadow-2xl border-t-4 border-blue-600 dark:border-blue-400 text-center"
// //         >
// //           <FiMail className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
// //           <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-4">
// //             Join Our Movement!
// //           </h2>
// //           <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
// //             Get the latest updates on community events, volunteering
// //             opportunities, and positive impact stories delivered straight to
// //             your inbox.
// //           </p>
// //           <div className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:max-w-md mx-auto">
// //             <input
// //               type="email"
// //               placeholder="Your email address"
// //               className="px-6 py-3 rounded-full border-2 border-blue-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 w-full transition-all duration-300 shadow-md"
// //             />
// //             <button
// //               type="button"
// //               onClick={() => alert("Newsletter subscription coming soon!")}
// //               className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
// //             >
// //               Subscribe Now
// //               <svg
// //                 xmlns="http://www.w3.org/2000/svg"
// //                 className="h-5 w-5"
// //                 viewBox="0 0 20 20"
// //                 fill="currentColor"
// //               >
// //                 <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
// //                 <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
// //               </svg>
// //             </button>
// //           </div>
// //         </div>
// //       </section>

// //       {/* RENDER MODAL */}
// //       {isModalOpen && <EventModal event={selectedEvent} onClose={closeModal} />}
// //     </div>
// //   );
// // };

// // export default Home;

// // ...........................................

// import React, { useEffect, useState } from "react";
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
//   FiMapPin, // New Icon for Location
//   FiHeart, // New Icon for Loved By
//   FiZap, // New Icon for Others/Impact
//   FiX, // Icon for Modal Close
// } from "react-icons/fi";
// import { HiMail } from "react-icons/hi";

// // Image Imports (Keep existing imports)
// import banner1 from "../assets/images/banner1.jpg";
// import banner2 from "../assets/images/banner2.jpg";
// import banner3 from "../assets/images/banner3.jpg";
// import banner4 from "../assets/images/foodtoChilds.jpg";

// import gallery1 from "../assets/images/banner1.jpg";
// import gallery2 from "../assets/images/pexels-cottonbro-6157554.jpg";
// import gallery3 from "../assets/images/pexels-levsi-31858860.jpg";
// import gallery4 from "../assets/images/FoodtoPoors.jpg";
// import gallery5 from "../assets/images/RoadWorker.jpg";
// import gallery6 from "../assets/images/Firefighter.jpg";
// import gallery7 from "../assets/images/helpingOldpeople.jpg";
// import gallery8 from "../assets/images/helpingPoorMan.jpg";

// const bannerImages = [banner1, banner2, banner3, banner4];

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
//   gallery7,
//   gallery8,
// ];

// // Best Social Event Handlers Data (Keep existing data)
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

// // --- DATA FOR BEST EVENTS SECTION ---
// const topEvents = [
//   {
//     id: 1,
//     title: "Coastal Cleanup Drive",
//     location: "Sunset Beach, CA",
//     usersJoined: 450,
//     peopleRating: 4.9,
//     communityPeople: 12000, // Total people in the community who benefited
//     lovedBy: "Environmentalists",
//     others: "Removed 5 tons of trash",
//     image:
//       "https://i.ibb.co.com/dJc2S7TQ/ocg-saving-the-ocean-nm-Zh-Tk-Zik8g-unsplash.jpg",
//     color: "from-teal-400 to-cyan-600",
//     description:
//       "An organized effort to clear trash and debris from the local coastline. This event brought together volunteers from all ages to restore the natural beauty of Sunset Beach and protect marine life.",
//   },
//   {
//     id: 2,
//     title: "STEM Mentorship Workshop",
//     location: "City Education Center, NY",
//     usersJoined: 320,
//     peopleRating: 4.8,
//     communityPeople: 7500, // Students & Parents
//     lovedBy: "Young Students",
//     others: "50+ mentors volunteered",
//     image:
//       "https://i.ibb.co.com/xSQTQbNt/frankie-cordoba-pu-A8ce-Prit-E-unsplash.jpg",
//     color: "from-rose-400 to-pink-600",
//     description:
//       "A workshop dedicated to inspiring the next generation of scientists and engineers. Experienced professionals mentored students in various STEM fields, fostering innovation and critical thinking.",
//   },
//   {
//     id: 3,
//     title: "Seniors' Digital Literacy Class",
//     location: "Community Library, TX",
//     usersJoined: 180,
//     peopleRating: 5.0,
//     communityPeople: 3000, // Seniors trained
//     lovedBy: "Elderly Citizens",
//     others: "Bridging the digital divide",
//     image: "https://i.ibb.co.com/5WD0KSZX/pexels-kampus-7983553.jpg",
//     color: "from-indigo-400 to-violet-600",
//     description:
//       "Essential classes designed to help elderly citizens navigate modern technology, covering everything from smartphones to online safety. A crucial step in bridging the generational digital divide.",
//   },
// ];
// // ------------------------------------

// // Helper Component for the Metric Cards inside the Event Card
// const MetricCard = ({ icon: Icon, value, label, color }) => (
//   <div className="flex flex-col items-center p-2 rounded-lg bg-gray-100/70 dark:bg-gray-700/70 transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-700/90">
//     <Icon className={`w-5 h-5 ${color}`} />
//     <span className="text-lg font-bold text-gray-800 dark:text-white mt-1">
//       {value}
//     </span>
//     <span className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
//       {label}
//     </span>
//   </div>
// );

// // New Event Modal Component
// const EventModal = ({ event, onClose }) => {
//   if (!event) return null;

//   return (
//     // Modal Overlay - Animated fade in
//     <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70 backdrop-blur-sm transition-opacity duration-300 ease-in-out animate-modal-fade-in">
//       {/* Modal Container - Animated scale up */}
//       <div
//         className={`relative w-full max-w-2xl bg-white dark:bg-gray-900 rounded-3xl shadow-2xl transform transition-all duration-500 ease-in-out animate-modal-pop-in overflow-hidden`}
//       >
//         {/* Animated Glossy Gradient Card Background */}
//         <div
//           className={`absolute inset-0 bg-gradient-to-br ${event.color} opacity-40 blur-2xl z-0`}
//         ></div>
//         <div className="relative z-10 p-1 bg-white/50 dark:bg-gray-800/50 backdrop-blur-xl rounded-3xl border border-white/50 dark:border-gray-700/50">
//           <div className="relative bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-inner-xl">
//             {/* Close Button */}
//             <button
//               onClick={onClose}
//               className="absolute top-4 right-4 p-2 bg-white/70 dark:bg-gray-800/70 rounded-full text-gray-800 dark:text-white hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 z-20 shadow-lg hover:scale-110"
//             >
//               <FiX className="w-6 h-6" />
//             </button>

//             {/* Event Image with Shimmer */}
//             <div className="relative h-64 overflow-hidden">
//               <img
//                 src={event.image}
//                 alt={event.title}
//                 className="w-full h-full object-cover"
//               />
//               <div
//                 className={`absolute inset-0 bg-gradient-to-t ${event.color} opacity-30`}
//               ></div>
//               {/* Image Shimmer Effect */}
//               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-shimmer"></div>
//             </div>

//             {/* Event Details Content */}
//             <div className="p-8 space-y-6">
//               <h2
//                 className={`text-4xl font-extrabold text-gray-900 dark:text-white mb-2 text-center`}
//               >
//                 <span
//                   className={`bg-clip-text text-transparent bg-gradient-to-r ${event.color}`}
//                 >
//                   {event.title}
//                 </span>
//               </h2>

//               <div className="flex items-center justify-center text-lg text-gray-600 dark:text-gray-400 mb-4">
//                 <FiMapPin className="w-5 h-5 mr-2 text-purple-500" />
//                 <span>{event.location}</span>
//               </div>

//               <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-center">
//                 {event.description}
//               </p>

//               {/* Key Metrics Grid */}
//               <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
//                 <MetricCard
//                   icon={FiUsers}
//                   value={event.usersJoined.toLocaleString()}
//                   label="Volunteers"
//                   color="text-teal-500"
//                 />
//                 <MetricCard
//                   icon={FiStar}
//                   value={event.peopleRating.toFixed(1)}
//                   label="Rating"
//                   color="text-yellow-500"
//                 />
//                 <MetricCard
//                   icon={FiHeart}
//                   value={event.lovedBy}
//                   label="Top Supporter"
//                   color="text-rose-500"
//                 />
//                 <MetricCard
//                   icon={FiZap}
//                   value={`${(event.communityPeople / 1000).toFixed(1)}K+`}
//                   label="Benefited"
//                   color="text-indigo-500"
//                 />
//               </div>

//               {/* Note about joining the event */}
//               <p className="text-sm text-center text-gray-500 dark:text-gray-400 pt-4">
//                 For joining this event, please visit the event's dedicated page.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Home = () => {
//   // New State for Modal Management
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedEvent, setSelectedEvent] = useState(null);

//   // Toast state (NEW)
//   const [toast, setToast] = useState({ show: false, message: "", id: null });

//   const openModal = (event) => {
//     setSelectedEvent(event);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedEvent(null);
//   };

//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   // showToast function (NEW) — used only for Contact Handler buttons
//   const showToast = (message, duration = 3000) => {
//     // create a unique id in case multiple toasts are fired
//     const id = Date.now();
//     setToast({ show: true, message, id });

//     // auto-hide after duration
//     setTimeout(() => {
//       // only hide if the id still matches (prevents race conditions)
//       setToast((prev) => (prev.id === id ? { ...prev, show: false } : prev));
//     }, duration);
//   };

//   return (
//     <div className="space-y-18 min-h-screen bg-white dark:bg-gray-900">
//       {/* Toast UI (NEW) */}
//       <div
//         aria-live="polite"
//         className="fixed inset-0 z-[60] flex items-end px-4 py-6 pointer-events-none sm:p-6"
//       >
//         <div className="w-full flex flex-col items-center space-y-2 sm:items-end">
//           {/* Toast container */}
//           {toast.show && (
//             <div className="pointer-events-auto max-w-sm w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden transition transform duration-300 ease-out animate-toast-slide-in">
//               <div className="p-4 flex items-start gap-3">
//                 <div className="flex-shrink-0 mt-0.5">
//                   <svg
//                     className="h-6 w-6 text-white opacity-90"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     strokeWidth={1.5}
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M13 16h-1v-4h-1m1-4h.01M12 18.5a6.5 6.5 0 100-13 6.5 6.5 0 000 13z"
//                     />
//                   </svg>
//                 </div>
//                 <div className="flex-1">
//                   <p className="text-sm font-semibold">{toast.message}</p>
//                   <p className="text-xs opacity-90 mt-1">
//                     Coming soon — handled locally
//                   </p>
//                 </div>
//                 <div className="flex-shrink-0 pl-3">
//                   <button
//                     onClick={() =>
//                       setToast((prev) => ({ ...prev, show: false }))
//                     }
//                     className="inline-flex text-white/90 hover:text-white focus:outline-none"
//                     aria-label="Dismiss"
//                   >
//                     <FiX className="w-5 h-5" />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Banner Section (No Change) */}
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
//           <h1 className="text-4xl md:text-6xl font-bold text-black mb-4 animate-fadeInDown">
//             Social Development Events
//           </h1>
//           <p className="text-lg md:text-2xl text-[#B7E5CD] animate-fadeInUp">
//             Join hands in creating positive change! Social Development Events
//             connects communities, volunteers, and organizations through
//             meaningful events that inspire growth, learning, and social impact.
//           </p>
//         </div>
//       </section>

//       {/* Features Section (No Change) */}
//       <section
//         className="max-w-6xl mx-auto px-4 py-16
//                       bg-gradient-to-br from-gray-900 to-gray-950
//                       rounded-3xl shadow-2xl shadow-indigo-500/10
//                       dark:shadow-none"
//         data-aos="fade-in"
//       >
//         <h2 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-16 text-center tracking-tight">
//           <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-indigo-500">
//             Core
//           </span>{" "}
//           Features
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//           {features.map((feature, index) => {
//             const Icon = feature.icon;
//             return (
//               <div
//                 key={index}
//                 data-aos="fade-up"
//                 data-aos-delay={index * 150}
//                 // The inner feature cards still use the futuristic/neon styling
//                 className="relative bg-gray-900/50 dark:bg-gray-900/80 p-8 rounded-2xl backdrop-blur-sm shadow-xl
//                                  transition-all duration-500 transform group border border-transparent
//                                  hover:scale-[1.03] hover:-translate-y-2 border-t-4 border-indigo-500
//                                  shadow-[0_0_15px_rgba(168,85,247,0.2)] hover:shadow-[0_0_30px_rgba(168,85,247,0.7),0_0_10px_rgba(232,20,186,0.5)]
//                                  "
//               >
//                 {/* Decorative Element: Glowing Bottom Bar on Hover */}
//                 <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-fuchsia-500 to-indigo-500 rounded-b-xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

//                 <div className="flex flex-col items-center space-y-4 mb-4 text-center">
//                   {/* Animated Icon Container */}
//                   <div
//                     className="p-5 bg-gradient-to-r from-fuchsia-600/20 to-indigo-600/20 rounded-full transition-all duration-500
//                                      group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.9)] border border-fuchsia-500/50
//                                      animate-neon-pulse"
//                     style={{ animationDuration: "3s" }} // You will need to define 'animate-neon-pulse' in your global CSS
//                   >
//                     <Icon className="w-8 h-8 text-fuchsia-400 filter drop-shadow-[0_0_6px_#E879F9]" />
//                   </div>
//                   <h3 className="text-2xl font-bold text-gray-100 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-fuchsia-400 group-hover:to-indigo-400 group-hover:bg-clip-text transition-colors duration-300">
//                     {feature.title}
//                   </h3>
//                 </div>
//                 <p className="text-gray-400 dark:text-gray-300 mt-4 leading-relaxed">
//                   {feature.description}
//                 </p>
//               </div>
//             );
//           })}
//         </div>
//       </section>

//       {/* Add Custom CSS for Animation (INCLUDING NEW PULSE-GLOW AND MODAL ANIMATIONS) - NO CHANGE */}
//       <style global jsx>{`
//         /* Custom Keyframes for the Icon Pulse (Existing) */
//         @keyframes neon-pulse {
//           0%,
//           100% {
//             transform: scale(1);
//             box-shadow: 0 0 10px rgba(232, 20, 186, 0.5); /* Fuchsia glow */
//           }
//           50% {
//             transform: scale(1.05);
//             box-shadow: 0 0 20px rgba(168, 85, 247, 0.7); /* Purple glow */
//           }
//         }
//         /* The class used in the component */
//         .animate-neon-pulse {
//           animation: neon-pulse 3s infinite alternate ease-in-out;
//         }

//         /* NEW Keyframes for the Constant Card Glow */
//         @keyframes pulse-glow {
//           0%,
//           100% {
//             /* Adjust shadow colors for a more purple/pink glow */
//             box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
//               0 2px 4px -2px rgba(0, 0, 0, 0.06),
//               0 0 15px rgba(168, 85, 247, 0.4); /* Purple Glow */
//           }
//           50% {
//             box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
//               0 4px 6px -4px rgba(0, 0, 0, 0.1),
//               0 0 25px rgba(236, 72, 153, 0.6); /* Pink Glow */
//           }
//         }
//         /* The class for constant glow */
//         .animate-pulse-glow {
//           animation: pulse-glow 4s infinite alternate ease-in-out;
//         }

//         /* NEW Keyframes for Modal Fade-In */
//         @keyframes modal-fade-in {
//           from {
//             opacity: 0;
//           }
//           to {
//             opacity: 1;
//           }
//         }
//         .animate-modal-fade-in {
//           animation: modal-fade-in 0.3s forwards;
//         }

//         /* NEW Keyframes for Modal Pop-In */
//         @keyframes modal-pop-in {
//           0% {
//             transform: translate(0, -40px) scale(0.9);
//             opacity: 0.5;
//           }
//           100% {
//             transform: translate(0, 0) scale(1);
//             opacity: 1;
//           }
//         }
//         /* Note: For the modal-pop-in to work correctly on a centered component without translate(-50%, -50%),
//            we usually apply it to the content inside the centered flex container (or adjust the animation).
//            I've updated the keyframes to look good inside the centered flex container.
//         */
//         .animate-modal-pop-in {
//           animation: modal-pop-in 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
//         }

//         /* NEW Keyframes for Shimmer Effect on Modal Image */
//         @keyframes shimmer {
//           0% {
//             transform: translateX(-100%);
//           }
//           100% {
//             transform: translateX(100%);
//           }
//         }
//         .animate-shimmer {
//           animation: shimmer 1.5s infinite linear;
//         }

//         /* Toast slide-in animation */
//         @keyframes toast-slide-in {
//           from {
//             transform: translateY(20px) scale(0.98);
//             opacity: 0;
//           }
//           to {
//             transform: translateY(0) scale(1);
//             opacity: 1;
//           }
//         }
//         .animate-toast-slide-in {
//           animation: toast-slide-in 350ms ease-out forwards;
//         }
//       `}</style>

//       {/* Gallery Section (No Change) */}
//       <section className="max-w-6xl mx-auto px-4 py-16">
//         <div data-aos="fade-up" className="text-center mb-16">
//           <h2 className="text-5xl font-extrabold mb-4 tracking-tight">
//             <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
//               Our Impact
//             </span>{" "}
//             <span className="text-gray-900 dark:text-gray-100">in Action</span>
//           </h2>
//           <div className="w-32 h-1.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 mx-auto rounded-full shadow-lg shadow-blue-500/30"></div>
//           <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
//             Witness the power of community through our remarkable events
//           </p>
//         </div>

//         <Swiper
//           modules={[Navigation, Pagination, Autoplay]}
//           spaceBetween={30}
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
//           className="relative pb-14"
//         >
//           {galleryImages.map((img, idx) => (
//             <SwiperSlide key={idx}>
//               <div
//                 data-aos="fade-up"
//                 data-aos-delay={idx * 150}
//                 className="group relative"
//               >
//                 {/* Animated gradient glow */}
//                 <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 rounded-3xl opacity-0 group-hover:opacity-75 blur-xl transition duration-500 animate-pulse"></div>

//                 {/* Main card */}
//                 <div className="relative backdrop-blur-2xl bg-white/40 dark:bg-slate-900/40 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl border-2 border-white/60 dark:border-slate-700/40 transform transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2">
//                   {/* Frosted glass texture overlay */}
//                   <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iNCIgLz48L2ZpbHRlcj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI25vaXNlKSIgb3BhY2l0eT0iMC4wMyIgLz48L2Z2Zz4=')] opacity-50 pointer-events-none z-10"></div>

//                   {/* Image container */}
//                   <div className="relative h-72 sm:h-80 overflow-hidden">
//                     {/* Ice shimmer effect */}
//                     <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-200/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 z-20"></div>

//                     {/* Gradient overlay */}
//                     <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/60 via-blue-900/20 to-transparent z-10"></div>

//                     <img
//                       src={img}
//                       alt={`Gallery ${idx + 1}`}
//                       className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
//                     />
//                   </div>

//                   {/* Content overlay at bottom */}
//                   <div className="absolute bottom-0 left-0 right-0 p-6 backdrop-blur-xl bg-white/70 dark:bg-slate-900/70 border-t-2 border-white/60 dark:border-slate-700/40 z-20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
//                     <h3 className="text-lg font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-1">
//                       Community Event
//                     </h3>
//                     <p className="text-sm text-gray-700 dark:text-gray-300">
//                       Making a difference together
//                     </p>
//                   </div>

//                   {/* Bottom glow bar */}
//                   <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//           <div className="swiper-button-prev custom-swiper-nav-btn !left-2 !-translate-y-1/2"></div>
//           <div className="swiper-button-next custom-swiper-nav-btn !right-2 !-translate-y-1/2"></div>
//         </Swiper>
//       </section>

//       <section className="max-w-7xl mx-auto px-4 py-20">
//         <div data-aos="fade-up" className="text-center mb-16">
//           <h2 className="text-5xl font-extrabold text-gray-900 dark:text-gray-100 mb-4 tracking-tight">
//             <span className="text-purple-600 dark:text-purple-400">Top</span>{" "}
//             Impact Events
//           </h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6 rounded-full"></div>
//           <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
//             Discover the most impactful and highly-rated social events.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {topEvents.map((event, index) => (
//             <div
//               key={event.id}
//               data-aos="fade-up"
//               data-aos-delay={index * 150}
//               className="group relative"
//             >
//               {/* Card Container with Constant Glow Class */}
//               <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transform hover:-translate-y-3 transition-all duration-500 border border-white/20 dark:border-gray-700/50 animate-pulse-glow">
//                 {/* Gradient Top Border */}
//                 <div className={`h-2 bg-gradient-to-r ${event.color}`}></div>

//                 {/* Event Image */}
//                 <div className="relative h-48 overflow-hidden">
//                   <div
//                     className={`absolute inset-0 bg-gradient-to-b ${event.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500 z-10`}
//                   ></div>
//                   <img
//                     src={event.image}
//                     alt={event.title}
//                     className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
//                   />
//                 </div>

//                 {/* Content Section */}
//                 <div className="p-6 space-y-4">
//                   {/* Title & Location */}
//                   <div>
//                     <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text transition-all duration-300">
//                       {event.title}
//                     </h3>
//                     <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
//                       <FiMapPin className="w-4 h-4 mr-1 text-purple-500" />
//                       {event.location}
//                     </div>
//                   </div>

//                   {/* Key Metrics */}
//                   <div className="grid grid-cols-2 gap-3 text-center pt-2">
//                     <MetricCard
//                       icon={FiUsers}
//                       value={event.usersJoined.toLocaleString()}
//                       label="Users Joined"
//                       color="text-teal-500"
//                     />
//                     <MetricCard
//                       icon={FiStar}
//                       value={event.peopleRating.toFixed(1)}
//                       label="People Rating"
//                       color="text-yellow-500"
//                     />
//                     <MetricCard
//                       icon={FiHeart}
//                       value={event.lovedBy}
//                       label="Loved By"
//                       color="text-rose-500"
//                     />
//                     <MetricCard
//                       icon={FiZap}
//                       value={`${(event.communityPeople / 1000).toFixed(1)}K+`}
//                       label="People Benefited"
//                       color="text-indigo-500"
//                     />
//                   </div>

//                   {/* Impact Highlight */}
//                   <div className="bg-purple-50 dark:bg-gray-700/50 p-3 rounded-xl">
//                     <p className="text-sm font-semibold text-purple-600 dark:text-purple-400 mb-1">
//                       Impact Summary
//                     </p>
//                     <p className="text-sm text-gray-700 dark:text-gray-300">
//                       {event.others}
//                     </p>
//                   </div>

//                   {/* View Details Button - OPENS MODAL */}
//                   <button
//                     type="button"
//                     onClick={() => openModal(event)}
//                     className={`w-full mt-4 bg-gradient-to-r ${event.color} text-white font-semibold py-3 rounded-xl hover:shadow-xl transform hover:scale-105 transition-all duration-300`}
//                   >
//                     View Event Details
//                   </button>
//                 </div>

//                 {/* Bottom Glow Effect */}
//                 <div
//                   className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${event.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
//                 ></div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ....................Top Event Handlers...................... */}

//       <section className="max-w-7xl mx-auto px-4 py-20">
//         <div data-aos="fade-up" className="text-center mb-16">
//           <h2 className="text-5xl font-extrabold text-gray-900 dark:text-gray-100 mb-4 tracking-tight">
//             <span className="text-blue-600 dark:text-blue-400">Top</span> Event
//             Handlers
//           </h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 rounded-full"></div>
//           <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
//             Meet our exceptional event coordinators who have made remarkable
//             contributions to the community
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {topHandlers.map((handler, index) => (
//             <div
//               key={handler.id}
//               data-aos="fade-up"
//               data-aos-delay={index * 150}
//               className="group relative"
//             >
//               {/* Card Container */}
//               <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transform hover:-translate-y-3 transition-all duration-500 border border-white/20 dark:border-gray-700/50">
//                 {/* Gradient Top Border */}
//                 <div className={`h-2 bg-gradient-to-r ${handler.color}`}></div>

//                 {/* Badge */}
//                 <div className="absolute top-6 right-6 z-10">
//                   <div
//                     className={`bg-gradient-to-r ${handler.color} text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1`}
//                   >
//                     <FiAward className="w-3 h-3" />
//                     {handler.badge}
//                   </div>
//                 </div>

//                 {/* Image Section with Gradient Overlay */}
//                 <div className="relative h-64 overflow-hidden">
//                   <div
//                     className={`absolute inset-0 bg-gradient-to-b ${handler.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500 z-10`}
//                   ></div>
//                   <img
//                     src={handler.image}
//                     alt={handler.name}
//                     className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
//                   />
//                   {/* Shimmer Effect */}
//                   <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
//                 </div>

//                 {/* Content Section */}
//                 <div className="p-6 space-y-4">
//                   {/* Name & Age */}
//                   <div>
//                     <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
//                       {handler.name}
//                     </h3>
//                     <p className="text-sm text-gray-500 dark:text-gray-400">
//                       {handler.age} years old
//                     </p>
//                   </div>

//                   {/* Rating */}
//                   <div className="flex items-center gap-2">
//                     <div className="flex items-center">
//                       {[...Array(5)].map((_, i) => (
//                         <FiStar
//                           key={i}
//                           className={`w-4 h-4 ${
//                             i < Math.floor(handler.rating)
//                               ? "text-yellow-400 fill-yellow-400"
//                               : "text-gray-300 dark:text-gray-600"
//                           }`}
//                         />
//                       ))}
//                     </div>
//                     <span className="text-sm font-bold text-gray-700 dark:text-gray-300">
//                       {handler.rating}
//                     </span>
//                     <span className="text-xs text-gray-500 dark:text-gray-400">
//                       ({handler.events} events)
//                     </span>
//                   </div>

//                   {/* Expertise */}
//                   <div className="bg-blue-50 dark:bg-gray-700/50 p-3 rounded-xl">
//                     <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-1">
//                       Expertise
//                     </p>
//                     <p className="text-sm text-gray-700 dark:text-gray-300">
//                       {handler.expertise}
//                     </p>
//                   </div>

//                   {/* Contact Info */}
//                   <div className="space-y-2 pt-2">
//                     <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
//                       <HiMail className="w-4 h-4 flex-shrink-0" />
//                       <span className="truncate">{handler.email}</span>
//                     </div>
//                     <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
//                       <FiPhone className="w-4 h-4 flex-shrink-0" />
//                       <span>{handler.phone}</span>
//                     </div>
//                   </div>

//                   {/* Contact Button */}
//                   <button
//                     type="button"
//                     // REPLACED alert() with showToast() so a beautiful toast appears instead of native alert
//                     onClick={() => showToast(`Contacting ${handler.name}...`)}
//                     className={`w-full mt-4 bg-gradient-to-r ${handler.color} text-white font-semibold py-3 rounded-xl hover:shadow-xl transform hover:scale-105 transition-all duration-300`}
//                   >
//                     Contact Handler
//                   </button>
//                 </div>

//                 {/* Bottom Glow Effect */}
//                 <div
//                   className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${handler.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
//                 ></div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Newsletter Section (No Change) */}
//       <section className="max-w-4xl mx-auto px-4 py-12 mb-16">
//         <div
//           data-aos="fade-up"
//           className="bg-blue-50 dark:bg-gray-700 p-8 md:p-12 rounded-3xl shadow-2xl border-t-4 border-blue-600 dark:border-blue-400 text-center"
//         >
//           <FiMail className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
//           <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-4">
//             Join Our Movement!
//           </h2>
//           <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
//             Get the latest updates on community events, volunteering
//             opportunities, and positive impact stories delivered straight to
//             your inbox.
//           </p>
//           <div className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:max-w-md mx-auto">
//             <input
//               type="email"
//               placeholder="Your email address"
//               className="px-6 py-3 rounded-full border-2 border-blue-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 w-full transition-all duration-300 shadow-md"
//             />
//             <button
//               type="button"
//               onClick={() => alert("Newsletter subscription coming soon!")}
//               className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
//             >
//               Subscribe Now
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5"
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//               >
//                 <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
//                 <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* RENDER MODAL */}
//       {isModalOpen && <EventModal event={selectedEvent} onClose={closeModal} />}
//     </div>
//   );
// };

// export default Home;

// ....................
import React, { useEffect, useState } from "react";
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

// react-hot-toast (only toast — centralized Toaster lives elsewhere)
import { toast } from "react-hot-toast";

// Icons for Features
import {
  FiEdit,
  FiUsers,
  FiSettings,
  FiMail,
  FiPhone,
  FiStar,
  FiAward,
  FiMapPin, // New Icon for Location
  FiHeart, // New Icon for Loved By
  FiZap, // New Icon for Others/Impact
  FiX, // Icon for Modal Close
} from "react-icons/fi";
import { HiMail } from "react-icons/hi";

// Image Imports (Keep existing imports)
import banner1 from "../assets/images/banner1.jpg";
import banner2 from "../assets/images/banner2.jpg";
import banner3 from "../assets/images/banner3.jpg";
import banner4 from "../assets/images/foodtoChilds.jpg";

import gallery1 from "../assets/images/banner1.jpg";
import gallery2 from "../assets/images/pexels-cottonbro-6157554.jpg";
import gallery3 from "../assets/images/pexels-levsi-31858860.jpg";
import gallery4 from "../assets/images/FoodtoPoors.jpg";
import gallery5 from "../assets/images/RoadWorker.jpg";
import gallery6 from "../assets/images/Firefighter.jpg";
import gallery7 from "../assets/images/helpingOldpeople.jpg";
import gallery8 from "../assets/images/helpingPoorMan.jpg";

const bannerImages = [banner1, banner2, banner3, banner4];

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
  gallery7,
  gallery8,
];

// Best Social Event Handlers Data (Keep existing data)
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

// --- DATA FOR BEST EVENTS SECTION ---
const topEvents = [
  {
    id: 1,
    title: "Coastal Cleanup Drive",
    location: "Sunset Beach, CA",
    usersJoined: 450,
    peopleRating: 4.9,
    communityPeople: 12000, // Total people in the community who benefited
    lovedBy: "Environmentalists",
    others: "Removed 5 tons of trash",
    image:
      "https://i.ibb.co.com/dJc2S7TQ/ocg-saving-the-ocean-nm-Zh-Tk-Zik8g-unsplash.jpg",
    color: "from-teal-400 to-cyan-600",
    description:
      "An organized effort to clear trash and debris from the local coastline. This event brought together volunteers from all ages to restore the natural beauty of Sunset Beach and protect marine life.",
  },
  {
    id: 2,
    title: "STEM Mentorship Workshop",
    location: "City Education Center, NY",
    usersJoined: 320,
    peopleRating: 4.8,
    communityPeople: 7500, // Students & Parents
    lovedBy: "Young Students",
    others: "50+ mentors volunteered",
    image:
      "https://i.ibb.co.com/xSQTQbNt/frankie-cordoba-pu-A8ce-Prit-E-unsplash.jpg",
    color: "from-rose-400 to-pink-600",
    description:
      "A workshop dedicated to inspiring the next generation of scientists and engineers. Experienced professionals mentored students in various STEM fields, fostering innovation and critical thinking.",
  },
  {
    id: 3,
    title: "Seniors' Digital Literacy Class",
    location: "Community Library, TX",
    usersJoined: 180,
    peopleRating: 5.0,
    communityPeople: 3000, // Seniors trained
    lovedBy: "Elderly Citizens",
    others: "Bridging the digital divide",
    image: "https://i.ibb.co.com/5WD0KSZX/pexels-kampus-7983553.jpg",
    color: "from-indigo-400 to-violet-600",
    description:
      "Essential classes designed to help elderly citizens navigate modern technology, covering everything from smartphones to online safety. A crucial step in bridging the generational digital divide.",
  },
];
// ------------------------------------

// Helper Component for the Metric Cards inside the Event Card
const MetricCard = ({ icon: Icon, value, label, color }) => (
  <div className="flex flex-col items-center p-2 rounded-lg bg-gray-100/70 dark:bg-gray-700/70 transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-700/90">
    <Icon className={`w-5 h-5 ${color}`} />
    <span className="text-lg font-bold text-gray-800 dark:text-white mt-1">
      {value}
    </span>
    <span className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
      {label}
    </span>
  </div>
);

// New Event Modal Component
const EventModal = ({ event, onClose }) => {
  if (!event) return null;

  return (
    // Modal Overlay - Animated fade in
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70 backdrop-blur-sm transition-opacity duration-300 ease-in-out animate-modal-fade-in">
      {/* Modal Container - Animated scale up */}
      <div
        className={`relative w-full max-w-2xl bg-white dark:bg-gray-900 rounded-3xl shadow-2xl transform transition-all duration-500 ease-in-out animate-modal-pop-in overflow-hidden`}
      >
        {/* Animated Glossy Gradient Card Background */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${event.color} opacity-40 blur-2xl z-0`}
        ></div>
        <div className="relative z-10 p-1 bg-white/50 dark:bg-gray-800/50 backdrop-blur-xl rounded-3xl border border-white/50 dark:border-gray-700/50">
          <div className="relative bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-inner-xl">
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 bg-white/70 dark:bg-gray-800/70 rounded-full text-gray-800 dark:text-white hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 z-20 shadow-lg hover:scale-110"
            >
              <FiX className="w-6 h-6" />
            </button>

            {/* Event Image with Shimmer */}
            <div className="relative h-64 overflow-hidden">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t ${event.color} opacity-30`}
              ></div>
              {/* Image Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-shimmer"></div>
            </div>

            {/* Event Details Content */}
            <div className="p-8 space-y-6">
              <h2
                className={`text-4xl font-extrabold text-gray-900 dark:text-white mb-2 text-center`}
              >
                <span
                  className={`bg-clip-text text-transparent bg-gradient-to-r ${event.color}`}
                >
                  {event.title}
                </span>
              </h2>

              <div className="flex items-center justify-center text-lg text-gray-600 dark:text-gray-400 mb-4">
                <FiMapPin className="w-5 h-5 mr-2 text-purple-500" />
                <span>{event.location}</span>
              </div>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-center">
                {event.description}
              </p>

              {/* Key Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <MetricCard
                  icon={FiUsers}
                  value={event.usersJoined.toLocaleString()}
                  label="Volunteers"
                  color="text-teal-500"
                />
                <MetricCard
                  icon={FiStar}
                  value={event.peopleRating.toFixed(1)}
                  label="Rating"
                  color="text-yellow-500"
                />
                <MetricCard
                  icon={FiHeart}
                  value={event.lovedBy}
                  label="Top Supporter"
                  color="text-rose-500"
                />
                <MetricCard
                  icon={FiZap}
                  value={`${(event.communityPeople / 1000).toFixed(1)}K+`}
                  label="Benefited"
                  color="text-indigo-500"
                />
              </div>

              {/* Note about joining the event */}
              <p className="text-sm text-center text-gray-500 dark:text-gray-400 pt-4">
                For joining this event, please visit the event's dedicated page.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  // New State for Modal Management
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const openModal = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="space-y-18 min-h-screen bg-white dark:bg-gray-900">
      {/* NOTE: centralized Toaster expected in your App/layout — no local Toaster here */}

      {/* Banner Section (No Change) */}
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

      {/* Features Section (No Change) */}
      <section
        className="max-w-6xl mx-auto px-4 py-16 
                      bg-gradient-to-br from-gray-900 to-gray-950 
                      rounded-3xl shadow-2xl shadow-indigo-500/10 
                      dark:shadow-none"
        data-aos="fade-in"
      >
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-16 text-center tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-indigo-500">
            Core
          </span>{" "}
          Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 150}
                // The inner feature cards still use the futuristic/neon styling
                className="relative bg-gray-900/50 dark:bg-gray-900/80 p-8 rounded-2xl backdrop-blur-sm shadow-xl 
                                 transition-all duration-500 transform group border border-transparent 
                                 hover:scale-[1.03] hover:-translate-y-2 border-t-4 border-indigo-500 
                                 shadow-[0_0_15px_rgba(168,85,247,0.2)] hover:shadow-[0_0_30px_rgba(168,85,247,0.7),0_0_10px_rgba(232,20,186,0.5)] 
                                 "
              >
                {/* Decorative Element: Glowing Bottom Bar on Hover */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-fuchsia-500 to-indigo-500 rounded-b-xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

                <div className="flex flex-col items-center space-y-4 mb-4 text-center">
                  {/* Animated Icon Container */}
                  <div
                    className="p-5 bg-gradient-to-r from-fuchsia-600/20 to-indigo-600/20 rounded-full transition-all duration-500 
                                     group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.9)] border border-fuchsia-500/50
                                     animate-neon-pulse"
                    style={{ animationDuration: "3s" }}
                  >
                    <Icon className="w-8 h-8 text-fuchsia-400 filter drop-shadow-[0_0_6px_#E879F9]" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-100 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-fuchsia-400 group-hover:to-indigo-400 group-hover:bg-clip-text transition-colors duration-300">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-400 dark:text-gray-300 mt-4 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Add Custom CSS for Animation (INCLUDING NEW PULSE-GLOW AND MODAL ANIMATIONS) - NO CHANGE */}
      <style global jsx>{`
        /* Custom Keyframes for the Icon Pulse (Existing) */
        @keyframes neon-pulse {
          0%,
          100% {
            transform: scale(1);
            box-shadow: 0 0 10px rgba(232, 20, 186, 0.5); /* Fuchsia glow */
          }
          50% {
            transform: scale(1.05);
            box-shadow: 0 0 20px rgba(168, 85, 247, 0.7); /* Purple glow */
          }
        }
        /* The class used in the component */
        .animate-neon-pulse {
          animation: neon-pulse 3s infinite alternate ease-in-out;
        }

        /* NEW Keyframes for the Constant Card Glow */
        @keyframes pulse-glow {
          0%,
          100% {
            /* Adjust shadow colors for a more purple/pink glow */
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
              0 2px 4px -2px rgba(0, 0, 0, 0.06),
              0 0 15px rgba(168, 85, 247, 0.4); /* Purple Glow */
          }
          50% {
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
              0 4px 6px -4px rgba(0, 0, 0, 0.1),
              0 0 25px rgba(236, 72, 153, 0.6); /* Pink Glow */
          }
        }
        /* The class for constant glow */
        .animate-pulse-glow {
          animation: pulse-glow 4s infinite alternate ease-in-out;
        }

        /* NEW Keyframes for Modal Fade-In */
        @keyframes modal-fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-modal-fade-in {
          animation: modal-fade-in 0.3s forwards;
        }

        /* NEW Keyframes for Modal Pop-In */
        @keyframes modal-pop-in {
          0% {
            transform: translate(0, -40px) scale(0.9);
            opacity: 0.5;
          }
          100% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
          }
        }
        .animate-modal-pop-in {
          animation: modal-pop-in 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        /* NEW Keyframes for Shimmer Effect on Modal Image */
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 1.5s infinite linear;
        }
      `}</style>

      {/* Gallery Section (No Change) */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div data-aos="fade-up" className="text-center mb-16">
          <h2 className="text-5xl font-extrabold mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Our Impact
            </span>{" "}
            <span className="text-gray-900 dark:text-gray-100">in Action</span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 mx-auto rounded-full shadow-lg shadow-blue-500/30"></div>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Witness the power of community through our remarkable events
          </p>
        </div>

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
          className="relative pb-14"
        >
          {galleryImages.map((img, idx) => (
            <SwiperSlide key={idx}>
              <div
                data-aos="fade-up"
                data-aos-delay={idx * 150}
                className="group relative"
              >
                {/* Animated gradient glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 rounded-3xl opacity-0 group-hover:opacity-75 blur-xl transition duration-500 animate-pulse"></div>

                {/* Main card */}
                <div className="relative backdrop-blur-2xl bg-white/40 dark:bg-slate-900/40 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl border-2 border-white/60 dark:border-slate-700/40 transform transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2">
                  {/* Frosted glass texture overlay */}
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iNCIgLz48L2ZpbHRlcj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI25vaXNlKSIgb3BhY2l0eT0iMC4wMyIgLz48L2Z2Zz4=')] opacity-50 pointer-events-none z-10"></div>

                  {/* Image container */}
                  <div className="relative h-72 sm:h-80 overflow-hidden">
                    {/* Ice shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-200/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 z-20"></div>

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/60 via-blue-900/20 to-transparent z-10"></div>

                    <img
                      src={img}
                      alt={`Gallery ${idx + 1}`}
                      className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                    />
                  </div>

                  {/* Content overlay at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 backdrop-blur-xl bg-white/70 dark:bg-slate-900/70 border-t-2 border-white/60 dark:border-slate-700/40 z-20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-lg font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-1">
                      Community Event
                    </h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Making a difference together
                    </p>
                  </div>

                  {/* Bottom glow bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-button-prev custom-swiper-nav-btn !left-2 !-translate-y-1/2"></div>
          <div className="swiper-button-next custom-swiper-nav-btn !right-2 !-translate-y-1/2"></div>
        </Swiper>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-20">
        <div data-aos="fade-up" className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900 dark:text-gray-100 mb-4 tracking-tight">
            <span className="text-purple-600 dark:text-purple-400">Top</span>{" "}
            Impact Events
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover the most impactful and highly-rated social events.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topEvents.map((event, index) => (
            <div
              key={event.id}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="group relative"
            >
              {/* Card Container with Constant Glow Class */}
              <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transform hover:-translate-y-3 transition-all duration-500 border border-white/20 dark:border-gray-700/50 animate-pulse-glow">
                {/* Gradient Top Border */}
                <div className={`h-2 bg-gradient-to-r ${event.color}`}></div>

                {/* Event Image */}
                <div className="relative h-48 overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-b ${event.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500 z-10`}
                  ></div>
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Content Section */}
                <div className="p-6 space-y-4">
                  {/* Title & Location */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text transition-all duration-300">
                      {event.title}
                    </h3>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <FiMapPin className="w-4 h-4 mr-1 text-purple-500" />
                      {event.location}
                    </div>
                  </div>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 gap-3 text-center pt-2">
                    <MetricCard
                      icon={FiUsers}
                      value={event.usersJoined.toLocaleString()}
                      label="Users Joined"
                      color="text-teal-500"
                    />
                    <MetricCard
                      icon={FiStar}
                      value={event.peopleRating.toFixed(1)}
                      label="People Rating"
                      color="text-yellow-500"
                    />
                    <MetricCard
                      icon={FiHeart}
                      value={event.lovedBy}
                      label="Loved By"
                      color="text-rose-500"
                    />
                    <MetricCard
                      icon={FiZap}
                      value={`${(event.communityPeople / 1000).toFixed(1)}K+`}
                      label="People Benefited"
                      color="text-indigo-500"
                    />
                  </div>

                  {/* Impact Highlight */}
                  <div className="bg-purple-50 dark:bg-gray-700/50 p-3 rounded-xl">
                    <p className="text-sm font-semibold text-purple-600 dark:text-purple-400 mb-1">
                      Impact Summary
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      {event.others}
                    </p>
                  </div>

                  {/* View Details Button - OPENS MODAL */}
                  <button
                    type="button"
                    onClick={() => openModal(event)}
                    className={`w-full mt-4 bg-gradient-to-r ${event.color} text-white font-semibold py-3 rounded-xl hover:shadow-xl transform hover:scale-105 transition-all duration-300`}
                  >
                    View Event Details
                  </button>
                </div>

                {/* Bottom Glow Effect */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${event.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ....................Top Event Handlers...................... */}

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
              {/* Card Container */}
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
                    type="button"
                    // using react-hot-toast for a nicer alert with 3s timeout
                    onClick={() =>
                      toast.success(`Contacting ${handler.name}...`, {
                        duration: 3000,
                      })
                    }
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

      {/* Newsletter Section (No Change) */}
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
              onClick={() =>
                toast("Newsletter subscription coming soon!", {
                  duration: 3000,
                })
              }
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

      {/* RENDER MODAL */}
      {isModalOpen && <EventModal event={selectedEvent} onClose={closeModal} />}
    </div>
  );
};

export default Home;
