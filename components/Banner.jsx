export default function Banner({onEnquire}) {
  return (
    <section className="max-w-6xl mx-auto px-4 mt-16">
      <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* LEFT */}
        <div className="flex items-center gap-5">
          <div className="bg-white/20 p-4 rounded-xl">
            <span className="text-3xl">🎧</span>
          </div>

          <div>
            <h2 className="text-white text-2xl md:text-3xl font-bold">
              Want to Learn More About Our Training Solutions?
            </h2>
            <p className="text-blue-100 mt-2">
              Get Expert Guidance for Your Team’s Success!
            </p>
          </div>
        </div>

        {/* BUTTON */}
        <button onClick={onEnquire} className="bg-white text-blue-600 cursor-pointer px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
          Contact Us →
        </button>
      </div>
    </section>
  );
}