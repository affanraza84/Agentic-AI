"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Wallet } from "lucide-react";

const navLinks = ["Home", "Features", "Insights", "Wallet", "Contact"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 backdrop-blur-md shadow-lg px-6 py-4"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="flex items-center gap-2 text-white font-bold text-xl"
        >
          <Wallet className="text-green-400 text-2xl" />
          Project Raseed
        </motion.div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 text-white font-medium">
          {navLinks.map((link, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.1 }}
              className="relative group cursor-pointer"
            >
              {link}
              <motion.span
                layoutId="underline"
                className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"
              />
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div
          className="md:hidden text-white text-2xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.ul
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          transition={{ duration: 0.4 }}
          className="md:hidden flex flex-col bg-black/90 text-white mt-4 px-4 py-3 rounded-lg shadow-xl"
        >
          {navLinks.map((link, index) => (
            <motion.li
              key={index}
              whileTap={{ scale: 0.95 }}
              className="py-2 px-1 border-b border-gray-700 last:border-none"
              onClick={() => setIsOpen(false)}
            >
              {link}
            </motion.li>
          ))}
        </motion.ul>
      )}
    </motion.nav>
  );
}
