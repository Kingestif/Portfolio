function About() {
    return (
        <div className="flex text-white py-20 gap-30 | max-md:flex-col-reverse">
            <div className="Left flex flex-col gap-30 ">
                <div className="flex flex-col gap-10">
                    <div className="flex flex-col gap-2">
                        <div className="font-bold text-3xl underline underline-offset-4 decoration-purple-500">ABOUT</div>
                    </div>
                    
                    <div className="flex flex-col gap-5 text-gray-300">
                        <div className="font-medium text-xl text-white | w-fit max-sm:whitespace-nowrap">Estifanos Zinabu</div>
                        <div className="text-xl  w-fit max-sm:text-base"> Software Developer with over 3 years of experience specializing in Frontend, Backend, and Mobile App Development. I can design and build scalable, user-friendly applications from concept to deployment, leveraging modern technologies and clean architecture principles. My greatest strength is the ability to quickly adapt to new tools and frameworks, ensuring high-quality, maintainable solutions while collaborating effectively across multidisciplinary teams. </div>
                    </div>
                </div>
            </div>

            <img className=" MyImage bg-gradient-to-t from-violet-800 to-purple-500 rounded-full w-100 h-100 object-cover opacity-80 | max-sm:w-50 max-sm:h-50 max-md:w-70 max-md:h-70" src="/Me.webp" alt="" />
        </div>
    );
}

export default About;