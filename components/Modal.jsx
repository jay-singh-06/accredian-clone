"use client";
import { useState } from "react";

export default function EnquiryModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      
      {/* BACKDROP */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      ></div>

      {/* MODAL */}
      <div className="relative bg-white rounded-xl w-[90%] max-w-4xl flex overflow-hidden shadow-lg">
        
        {/* LEFT IMAGE */}
        <div className="hidden md:block w-1/2">
          <img
            src="/images/enquiry.jpg" 
            alt="form"
            className="h-full w-full object-cover"
          />
        </div>

        {/* RIGHT FORM */}
        <div className="w-full md:w-1/2 p-6 overflow-y-auto max-h-[90vh]">
          
          <h2 className="text-xl font-semibold mb-8 mt-4">
            Enquire Now
          </h2>

          <form className="space-y-4">
            
            <input
              type="text"
              placeholder="Enter Name"
              className="w-full border-b p-2 outline-none"
            />

            <input
              type="email"
              placeholder="Enter Email"
              className="w-full border-b p-2 outline-none"
            />

            <input
              type="text"
              placeholder="+91 Phone Number"
              className="w-full border-b p-2 outline-none"
            />

            <input
              type="text"
              placeholder="Enter company name"
              className="w-full border-b p-2 outline-none"
            />

            <select className="w-full border-b p-2 outline-none">
              <option>Select Domain</option>
              <option>Data Science</option>
              <option>Product</option>
            </select>

            <input
              type="number"
              placeholder="Enter No. of candidates"
              className="w-full border-b p-2 outline-none"
            />

            <select className="w-full border-b p-2 outline-none">
              <option>Select Mode of Delivery</option>
              <option>Online</option>
              <option>Offline</option>
            </select>

            <input
              type="text"
              placeholder="Eg: Gurgaon, Delhi, India"
              className="w-full border-b p-2 outline-none"
            />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg mt-4 hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>
        </div>

        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 text-xl"
        >
          ✕
        </button>
      </div>
    </div>
  );
}