export function Navbar(){
    return (
        <div className="navbar flex justify-between text-xl | max-sm:flex-col max-sm:text-base">
            <div className="text-[color:#6C63FF] text-3xl font-medium | max-sm:hidden">Estifanos Zinabu</div>
            <div className="flex gap-5 text-white/80">
                <a href="#hero" className="hover:text-[color:#6C63FF] duration-300 max-sm:text-blue-400">Home</a>
                <a href="#about" className="hover:text-[color:#6C63FF] duration-300">About</a>
                <a href="#experience" className="hover:text-[color:#6C63FF] duration-300">Experience</a>
                <a href="#projects" className="hover:text-[color:#6C63FF] duration-300">Projects</a>
                <a href="#contact" className="hover:text-[color:#6C63FF] duration-300">Contacts</a>
            </div>
        </div>
    )
}