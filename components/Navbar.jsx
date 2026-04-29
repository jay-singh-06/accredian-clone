"use client";
import { useEffect, useState } from "react";

// Menu
const menu = [
  { name: "Home", id: "home" },
  { name: "Stats", id: "stats" },
  { name: "Clients", id: "clients" },
  { name: "Accredian Edge", id: "edge" },
  { name: "CAT", id: "cat" },
  { name: "How It Works", id: "how" },
  { name: "FAQs", id: "faqs" },
  { name: "Testimonials", id: "testimonials" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");

 useEffect(() => {
  const handleScroll = () => {
    let current = active;

    menu.forEach((item) => {
      const section = document.getElementById(item.id);

      if (section) {
        const rect = section.getBoundingClientRect();
        const middle = window.innerHeight / 2;

        if (rect.top <= middle && rect.bottom >= middle) {
          current = item.id;
        }
      }
    });

    setActive(current);
  };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);

  }, [active]);

  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow-md sticky top-0 bg-white z-50">

      {/* Logo */}
      <div className="flex flex-col">
        <span className="text-xl font-bold text-blue-600">
          accredian
        </span>
        <span className="text-xs text-gray-500">
          credentials that matter
        </span>
      </div>

      {/* Menu */}
      <ul className="hidden md:flex gap-6 text-sm font-medium">
        {menu.map((item) => (
          <li
            key={item.id}
            onClick={() =>
              document
                .getElementById(item.id)
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className={`cursor-pointer transition ${
              active === item.id
                ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                : "text-gray-700"
            }`}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </nav>
  );
}