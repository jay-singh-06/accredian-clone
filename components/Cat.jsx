import { Lightbulb, Settings, Wrench } from "lucide-react";

export default function Cat() {
  const steps = [
    {
      title: "Concept",
      desc: "Foundational knowledge for deep subject understanding.",
      icon: <Lightbulb className="w-8 h-8" />,
    },
    {
      title: "Application",
      desc: "Practical implementation through real-world scenarios.",
      icon: <Settings className="w-8 h-8" />,
    },
    {
      title: "Tools",
      desc: "Resources and techniques for effective skill mastery.",
      icon: <Wrench className="w-8 h-8" />,
    },
  ];

  return (
    <section id="cat" className="py-20 bg-gray text-center">
      {/*Heading */}
      <h2 className="text-2xl md:text-4xl font-bold">
        The
        <span className="text-blue-600"> CAT Framework</span>
      </h2>
      <p className="text-gray-600 mt-3 mb-16">
        Our Proven Approach to
        <span className="text-blue-600 text-sm md:text-base"> Learning Excellence</span>
      </p>

      {/*Steps */}
      <div  className="relative max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">

       {/*Line */}
       <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-blue-200 -translate-y-1/2"></div>

        {steps.map((step,index)=>(
            <div key={index} className="realtive z-10 text-centermax-w-xs">

        {/*Circle*/}
         <div className="w-32 h-32 mx-auto rounded-full border-4 border-blue-500 
         flex items-center justify-center bg-white shadow-md hover:scale-105 transition">
            <div className="text-blue-600 flex flex-col items-center">
                {step.icon}
            </div>
         </div>

         {/*Text */}
         <h3 className="mt-6 text-lg font-bold">{step.title}</h3>
         <p className="text-sm text-gray-500 mt-2">{step.desc}</p>
               </div>

        ))}

      </div>
    </section>
  );
}
