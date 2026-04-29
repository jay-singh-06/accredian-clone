export default function Stats(){
    return(
        <section id="stats" className="py-20 bg-white scroll-mt-20">
   
       {/*Heading*/}
       <div className="text-center mb-12">
       <h2 className="text-2xl md:text-4xl font-bold">
        Our 
        <span className="text-blue-600"> Track Record</span>
       </h2>
       <p className="text-gray-500 text-sm md:text-base mt-2">
        The Number Behind 
        <span className="text-blue-600 font-medium"> Our Sucess</span>
       </p>
       </div>

       {/*Stats*/}
     
     <div className="flex flex-col md:flex-row justify-center item-center gap-10">
        {/*card 1*/}
        <div className="text-center">
        <div className="bg-blue-100 text-blue-600 px-6 py-2 rounded-full font-bold text-lg inline-block">
            10K+
        </div>
        <p className="mt-3 text-sm text-gray-600">Professional Trained</p>
        </div>
        {/*Divider 1*/}
        <div className="flex flex-col md:flex-row w-px h-16 bg-gray-300"></div>

        {/*card 2*/}
        <div className="text-center">
        <div className="bg-blue-100 text-blue-600 px-6 py-2 rounded-full font-bold text-lg inline-block">
            200+
        </div>
        <p className="mt-3 text-sm text-gray-600">Sessions delivered with unmatched learning excellence</p>
        </div>
        {/*Divider 2*/}

        <div className="flex flex-col md:flex-row w-px h-16 bg-gray-300"></div>
     
        {/*card 3*/}
        <div className="text-center">
        <div className="bg-blue-100 text-blue-600 px-6 py-2 rounded-full font-bold text-lg inline-block">
            5K+
        </div>
        <p className="mt-3 text-sm text-gray-600">Active learners engaged in dynamic courses</p>
        </div>
     </div>

        </section>
    )
}