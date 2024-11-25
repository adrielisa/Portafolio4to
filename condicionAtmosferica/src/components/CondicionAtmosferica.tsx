import React, { useState, useEffect } from "react";

// Definimos el tipo para los datos de la ciudad
type CiudadCondicion = {
    name: string;
    skydescriptionlong: string;
    state: string;
};

function CondicionAtmosferica() {
    const url = "https://api.datos.gob.mx/v1/condiciones-atmosfericas";
    const estadosMx = [
        { id: 1, name: "Aguascalientes" },
        { id: 2, name: "Baja California" },
        { id: 3, name: "Baja California Sur" },
        { id: 4, name: "Campeche" },
        { id: 5, name: "Chiapas" },
        { id: 6, name: "Chihuahua" },
        { id: 7, name: "Ciudad de México" },
        { id: 8, name: "Coahuila" },
        { id: 9, name: "Colima" },
        { id: 10, name: "Durango" },
        { id: 11, name: "Guanajuato" },
        { id: 12, name: "Guerrero" },
        { id: 13, name: "Hidalgo" },
        { id: 14, name: "Jalisco" },
        { id: 15, name: "Estado de México" },
        { id: 16, name: "Michoacán" },
        { id: 17, name: "Morelos" },
        { id: 18, name: "Nayarit" },
        { id: 19, name: "Nuevo León" },
        { id: 20, name: "Oaxaca" },
        { id: 21, name: "Puebla" },
        { id: 22, name: "Querétaro" },
        { id: 23, name: "Quintana Roo" },
        { id: 24, name: "San Luis Potosí" },
        { id: 25, name: "Sinaloa" },
        { id: 26, name: "Sonora" },
        { id: 27, name: "Tabasco" },
        { id: 28, name: "Tamaulipas" },
        { id: 29, name: "Tlaxcala" },
        { id: 30, name: "Veracruz" },
        { id: 31, name: "Yucatán" },
        { id: 32, name: "Zacatecas" }
    ];

    const [datos, setDatos] = useState<CiudadCondicion[]>([]);
    const [estadoActual, setEstadoActual] = useState("");

    const consultarDatos = () => {
        return fetch(url)
            .then((res) => res.json())
            .then((condicionAtm) => setDatos(condicionAtm.results))
    };

    useEffect(() => {
        consultarDatos();
    }, []);

    return (
        <>
            <main className="mt-20 text-center">
            <select
                onChange={(e) => setEstadoActual(e.target.value)}
                value={estadoActual}
            >
                <option value="">Selecciona una opción</option>
                {estadosMx.map((opcion) => (
                    <option key={opcion.id} value={opcion.name}>
                        {opcion.name}
                    </option>
                ))}
            </select>


  
            {estadoActual && (
                <>
                    <h2 className="font-bold text-cyan-500 mt-10 text-center">Condiciones atmosféricas en {estadoActual}</h2>
                    <div className="flex flex-wrap justify-center mt-10">
                    {datos
                        .filter((ciudad) => ciudad.state === estadoActual)
                        .map((ciudad, index) => (
                            <div key={index} className="flex flex-col items-center justify-center bg-yellow-500 text-white rounded-lg p-4 m-2 w-48 h-48 shadow-md">
                                <p>{ciudad.name} - <i>{ciudad.skydescriptionlong}</i></p>
                            </div>
                        ))}
                    </div>
                
                </>
            )}
    </main>
        </>
    );
}

export default CondicionAtmosferica;
