import Sidebar from "../components/layout/SideBar";


const Proyectos = () => {
    return (
        <div className="bg-neutral-900 h-screen overflow-hidden p-4"> {/* Contenedor principal */}
            <div className="border-2 h-full"> {/* Contenedor de altura completa */}
                <div className="">
                    <Sidebar />
                </div>
            </div>
        </div>
    );
};

export default Proyectos;
