export default function Clients() {
  return (
    <section id="clients" className="py-20 bg-white scroll-mt-20">
      {/*Headings*/}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-4xl font-bold">
          Our Proven <span className="text-blue-600">Partnerships</span>
        </h2>
        <p className="text-gray-800 text-sm md:text-base mt-2">
          Sucessful Collaboration With the
          <span className="text-blue-600 font-medium"> Industry's Best</span>
        </p>
      </div>

      {/*Logos*/}
      <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 px-4">
        <img src="/Reliance.png" className="h-10 md:h-14 object-contain" />
        <img src="/hcl.png" className="h-10 md:h-14 object-contain" />
        <img src="/ibm.png" className="h-10 md:h-14 object-contain" />
        <img src="/crif.png" className="h-10 md:h-14 object-contain" />
        <img src="/adp.svg" className="h-10 md:h-14 object-contain" />
        <img src="/bayer.svg" className="h-10 md:h-14 object-contain" />
      </div>
    </section>
  );
}
