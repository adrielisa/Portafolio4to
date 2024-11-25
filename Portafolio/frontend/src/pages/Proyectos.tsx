import Sidebar from "../components/layout/SideBar";
import ProjectCard from "../components/ui/ProyectCard";
import Clima from "../assets/Clima.jpg"
import Mapa from "../assets/Mapa.jpg"
import Pokedex from "../assets/Pokedex.jpg"
import ThirdGirl from "../assets/ThirdGirl.jpg"
import Reloj from "../assets/watch.jpg"

import { useNavigate } from "react-router-dom";

const Proyectos = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-neutral-900 h-screen overflow-hidden p-4"> {/* Contenedor principal */}
      <div className="border-2 h-full flex cols-2"> {/* Contenedor de altura completa */}
        <div className="">
          <Sidebar />
        </div>

        <div className="grid grid-cols-4  mt-20">
          <div className="">
            <ProjectCard
              img={Clima}
              tittle="API Clima"
              description="Acercamiento a las APIs usando la API del clima"
              buttonText="Ver proyecto"
              onButtonClick={() => console.log("No disponible")}
            />
          </div>
          <div className="">
            <ProjectCard
              img={Mapa}
              tittle="Mapa"
              description="Probando una API sobre mapas"
              buttonText="Ver proyecto"
              onButtonClick={() => console.log("No disponible")}
            />
          </div>
          <div className="">
            <ProjectCard
              img={Pokedex}
              tittle="Pokedex"
              description="Probando la PokeAPI para mostrar pokemones"
              buttonText="Ver proyecto"
              onButtonClick={() => console.log("No disponible")}
            />
          </div>
          <div className="">
            <ProjectCard
              img={ThirdGirl}
              tittle="Portafolio"
              description="Conpendio de mis actividades realizadas"
              buttonText="Ver proyecto"
              onButtonClick={()=> navigate("/salir") }
            />
          </div>
          <div className="">
            <ProjectCard
              img={Reloj}
              tittle="TimeBoxing"
              description="Proyecto que permite organizar actividades"
              buttonText="Ver proyecto"
              onButtonClick={() => (window.location.href = "http://localhost:5173/")}
              />
          </div>

        </div>

      </div>
    </div>
  );
};

export default Proyectos;
