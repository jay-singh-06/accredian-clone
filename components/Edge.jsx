import {
  Lightbulb,
  UserCheck,
  Settings,
  Cpu,
  ArrowUpRight,
  Target,
  Box,
} from "lucide-react";

export default function Edge() {
  const items = [
    {
      title: "Tailored Solutions",
      desc: "Programs customized to your organization's goals and challenges.",
      icon: <Lightbulb className="w-10 h-10" />,
    },
    {
      title: "Expert Guidance",
      desc: "Learn from industry leaders with real-world success.",
      icon: <UserCheck className="w-6 h-6" />,
    },
    {
      title: "Innovative Framework",
      desc: "Proprietary methods for impactful, application-driven results.",
      icon: <Settings className="w-6 h-6" />,
    },
    {
      title: "Advanced Technology",
      desc: "State-of-the-art LMS for seamless learning experiences.",
      icon: <Cpu className="w-6 h-6" />,
    },
    {
      title: "Diverse Offerings",
      desc: "Courses across industries, skill levels, and emerging fields.",
      icon: <ArrowUpRight className="w-6 h-6" />,
    },
    {
      title: "Proven Impact",
      desc: "Trusted by leading organizations for measurable ROI.",
      icon: <Target className="w-6 h-6" />,
    },
    {
      title: "Flexible Delivery",
      desc: "Online and offline options tailored to your needs.",
      icon: <Box className="w-6 h-6" />,
    },
  ];

  return (
    <section id="edge" className="py-20 bg-gray-100 scroll-mt-20">
      {/*Heading*/}
      <div className="text-center mb-16">
        <h2 className="text-2xl md:text-4xl font-bold">The <span className="text-blue-600">Accredian Edge</span></h2>
        <p className="text-gray-800 text-sm mt-2 max-w-xl mx-auto">
          Key Aspects 
          <span className="text-blue-600 text-sm md:text-base">of Our Strategic Training</span>
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto">

        {/*Items*/}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 px-4">          {items.map((item, index) => (
            <div key={index} className="text-center">
              {/*circle*/}
              <div
                className="w-20 h-20 mx-auto rounded-full bg-blue-100
                        flex items-center justify-center text-blue-600 border-4
                        border-white shadow-md group-hover:bg-blue-600 group-hover:text-white"
              >
                {item.icon}
              </div>

              {/*Text*/}
              <h3 className="mt-4 font-semibold text-sm">{item.title}</h3>
              <p className="text-xs text-gray-700 mt-2 max-w-[180px] mx-auto">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
