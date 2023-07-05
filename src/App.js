import React from "react";
import { Route, Routes } from "react-router-dom";
import { Container } from "semantic-ui-react";
import Navbar from "./components/navbar/Navbar";
import Home from "./screens/home/Home";
import About from "./screens/about/About";
import Services from "./screens/services/Services";
import Blog from "./screens/blog/Blog";
import Contact from "./screens/contact/Contact";
function App() {
  return (
    <Container>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Container>
  );
}

export default App;
