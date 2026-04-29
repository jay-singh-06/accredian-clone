import {
  MonitorCheck,
  MonitorX,
  GraduationCap,
  Briefcase,
} from "lucide-react";

export default function WhoShouldJoin() {
  const items = [
    {
      title: "Tech Professionals",
      desc: "Enhance expertise, embrace tech, drive innovation.",
      icon: <MonitorCheck className="w-8 h-8" />,
    },
    {
      title: "Non-Tech Professionals",
      desc: "Adapt digitally, collaborate in tech environments.",
      icon: <MonitorX className="w-8 h-8" />,
    },
    {
      title: "Emerging Professionals",
      desc: "Develop powerful skills for rapid career growth.",
      icon: <GraduationCap className="w-8 h-8" />,
    },
    {
      title: "Senior Professionals",
      desc: "Strengthen leadership, enhance strategic decisions.",
      icon: <Briefcase className="w-8 h-8" />,
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto bg-blue-600 rounded-2xl px-8 py-12 flex flex-col md:flex-row items-center gap-10">

        {/* LEFT SIDE */}
        <div className="flex-1 text-white">
          <p className="text-sm mb-2">Who Should Join?</p>

          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Strategic Skill <br /> Enhancement
          </h2>

          {/* Image */}
          <img
            src="/images/people.jpg"
            alt="people"
            className="mt-6 w-72"
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="flex-1 grid grid-cols-2 gap-10 text-white text-center">

          {items.map((item, index) => (
            <div key={index}>
              
              {/* Icon */}
              <div className="mx-auto w-14 h-14 flex items-center justify-center border border-white rounded-lg mb-3">
                {item.icon}
              </div>

              {/* Text */}
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-blue-100 mt-2">
                  {item.desc}
                </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}