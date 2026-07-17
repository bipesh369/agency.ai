import React, { useState } from "react";
import assets from "../assets/assets";
import arrow_icon from "../assets/arrow_icon.svg";
import ThemeToggleBtn from "./ThemeToggleBtn";

const Navbar = ({ theme, setTheme }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Services", href: "#services" },
    { name: "Our Work", href: "#our-work" },
    { name: "Contact Us", href: "#contact-us" },
  ];

  return (
    <>
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 dark:bg-gray-900/70 border-b border-gray-200/20 dark:border-gray-700/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

          {/* Logo */}
          <img
            src={theme === "dark" ? assets.logo_dark : assets.logo}
            alt="Logo"
            className="w-32 sm:w-36 lg:w-40"
          />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-gray-700 dark:text-white">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-3">
            <ThemeToggleBtn theme={theme} setTheme={setTheme} />

            {/* Desktop Button */}
            <a
              href="#contact-us"
              className="hidden md:flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full hover:scale-105 transition"
            >
              Connect
              <img src={arrow_icon} alt="" className="w-3" />
            </a>

            {/* Mobile Menu */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="md:hidden"
            >
              <img
                src={
                  theme === "dark"
                    ? assets.menu_icon_dark
                    : assets.menu_icon
                }
                alt="menu"
                className="w-7"
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Backdrop */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-screen w-72 bg-white dark:bg-gray-900 z-50 shadow-xl transform transition-transform duration-300 md:hidden
        ${sidebarOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close Button */}
        <button
          onClick={() => setSidebarOpen(false)}
          className="absolute top-5 right-5"
        >
          <img
            src={assets.close_icon}
            alt="close"
            className="w-5"
          />
        </button>

        <div className="flex flex-col gap-8 mt-24 px-8 text-lg text-gray-700 dark:text-white">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setSidebarOpen(false)}
              className="hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact-us"
            onClick={() => setSidebarOpen(false)}
            className="flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-full mt-4"
          >
            Connect
            <img src={arrow_icon} alt="" className="w-3" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;