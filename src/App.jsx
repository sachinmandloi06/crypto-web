import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PageNotFound from "./pages/PageNotFound";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import PrivateRoute from "./components/PrivateRoute";
import Coindetails from "./pages/Coindetails";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user" element={<PrivateRoute />}>
          <Route path="settings" element={<Settings />} />
          <Route path="profile" element={<Profile />} />
          <Route path="coin/:id" element={<Coindetails />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
      <ToastContainer />
    </Router>
  );
};

export default App;
123;
