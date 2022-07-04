import React, { useEffect, useState } from 'react';
import './Destino.css';


function Destino(props) {
    const [destinos, setDestinos] = useState([]);
    const [datosFiltrados, setDatosFiltrados] =useState([]);
    const [nombreDestino,setNombreDestino] =useState("");
    
    useEffect(()=>{
        leerDestinos();
    },[]);

    const leerDestinos = (e)=>{
        const rutaServicio = "https://mariafsphp.herokuapp.com/destinos.php";

        fetch(rutaServicio)
        .then((response)=>{
            return response.json();
        })
        .then((data) =>{
            setDestinos(data);
            document.getElementById("btnBuscar").click();
        })
    }

    const buscar = () =>{
        let destinosFiltrados = destinos.filter((item) =>{
            return nombreDestino !=="" ? item["nombre"].indexOf(nombreDestino) > 0 : true
        }
        )
        setDatosFiltrados(destinosFiltrados)
    }
    return (
        <section id="Destino" className='padded'>
        <div className="container">
            <h2 className='titulo'>Destinos</h2>                
            <div className="mb-3 txtinput">
                    <input type="text" className='form-control' placeholder='Buscar por destino'
                        value={nombreDestino}
                        onChange={(event) => setNombreDestino(event.target.value)} />
            </div>
            <div className="mb-3 btncolor">
                    <button className=' butoncolor' id="btnBuscar" onClick={() => buscar()}>Consultar</button>
            </div>
            <table className='table cd'>
                <thead className='table-white'>
                    <tr >
                        <th>Nombre</th>
                        <th>Actividades</th>
                        <th>Ubicación</th>
                        <th>Restaurante</th>
                        <th>Hospedaje</th>                        
                    </tr>                     
                </thead>
                <tbody>
                    {/* entre llavesitas lo que repetire ,se repetira cuantas veces sea el arrglo*/}
                    {datosFiltrados.map( item=>
                    <tr key={item.nombre}>
                        <td>{item.nombre}</td>
                        <td>{item.actividades}</td>
                        <td>{item.ubicacion}</td>
                        <td>{item.restaurante}</td>
                        <td>{item.hospedaje}</td>
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
    </section>
    );
}

export default Destino;