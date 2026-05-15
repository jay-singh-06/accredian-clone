import { BarChart3, Monitor, PlaySquare } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      title: "Skill Gap Analysis",
      desc: "Assess team skill gaps and developmental needs.",
      icon: <BarChart3 className="w-6 h-6" />,
    },
    {
      title: "Customized Training Plan",
      desc: "Create a tailored roadmap addressing organizational goals.",
      icon: <Monitor className="w-6 h-6" />,
    },
    {
      title: "Flexible Program Delivery",
      desc: "Deliver adaptable programs aligned with industry needs.",
      icon: <PlaySquare className="w-6 h-6" />,
    },
  ];

  return (
    <section id="how" className="py-20 bg-gray-50 text-center">
      
      {/* Heading */}
      <h2 className="text-2xl md:text-4xl font-bold">
        How We <span className="text-blue-600">Deliver Results</span> That Matter?
      </h2>

      <p className="text-gray-600 mt-3 mb-16">
        A Structured Three-Step Approach to{" "}
        <span className="text-blue-600 text-sm md:text-base">Skill Development</span>
      </p>

      {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto px-4">
        {steps.map((step, index) => (
          <div
            key={index}
            className="relative bg-white rounded-xl shadow-md p-6 pt-12"
          >

            {/* Number Circle */}
            <div className="absolute -top-4 left-4 w-8 h-8 rounded-full border-2 border-blue-500 text-blue-600 flex items-center justify-center text-sm font-bold bg-white">
              {index + 1}
            </div>

            {/* Left Blue Line */}
            <div className="absolute left-0 top-0 h-full w-1 bg-blue-500 rounded-l-xl"></div>

            {/* Icon Circle */}
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-md">
              {step.icon}
            </div>

            {/* Title */}
            <h3 className="font-semibold text-lg mb-2">
              {step.title}
            </h3>

            {/* Desc */}
            <p className="text-sm text-gray-700">
              {step.desc}
            </p>

          </div>
        ))}

      </div>
    </section>
  );
}