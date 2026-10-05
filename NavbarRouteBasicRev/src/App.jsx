import { Route, Routes, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About"; 
import Contact from "./components/pages/Contact";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>

        <Route path="/" element={<Home/>} />
        <Route path="about" element={<About/>} />
        <Route path="contact" element={<Contact/>} />
      
      </Routes>
</div>
  );
};

export default App;
