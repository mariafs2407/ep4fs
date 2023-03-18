import React from 'react';
import icono1 from '../assets/casa.png';
import icono2 from '../assets/equipaje.png';
import icono3 from '../assets/ubicacion.png';
import icono4 from '../assets/cohete.png';
import icono5 from '../assets/camara.png';
import icono6 from '../assets/carro.png';
import './Mainbar.css';
import { Link } from 'react-router-dom';

function Mainbar(props) {
    return (
        <div className="px-3 py-2 bg-white text-dark">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start cajamayor">
                    <a href="/" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-dark text-decoration-none">
                        <img className="dark img-fluid mover" src="https://demo.themewinter.com/wp/qoxag/travel/wp-content/uploads/sites/12/2021/07/logo.png" alt="Blog de viajes Qoxag" />
                    </a>

                    <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                        <div>
                            <div  className="nav-link text-dark ">
                                <img className="post" src={icono1} />
                                <Link className="letra" to="/">Hogar</Link>
                            </div>
                        </div>
                        <div>
                            <div className="nav-link text-dark">
                                <img className="post" src={icono2} />
                                <li className="letra">Empezar</li>
                            </div>
                        </div>
                        <div>
                            <div className="nav-link text-dark">
                                <img className="post" src={icono3} />
                                <Link className="letra" to="/destino">Destino</Link>
                            </div>
                        </div>
                        <div>
                            <div href="#" className="nav-link text-dark">
                                <img className="post" src={icono4} />
                                <Link className="letra" to="/categoria">Adm.</Link>
                            </div>
                        </div>
                        <div>
                            <div className="nav-link text-dark">
                                <img className="post" src={icono5} />
                                <Link className="letra" to='/guia'>Guía</Link>
                            </div>
                        </div>
                        <div>
                            <div  className="nav-link text-dark">
                                <img className="post" src={icono6} />
                                <Link className="letra" to='/tienda'>Tienda</Link>
                            </div>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Mainbar;