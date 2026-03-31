// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Home from "./pages/Home";
// import Book from "./pages/Book";
// import Appointment from "./pages/Appointment";
// import Profile from "./pages/Profile";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/book" element={<Book />} />
//         <Route path="/appointments" element={<Appointment />} />
//         <Route path="/profile" element={<Profile />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import "./App.css";
import Home from "./pages/Home";
import Book from "./pages/Book";
import Appointment from "./pages/Appointment";
import Profile from "./pages/Profile";

const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/book" element={<PageWrapper><Book /></PageWrapper>} />
        <Route path="/appointments" element={<PageWrapper><Appointment /></PageWrapper>} />
        <Route path="/profile" element={<PageWrapper><Profile /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;