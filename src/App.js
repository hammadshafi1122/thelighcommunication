import { Routes, Route, BrowserRouter } from "react-router-dom";
import  Home  from './pages/Home';
import { AboutUs } from "./pages/AboutUs";
import { ContactUs } from './pages/ContactUs';
import {Inbound} from './pages/Inbound'
import {Outbound} from './pages/Outbound'
function App() {
  return (
    <div className="" >
 
    <BrowserRouter>
<div className="mx-auto   h-screen bg-red-200">
  
      <Routes className="bg-green-900  flex justify-center items-start">
        <Route path="/" element={<Home />} />
        <Route path="/inbound" element={<Inbound />} />
        <Route path="/outbound" element={<Outbound />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
</div>
    </BrowserRouter>


    </div>
  );
}

export default App;