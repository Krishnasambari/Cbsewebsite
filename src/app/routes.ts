import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Admissions from "./pages/Admissions";
import Academics from "./pages/Academics";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Events from "./pages/Events";
import Disclosure from "./pages/Disclosure";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "admissions", Component: Admissions },
      { path: "academics", Component: Academics },
      { path: "gallery", Component: Gallery },
      { path: "contact", Component: Contact },
      { path: "events", Component: Events },
      { path: "disclosure", Component: Disclosure },
    ],
  },
]);
