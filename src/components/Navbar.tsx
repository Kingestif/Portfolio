export function Navbar(){
    return (
        <div className="navbar flex justify-between py-3 px-5 text-xl font-bold text-yellow-500 bg-black">
            <div>Estif</div>
            <div className="flex gap-5">
                <div>Home</div>
                <div>Services</div>
                <div>Projects</div>
                <div>Contact</div>
            </div>
        </div>
    )
}