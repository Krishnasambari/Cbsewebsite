import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube, ArrowRight } from "lucide-react";
// import logo from "https://cbseassets.s3.ap-south-1.amazonaws.com/logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#0b1120] text-gray-400 pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: About */}
          <div className="space-y-6">
            <Link to="/" className="inline-block bg-white p-2 rounded-lg">
              <img
                src="https://cbseassets.s3.ap-south-1.amazonaws.com/logo.png"
                alt="Sri Chaitanya Techno School"
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-sm leading-relaxed text-gray-300">
              Sri Chaitanya Techno School is committed to holistic education, blending academic rigor with character development to nurture future leaders.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="bg-gray-800 hover:bg-[#1877f2] text-white p-2 rounded-full transition-colors"><Facebook size={18} /></a>
              <a href="#" className="bg-gray-800 hover:bg-[#1da1f2] text-white p-2 rounded-full transition-colors"><Twitter size={18} /></a>
              <a href="#" className="bg-gray-800 hover:bg-[#c32aa3] text-white p-2 rounded-full transition-colors"><Instagram size={18} /></a>
              <a href="#" className="bg-gray-800 hover:bg-[#ff0000] text-white p-2 rounded-full transition-colors"><Youtube size={18} /></a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6 border-l-4 border-[#a41f2a] pl-3">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors flex items-center gap-2"><ArrowRight size={14} className="text-[#a41f2a]" /> About Us</Link></li>
              <li><Link to="/academics" className="hover:text-white transition-colors flex items-center gap-2"><ArrowRight size={14} className="text-[#a41f2a]" /> Academics</Link></li>
              <li><Link to="/admissions" className="hover:text-white transition-colors flex items-center gap-2"><ArrowRight size={14} className="text-[#a41f2a]" /> Admissions</Link></li>
              <li><Link to="/events" className="hover:text-white transition-colors flex items-center gap-2"><ArrowRight size={14} className="text-[#a41f2a]" /> Events & News</Link></li>
              <li><Link to="/disclosure" className="hover:text-white transition-colors flex items-center gap-2"><ArrowRight size={14} className="text-[#a41f2a]" /> Mandatory Disclosure</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6 border-l-4 border-[#a41f2a] pl-3">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-[#a41f2a] mt-0.5 shrink-0" />
                <span>123, School Road, Yercaud Foothills,<br />Salem, Tamil Nadu - 636001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-[#a41f2a] shrink-0" />
                <a href="tel:+911234567890" className="hover:text-white transition-colors">+91 12345 67890</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-[#a41f2a] shrink-0" />
                <a href="mailto:info@srichaitanyatechnoschool.net" className="hover:text-white transition-colors">info@srichaitanyatechnoschool.net</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Map */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6 border-l-4 border-[#a41f2a] pl-3">Locate Us</h3>
            <div className="bg-gray-800 rounded-lg h-40 w-full overflow-hidden relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.6841263538466!2d78.14601431481267!3d11.645396991734915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf1ccf52cba0b%3A0xbc4ea0a524e75293!2sYercaud%20Foothills%2C%20Salem%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1645509923847!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                title="School Location"
                className="opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Sri Chaitanya Techno School. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
