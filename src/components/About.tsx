import { Download } from "lucide-react";

function About() {
    return (
        <div className="h-screen flex text-white items-center">
            <div className="Left flex flex-col justify-around h-screen ">
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-2">
                        <div className="font-bold text-3xl underline underline-offset-4 decoration-yellow-500">ABOUT</div>
                        <div className="font-medium">Estifanos Zinabu</div>
                    </div>
                    <div className="text-xl"> Software Developer with over 3 years of experience specializing in Frontend, Backend, and Mobile App Development. I can design and build scalable, user-friendly applications from concept to deployment, leveraging modern technologies and clean architecture principles. My greatest strength is the ability to quickly adapt to new tools and frameworks, ensuring high-quality, maintainable solutions while collaborating effectively across multidisciplinary teams. </div>
                </div>

                <div className="w-fit group flex gap-2 text-yellow-500 text-xl">
                    <div className="relative font-medium after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-yellow-500 after:transition-all after:duration-300 group-hover:after:w-full">
                        Download Resume
                    </div>
                    <Download />
                </div>

            </div>

            <img className="bg-gradient-to-t from-violet-800 to-purple-500 rounded-full w-100 h-100 object-cover" src="/Me.webp" alt="" />
        </div>
    );
}

export default About;