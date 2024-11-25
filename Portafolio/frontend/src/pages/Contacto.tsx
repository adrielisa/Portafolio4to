import Sidebar from "../components/layout/SideBar";
import ContactoInfo from "../components/ui/ContactoInfo";

const Proyectos = () => {
    return (
        <div className="bg-neutral-900 h-screen overflow-hidden p-4"> {/* Contenedor principal */}
            <div className="border-2 h-full flex cols-2"> {/* Contenedor de altura completa */}
                <div className="">
                    <Sidebar />
                </div>
                <div className="">
                    <ContactoInfo />
                </div>
            </div>
        </div>
    );
};

export default Proyectos;
