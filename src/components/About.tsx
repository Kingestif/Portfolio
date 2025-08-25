import { Download } from "lucide-react";

function About() {
    return (
        <div className="flex text-white py-20 gap-30">
            <div className="Left flex flex-col gap-30 ">
                <div className="flex flex-col gap-10">
                    <div className="flex flex-col gap-2">
                        <div className="font-bold text-3xl underline underline-offset-4 decoration-yellow-500">ABOUT</div>
                        <div className="font-medium">Estifanos Zinabu</div>
                    </div>
                    <div className="text-xl"> Software Developer with over 3 years of experience specializing in Frontend, Backend, and Mobile App Development. I can design and build scalable, user-friendly applications from concept to deployment, leveraging modern technologies and clean architecture principles. My greatest strength is the ability to quickly adapt to new tools and frameworks, ensuring high-quality, maintainable solutions while collaborating effectively across multidisciplinary teams. </div>
                </div>
            </div>

            <img className="bg-gradient-to-t from-violet-800 to-purple-500 rounded-full w-100 h-100 object-cover" src="/Me.webp" alt="" />
        </div>
    );
}

export default About;