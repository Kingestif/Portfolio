import ReactIcon from '../assets/react1.svg'
import HtmlIcon from '../assets/html.svg'
import CssIcon from '../assets/css.svg'
import NodeIcon from '../assets/Node.js.svg'
import TypeIcon from '../assets/typescript.svg'
import PythonIcon from '../assets/python.svg'
import GraphIcon from '../assets/GraphQL.svg'
import FlutterIcon from '../assets/Flutter.svg'
import FastIcon from '../assets/fastapi.svg'
import DockerIcon from '../assets/docker.svg'
import TailIcon from '../assets/tailwind.svg'
import JavascriptIcon from '../assets/javascript.svg'
import MongoIcon from '../assets/MongoDB.svg'
import GitIcon from '../assets/git.svg'


export function Skills() {
  const skills = [
    { icon: HtmlIcon, name: "HTML" },
    { icon: CssIcon, name: "CSS" },
    { icon: ReactIcon, name: "React.js" },
    { icon: NodeIcon, name: "Node.js" },
    { icon: TypeIcon, name: "TypeScript" },
    { icon: PythonIcon, name: "Python" },
    { icon: GraphIcon, name: "GraphQL" },
    { icon: FlutterIcon, name: "Flutter" },
    { icon: FastIcon, name: "FastAPI" },
    { icon: DockerIcon, name: "Docker" },
    { icon: TailIcon, name: "Tailwind" },
    { icon: JavascriptIcon, name: "JavaScript" },
    { icon: MongoIcon, name: "MongoDB" },
    { icon: GitIcon, name: "Git" },
  ];

  const repeatedSkills = [...skills, ...skills];

  return (
    <div className="overflow-hidden py-6 flex flex-col gap-15">
        <div className="relative w-full flex items-center">
          <div className="flex-grow h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
        </div>
        <div className='text-white text-xl font-bold text-center'>SKILLS</div>
        <div className="flex w-max animate-scroll hover:pause gap-20">
            {repeatedSkills.map((skill, idx) => (
            <div
                key={idx}
                className="flex flex-col items-center gap-2 min-w-[90px] backdrop-blur-md rounded-xl px-4 py-3 border-t-2 border-purple-500
                        shadow-lg hover:scale-110 hover:shadow-2xl transition-transform duration-500 cursor-pointer" 
            >
                <img className="w-16 h-16" src={skill.icon} alt={skill.name} />
                <div className="text-white text-sm font-semibold">{skill.name}</div>
            </div>
            ))}
        </div>
    </div>
  );
}
