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
    { name: "FAQs", id: "faqs" },
    { name: "Testimonials", id: "testimonials" },
  ];

  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-md sticky top-0 bg-white z-50">

      {/* Logo */}
      <h1 className="text-xl font-bold text-blue-600">accredian</h1>

      {/* Desktop Menu */}
      <ul className="flex flex-wrap gap-3 gap-6">
        {menu.map((item) => (
          <li key={item.id}>{item.name}</li>
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
            <p key={item.id} className="py-2">
              {item.name}
            </p>
          ))}
        </div>
      )}
    </nav>
  );
}