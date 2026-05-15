export default function TailoredCourses(){
    const courses=[
         {
      title: "Program Specific",
      desc: "Certificate, Executive, Post Graduate Certificate",
      img: "/images/program.jpg",
    },
    {
      title: "Industry Specific",
      desc: "IT, Healthcare, Retail, Finance, Education, Manufacturing",
      img: "/images/industry.jpg",
    },
    {
      title: "Topic Specific",
      desc: "Machine Learning, Design, Analytics, Cybersecurity, Cloud",
      img: "/images/topic.jpg",
    },
    {
      title: "Level Specific",
      desc: "Senior Leadership, Mid-Career Professionals, Freshers",
      img: "/images/level.jpg",
    },
    ];

    return(
        <section  className="py-20 bg-gray-50 scroll-mt-20">

        {/*Heading */}
        <div className="text-center mb-14">
            <h2 className="text-2xl md:text-4xl font-bold">
                Tailored <span className="text-blue-600">Course Segmentation</span>
            </h2>

            <p className="text-gray-600 mt-3 text-sm md:text-base">Explore <span className="text-blue-600">Custom-fit Courses</span> Designed to Address Every Professional Focus</p>
        </div>

        {/*Cards*/}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">            {courses.map((item,index)=>(
                <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl
                transition duration-300 cursor-pointer"
                >

                {/*Image */}
                <img
                src={item.img}
                alt={item.title}
                className="w-full h-44 object-cover"
                />

                {/*content */}
                <div className="p-5 text-center">
                    <h3 className="text-blue-600 font-semibold text-lg">
                        {item.title}
                        </h3>

                        <p className="text-sm text-gray-600 mt-2">
                            {item.desc}
                        </p>
                </div>
                </div>
            ))}
        </div>
        </section>
    )
}