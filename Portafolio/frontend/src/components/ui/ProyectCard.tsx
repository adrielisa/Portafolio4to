interface ProjectCardProps {
    img: string;
    tittle: string;
    description: string;
    buttonText: string;
    onButtonClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ img, tittle, description, buttonText, onButtonClick }) => {
    return (
        <div className="max-w-sm rounded-md overflow-hidden shadow-xl bg-neutral-800 text-white mx-10">
            <img className="w-full h-18 lg:h-48 lg:w- object-cover" src={img} alt="" />
            <div className="px-2 text-center">
                <h2 className="font-bold text-xs lg:text-lg mt-1 mb-4">{tittle}</h2>
            </div>

            <div className="text-center">
                <button onClick={onButtonClick}
                    className="bg-transparent text-xs mb-1"
                >
                    {buttonText}
                </button>
            </div>
        </div>



    );
};




export default ProjectCard;