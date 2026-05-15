export default function Hero({ onEnquire }) {
  return (
    <section id="home" className="px-4 md:px-8 py-12 md:py-16 bg-gray-100 mt-9">

      <div className="flex flex-col md:flex-row items-center justify-between bg-blue-50 rounded-2xl p-6 md:p-10 gap-8">

        {/* LEFT */}
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Next-Gen <span className="text-blue-600">Expertise</span><br />
            For Your <span className="text-blue-600">Enterprise</span>
          </h1>

          <p className="mt-4 md:mt-6 text-gray-600 text-base md:text-lg">
            Cultivate high-performance teams through expert learning.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-4 text-sm">
            <span>✅ Tailored Solutions</span>
            <span>✅ Industry Insights</span>
            <span>✅ Expert Guidance</span>
          </div>

          <button
            onClick={onEnquire}
            className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Enquire Now
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <img
          src="/banner.png"
          className="w-full max-w-[300px] md:max-w-[420px]"
        />
      </div>
    </section>
  );
}