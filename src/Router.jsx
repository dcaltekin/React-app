
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import Contact from "./pages/Contact";


function Router() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/contact" element={<Contact />} />
        <Route path="/index" element={<Home />} />
        <Route path="/" element={<Home />} />
      </Routes>

    </BrowserRouter>
  );
}

export default Router;