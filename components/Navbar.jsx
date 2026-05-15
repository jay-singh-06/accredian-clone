"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  const menu = [
    { name: "Home", id: "home" },
    { name: "Stats", id: "stats" },
    { name: "Clients", id: "clients" },
    { name: "Accredian Edge", id: "edge" },
    { name: "CAT", id: "cat" },
    { name: "How It Works", id: "how" },
    { name: "Testimonials", id: "testimonials" },
    { name: "FAQs", id: "faqs" },
  ];

  // 🔥 Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      let current = "home";

      menu.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) {
          const rect = section.getBoundingClientRect();

          if (rect.top <= 150 && rect.bottom >= 150) {
            current = item.id;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔥 Scroll to section
  const handleClick = (id) => {
    setOpen(false); // close mobile menu
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-md sticky top-0 bg-white z-50">

      {/* Logo */}
      <h1 className="text-xl font-bold text-blue-600">accredian</h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 text-sm font-medium">
        {menu.map((item) => (
          <li
            key={item.id}
            onClick={() => handleClick(item.id)}
            className={`cursor-pointer transition ${
              active === item.id
                ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                : "text-gray-900"
            }`}
          >
            {item.name}
          </li>
        ))}
      </ul>

      {/* Mobile Icon */}
      <div className="md:hidden">
        {open ? (
          <X onClick={() => setOpen(false)} className="cursor-pointer" />
        ) : (
          <Menu onClick={() => setOpen(true)} className="cursor-pointer" />
        )}
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center py-4 md:hidden">
          {menu.map((item) => (
            <p
              key={item.id}
              onClick={() => handleClick(item.id)}
              className={`py-2 cursor-pointer ${
                active === item.id ? "text-blue-600 font-semibold" : "text-gray-900"
              }`}
            >
              {item.name}
            </p>
          ))}
        </div>
      )}
    </nav>
  );
}