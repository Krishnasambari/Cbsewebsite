import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ScrollRestoration } from "react-router";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900 font-sans">
      <ScrollRestoration />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
