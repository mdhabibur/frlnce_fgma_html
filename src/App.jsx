import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter , Routes, Route} from 'react-router-dom';

import "./App.css";
import Home from "./pages/Home";
import NotFound from "./components/navigation/NotFound";
import Navbar from "./components/navigation/Navbar";
import Footer from "./components/navigation/Footer";

function App() {
	return (
    <BrowserRouter>
      <Navbar  />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
	);
}

export default App;
