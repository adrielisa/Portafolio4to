const PresentationCard = () => {
    return (
        <div className="flex flex-col">
            <div className="border-2 border-white bg-neutral-900 
            h-48 w-56 w-auto
            sm:h-48 sm:w-64
            md:h-56 md:w-72
            lg:h-64 lg:w-80
            xl:h-72 xl:w-96">
                <h1 className="text-white 
            text-4xl 
            md:text-6xl
            ml-4 mt-4 mb-4 mr-32">Adrielisa</h1>
                <p className="text-white
            text-xs
            sm:text-sm md:text-base lg:text-lg xl:text-2xl
            ml-4 mb-40">Bienvenido a mi portafolio</p>
            </div>
        </div>

    )
}

export default PresentationCard