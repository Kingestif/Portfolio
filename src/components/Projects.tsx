import { ArrowRight, ExternalLink, Github } from "lucide-react";
import {projects} from "../utils/projects";

export function Projects(){
    return(
        <div className="flex flex-col justify-center items-center gap-10 mt-30">
            <div className="flex flex-col gap-3 text-center">
                <div className="font-bold text-3xl text-white">Featured <span className="text-purple-500">Projects</span></div>
                <div className="font-bold text-sm text-gray-300  text-center">Here are some of my recent projects, showcasing my work with modern web technologies and creative problem-solving. </div>
            </div>
            <div className="flex gap-10 items-center | max-sm:flex-col">
                {projects.map(project=>(
                    <div key={project.id} className="flex flex-col w-110 h-110 max-sm:w-70 max-sm:h-70 items-center text-white gap-3 rounded-2xl bg-gray-700/30  hover:scale-105 transition-all duration-200 ease-out shadow-sm  hover:bg-gray-700/50">
                        <img src={project.imageUrl} alt={project.title} className="rounded-t-2xl overflow-hidden" />
                        <div className="flex justify-around w-full pt-2">
                            {project.tools.map((tool,idx)=>(
                                <div key={idx} className="bg-gray-500/40 rounded-2xl px-2">{tool}</div>
                            ))}
                        </div>
                        <div className="text-xl font-semibold pt-3">{project.title}</div>
                        <div className="w-full text-center text-gray-300 px-5">{project.description}</div>
                        <div className="flex-1"></div>
                        <div className="flex gap-5 self-start text-gray-400 px-5 py-3">
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white duration-500"><ExternalLink/></a>
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white"><Github/></a>
                        </div>
                    </div>
                ))}
            </div>
            <a href="https://github.com/Kingestif" target="_blank" rel="noopener noreferrer" className="group flex gap-2 bg-yellow-500/ rounded-full py-2 px-3 ">
                <div className="text-white font-bold">Check my <span className="text-purple-500">Github</span></div>
                <div className="text-purple-500 w-5 h-5 group-hover:translate-x-2 duration-300"><ArrowRight /></div>
            </a>
        </div>
    )
}