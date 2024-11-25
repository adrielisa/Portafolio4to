import Sidebar from "../components/layout/SideBar";
import DataCard from "../components/ui/DataCard";

const Dashboard = () => {
  return (
    <div className="bg-neutral-900 h-screen overflow-hidden p-4 relative"> {/* Contenedor principal con posición relativa */}
      <div className="border-2 h-full flex"> {/* Contenedor de altura completa y layout de flexbox */}
        <Sidebar />
      </div>
      
      {/* RightInformation posicionado en la esquina inferior derecha */}
      <div className="absolute bottom-4 right-4"> {/* Posición absoluta en la esquina inferior derecha */}
        <DataCard />
      </div>
    </div>
  );
};

export default Dashboard;
