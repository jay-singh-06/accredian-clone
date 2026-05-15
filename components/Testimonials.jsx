"use client";
import { useState } from "react";

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const testimonials = [
    {
      logo: "/adp.svg",
      text: "We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication, service, and expertise throughout the entire process.",
    },
    {
      logo: "/bayer.svg",
      text: "Accredian's commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way.",
    },
    {
      logo: "/Reliance.png",
      text: "Choosing Accredian for learning and development of our employees was a beneficial decision. The value derived from the course is immense and their support team is always there to help our employees.",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-100 text-center">

      {/* Heading */}
      <h2 className="text-2xl md:text-4xl font-bold">
        Testimonials from Our <span className="text-blue-600">Partners</span>
      </h2>

      <p className="text-gray-700 mt-3 text-sm md:text-base mb-12">
        What Our Clients Are Saying
      </p>

      {/* Slider */}
      <div className="max-w-5xl mx-auto overflow-hidden px-4">
        <div
          className="flex gap-6 transition-transform duration-500"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="min-w-full md:min-w-[50%] bg-white p-6 md:p-8 rounded-xl shadow-md h-auto md:h-[300px] flex flex-col md:flex-row gap-4 md:gap-6 items-start hover:shadow-lg transition"
            >

              {/* Logo */}
              <img
                src={item.logo}
                alt="company"
                className="h-10 w-10 md:h-12 md:w-12 object-contain"
              />

              {/* Text */}
              <p className="text-gray-700 text-sm leading-relaxed text-left">
                {item.text}
              </p>

            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 gap-3">
        {[0, 1,2].map((dot) => (
          <button
            key={dot}
            onClick={() => setIndex(dot)}
            className={`w-3 h-3 rounded-full ${
              index === dot ? "bg-blue-600" : "bg-gray-400"
            }`}
          />
        ))}
      </div>

    </section>
  );
}