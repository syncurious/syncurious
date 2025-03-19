import React from "react";
import { FaRegEnvelope, FaWhatsapp } from "react-icons/fa";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity z-30 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-background shadow-lg transform transition-transform z-40 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4">
          <button onClick={onClose} className="text-white mb-4">
            ✕
          </button>
          <nav className="flex flex-col text-white gap-4">
            <a href="Home" className="hover:text-gray-300">
              Home
            </a>
            <a href="AboutUs" className="hover:text-gray-300">
              About Us
            </a>
            <a href="Services" className="hover:text-gray-300">
              Services
            </a>
            <a href="Portfolio" className="hover:text-gray-300">
              Portfolio
            </a>
            <a href="Blogs" className="hover:text-gray-300">
              Blogs
            </a>
            <a href="Contact" className="hover:text-gray-300">
              Contact
            </a>
          </nav>
          <div className="mt-4 pt-4 border-t border-gray-600">
            <div className="flex gap-2">
              <a
                href="https://api.whatsapp.com/send?phone=033272199402"
                target="_blank"
              >
                <FaWhatsapp className="text-primary" />
              </a>
              <a href="mailto:Syncurious@gmail.com" target="_blank">
                <FaRegEnvelope className="text-primary" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Drawer;
