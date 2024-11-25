import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className="flex flex-col mt-4 ml-4 space-y-4">
            <div>
                <Link to="/dashboard" className="text-white text-lg md:text-xl hover:text-gray-400">Inicio</Link>
            </div>
            <div>
                <Link to="/proyectos" className="text-white text-lg md:text-xl hover:text-gray-400">Proyectos</Link>
            </div>
            <div>
                <Link to="/contacto" className="text-white text-lg md:text-xl hover:text-gray-400">Contacto</Link>
            </div>
            <div>
                <a href="/yovirtual" className="text-white text-lg md:text-xl hover:text-gray-400">Asistente virtual</a>
            </div>
            <div>
                <a href="/salir" className="text-white text-lg md:text-xl hover:text-gray-400">Salir</a>
            </div>
        </div>
    );
}

export default NavBar;
