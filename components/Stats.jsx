export default function Stats() {
  return (
    <section id="stats" className="py-16 md:py-20 bg-white scroll-mt-20">

      {/* Heading */}
      <div className="text-center mb-10 md:mb-12 px-4">
        <h2 className="text-2xl md:text-4xl font-bold">
          Our <span className="text-blue-600">Track Record</span>
        </h2>
        <p className="text-gray-800 text-sm md:text-base mt-2">
          The Number Behind <span className="text-blue-600 font-medium">Our Success</span>
        </p>
      </div>

      {/* Stats */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">

        {/* Card */}
        {[
          { num: "10K+", text: "Professionals Trained" },
          { num: "200+", text: "Sessions delivered with unmatched learning excellence" },
          { num: "5K+", text: "Active learners engaged in dynamic courses" },
        ].map((item, i) => (
          <div key={i} className="text-center max-w-[250px]">
            <div className="bg-blue-100 text-blue-600 px-6 py-2 rounded-full font-bold text-lg inline-block">
              {item.num}
            </div>
            <p className="mt-3 text-sm text-gray-800">{item.text}</p>
          </div>
        ))}

      </div>
    </section>
  );
}