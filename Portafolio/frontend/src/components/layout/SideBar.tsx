import PresentationCard from "../ui/PresentationCard";
import NavBar from "../ui/NavBar"

const Sidebar = () => {
    return (
        <div className="flex flex-col relative">
            <div className="flex flex-col">
                <PresentationCard />
            </div>
            <div>
                <NavBar />
            </div>
        </div>

    )
}

export default Sidebar; 