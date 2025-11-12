import React from "react";
import AppRouter from "./routes/router"; // make sure this path is correct

const App = () => {
  return <AppRouter />;
};

export default App; //

// dark wrapper.........................2.............

// import React from "react";
// import AppRouter from "./routes/router";

// const App = () => {
//   return (
//     <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
//       <AppRouter />
//     </div>
//   );
// };

// export default App;

// ..............3..............
// import React from "react";
// import AppRouter from "./routes/router";
// import { ThemeProvider } from "./context/ThemeContext";

// const App = () => {
//   return (
//     <ThemeProvider>
//       <div className="min-h-screen transition-colors duration-300 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
//         <AppRouter />
//       </div>
//     </ThemeProvider>
//   );
// };

// export default App;
