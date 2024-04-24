import Home from "./Component/Home/Home.jsx";
import Cart from "./Component/Cart/Cart.jsx";
import Footer from "./Component/Footer/Footer.jsx";
import { Provider } from "react-redux";
import store from "./Store/store.js"; // Import your Redux store
import Navbar from "./Component/Navbar/Navbar.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FoodImageProvider } from "./Component/Storecontext/FoodImageContext.jsx";
import Placeholder from "./Component/Placeholder/Placeorder";
import { useState } from "react";
import Login from "./Component/Login/Login.jsx";
function App() {
  const [isSignInOpen, setIsSignInOpen] = useState(false); // State variable to manage the visibility of the login page
  console.log(isSignInOpen);
  return (
    <Provider store={store}>
      <Router>
        <FoodImageProvider>
          <div>
            <Navbar setIsSignInOpen={setIsSignInOpen} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/order" element={<Placeholder />} />
            </Routes>
            {isSignInOpen && <Login setIsSignInOpen={setIsSignInOpen} />}
            <Footer />
            {/* Render the Login component if isSignInOpen is true */}
          </div>
        </FoodImageProvider>
      </Router>
    </Provider>
  );
}
export default App;
