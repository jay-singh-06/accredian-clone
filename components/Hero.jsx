export default function Hero({ onEnquire }) {
  return (
    <section id="home" className="px-8 py-16 bg-gray-100 mt-9">
      <div className="flex flex-col md:flex-row items-center justify-between bg-blue-50 rounded-2xl p-10">
        {/* LEFT SIDE */}
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Next-Gen <span className="text-blue-600">Expertise</span> <br />
            For Your <span className="text-blue-600">Enterprise</span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg">
            Cultivate high-performance teams through expert learning.
          </p>

          {/* FEATURES */}
          <div className="flex flex-wrap gap-4 mt-6 text-sm">
            <span className="flex items-center gap-2">
              ✅ Tailored Solutions
            </span>
            <span className="flex items-center gap-2">
              ✅ Industry Insights
            </span>
            <span className="flex items-center gap-2">✅ Expert Guidance</span>
          </div>

          {/* BUTTON */}
          <button onClick={onEnquire} className="mt-8 bg-blue-600 cursor-pointer text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Enquire Now
          </button>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div
          className="flex flex-col md:flex-row items-center justify-between 
bg-[#EAF2FF] rounded-2xl p-10 
border-4 border-gray-300 shadow-md"
        >
          <img
            src="/banner.png"
            className="w-[320px] md:w-[420px] rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}
