import { Route, Routes, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About"; 
import Contact from "./components/pages/Contact";
import NotFound from "./components/pages/NotFound";
import Product from "./components/pages/Product";
import Men from "./components/pages/Men";
import Women from "./components/pages/Women";


const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>

        <Route path="/" element={<Home/>} />
        <Route path="about" element={<About/>} />
        <Route path="contact" element={<Contact/>} />
        <Route path="product" element={<Product/>} >
          <Route path="men" element={<Men/>} />
          <Route path="women" element={<Women/>} />
        </Route>

        <Route path="*" element={<NotFound/>}/>
      
      </Routes>
</div>
  );
};

export default App;
