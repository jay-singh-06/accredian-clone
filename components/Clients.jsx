export default function Clients(){
    return(
        <section id="clients" className="py-20 bg-white scroll-mt-20">

            {/*Headings*/}
             <div className="text-center mb-12">
                <h2 className="text-2xl md:text-4xl font-bold">Our Proven <span className="text-blue-600">Partnerships</span></h2>
                <p className="text-gray-500 text-sm md:text-base mt-2">
                    Sucessful Collaboration With the  
                     <span className="text-blue-600 font-medium"> Industry's Best</span></p>
             </div>

            {/*Logos*/}
            <div className="flex flex-wrap justify-center item-center gap-10">
                <img src="/Reliance.png" className="h-17  transition"></img>
                <img src="/hcl.png" className="h-17  transition"></img>
                <img src="/ibm.png" className="h-17  transition"></img>
                <img src="/crif.png" className="h-17  transition"></img>
                <img src="/adp.svg" className="h-17  transition"></img>
                <img src="/bayer.svg" className="h-17  transition"></img>

            </div>
        </section>
    )
}