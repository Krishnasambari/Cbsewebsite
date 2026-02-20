import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Admissions from "./pages/Admissions";
import Academics from "./pages/Academics";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Events from "./pages/Events";
import Disclosure from "./pages/Disclosure";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="admissions" element={<Admissions />} />
          <Route path="academics" element={<Academics />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Contact />} />
          <Route path="events" element={<Events />} />
          <Route path="disclosure" element={<Disclosure />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
