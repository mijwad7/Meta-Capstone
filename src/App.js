// App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/Homepage";
import BookingPage from "./components/BookingPage";
import MainPage from "./components/Main";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import About from "./components/About";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
