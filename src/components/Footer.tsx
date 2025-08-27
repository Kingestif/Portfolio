export function Footer(){
    return(
        <div className="flex  flex-col gap-10 my-5 text-center">
            <div className="relative w-full flex items-center">
                <div className="flex-grow h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
            </div>

            <div className="text-white text-lg max-sm:text-base">© Portfolio by <span className="text-purple-500">Estifanos Zinabu</span></div>
        </div>
    )
}