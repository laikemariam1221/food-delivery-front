import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FoodImageProvider } from "./Component/Storecontext/FoodImageContext.jsx";
import Navbar from "./Component/Navbar/Navbar.js";
import Home from "./Component/Home/Home.jsx";
import Cart from "./Component/Cart/Cart.jsx";
import Footer from "./Component/Footer/Footer.jsx";
import Login from "./Component/Login/Login.jsx"; // Import the Login component

function App() {
  const [isSignInOpen, setIsSignInOpen] = useState(false); // State variable to manage the visibility of the login page

  return (
    <Router>
      <FoodImageProvider>
        <div className={isSignInOpen ? "blur-background" : ""}>
          {/* Add blur class to the background when login page is open */}
          <Navbar setIsSignInOpen={setIsSignInOpen} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </div>
        {isSignInOpen && <Login setIsSignInOpen={setIsSignInOpen} />} {/* Render the Login component if isSignInOpen is true */}
      </FoodImageProvider>
    </Router>
  );
}

export default App;
