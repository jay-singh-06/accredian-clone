"use client";
import { useState } from "react";

export default function FAQs({onEnquire}) {
  const [activeTab, setActiveTab] = useState("course");
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = {
    course: [
      {
        q: "What types of corporate training programs does Accredian offer?",
        a: "Accredian provides industry-specific, customizable training programs tailored to meet your organization's needs across leadership, tech, data, and fintech.",
      },
      {
        q: "What domain specializations are available?",
        a: "We offer Data Science, Product Management, Digital Marketing, and more.",
      },
    ],
    delivery: [
      {
        q: "How are the courses delivered?",
        a: "Programs are delivered via live sessions, recorded modules, and hands-on projects.",
      },
      {
        q: "Are programs flexible?",
        a: "Yes, both online and offline delivery options are available.",
      },
    ],
    misc: [
      {
        q: "How can I enroll?",
        a: "Click on 'Enquire Now' and fill out the form to get started.",
      },
      {
        q: "Do you provide certifications?",
        a: "Yes, all programs come with industry-recognized certifications.",
      },
    ],
  };

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-20 bg-gray-50">
      
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-4xl font-bold">
          Frequently Asked{" "}
          <span className="text-blue-600">Questions</span>
        </h2>
      </div>

      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-10">

        {/* LEFT SIDE TABS */}
        <div className="flex md:flex-col gap-4 md:w-1/4">
          {[
            { key: "course", label: "About the Course" },
            { key: "delivery", label: "About the Delivery" },
            { key: "misc", label: "Miscellaneous" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => {
                setActiveTab(tab.key);
                setOpenIndex(null);
              }}
              className={`px-5 py-3 rounded-lg text-left border transition-all duration-200 ${
                activeTab === tab.key
                  ? "bg-white border-blue-600 text-blue-600 shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* RIGHT SIDE FAQ */}
        <div className="flex-1  p-6 rounded-xl shadow-md">

          {faqs[activeTab].map((item, index) => (
            <div key={index} className="py-4">

              {/* Question */}
              <div
                onClick={() => toggle(index)}
                className="flex justify-between items-center cursor-pointer"
              >
                <h3 className="font-semibold text-gray-800">
                  {item.q}
                </h3>

                <span className="text-blue-600 text-xl font-bold">
                  {openIndex === index ? "-" : "+"}
                </span>
              </div>

              {/* Answer */}
              {openIndex === index && (
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  {item.a}
                </p>
              )}
            </div>
          ))}

          {/*  Button */}
          <div className="mt-8 flex justify-center text-center md:text-left">
            <button onClick={onEnquire} className="bg-blue-600 text-white cursor-pointer px-6 py-3  rounded-lg shadow hover:bg-blue-700 transition">
              Enquire Now
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}