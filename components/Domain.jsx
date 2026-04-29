import {
  Lightbulb,
  Brain,
  Users,
  BarChart3,
  Settings,
  Globe,
  CreditCard,
} from "lucide-react";

export default function Domain() {
  const domains = [
    { title: "Product & Innovation Hub", icon: <Lightbulb className=" w-12 h-12"/> },
    { title: "Gen-AI Mastery", icon: <Brain className=" w-12 h-12" /> },
    { title: "Leadership Elevation", icon: <Users className=" w-12 h-12" /> },
    { title: "Tech & Data Insights", icon: <BarChart3 className=" w-12 h-12" /> },
    { title: "Operations Excellence", icon: <Settings className=" w-12 h-12" /> },
    { title: "Digital Enterprise", icon: <Globe className=" w-12 h-12" /> },
    { title: "Fintech Innovation Lab", icon: <CreditCard className=" w-12 h-12" /> },
  ];

  return (
    <section className="py-20 bg-gray-50">
      {/*Heading*/}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">
          Our <span className="text-blue-600">Domain Expertise</span>{" "}
        </h2>
        <p className="text-medium mt-3 text-gray-600">
          <span className="text-blue-600 font-medium">
            Specialized Programs
          </span>{" "}
          Designed to Fuel Innovation
        </p>{" "}
      </div>

      {/*Grid*/}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
       
       {domains.map((item,index)=>(
        <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 text-center
            hover:shadow-lg transition cursor-pointer"
            >

                {/*Icons*/}
                <div className="flex justify-center mb-4 text-blue-600">
                    <div className="w-15 h-10 flex items-center justify-center">
                    {item.icon}
                    </div>
                </div>

                {/*Title */}
                <h3 className="font-semibold text-sm">
                    {item.title}
                </h3>
                </div>
       ))}
      </div>
    </section>
  );
}
