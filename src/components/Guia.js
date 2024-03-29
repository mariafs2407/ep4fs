import React, { useEffect, useState } from 'react';
import './Guia.css';


function Guia(props) {
    const [lugares, setLugares] = useState([]);
    useEffect(() => {
        leerLugares();
    }, []);

    const leerLugares = (e) => {
        const rutaServicio = "https://api-react-production.up.railway.app/lugares";
        fetch(rutaServicio)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setLugares(data.lugares);
            })
    }
    return (
        <section id="Guia" className='padded'>
            <div className="container">
                <h2>Lugares - Guias correspondientes:</h2>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {lugares.map(item =>
                        <div className="col" key={item.iddestino}>
                            <div className="card">
                                <div className='divimg'>
                                    <img src={"https://php-ep4-react.vercel.app/img2/" + item.imagen} className="card-img-top efecto" alt="..." />
                                </div>                                
                                <div className="card-body">
                                    <h5 className="card-title">{item.destino}</h5>
                                    <p className="card-text">{item.nombre} {item.apematerno} {item.apepaterno} </p>
                                    <p className="card-text">{item.destino}</p>
                                    <p className='tam'>Edad : {item.edad} </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Guia;