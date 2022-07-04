import React from 'react';
import foto from '../assets/glaciar.jpg';
import './Banner.css';

function Banner(props) {
    return (
    <div id="banner">           
        <img src={foto} alt=""/>
        <img  className="dark align-items-center  mover" src="https://demo.themewinter.com/wp/qoxag/travel/wp-content/uploads/sites/12/2021/07/logo.png" alt="Blog de viajes Qoxag"/>
        <div className="contenido">            
                <h5>DESTINO</h5>
                <h1 className="titulo">El mejor secreto de comprar de antiguedades de Bangkok</h1>
                <p className="text">Grecia: donde las ruinas históricas, los acantilados volcánicos y los lugareños amigables se encuentran con el azul del mar Mediterráneo. Mi primer viaje a Grecia fue una aventura de verano por Atenas y Mykonos.</p>
                <button type="button" className="btn btn-outline boton ">LEER EL ARTÍCULO<svg xmlns="http://www.w3.org/  2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                </svg>
                </button>
        </div>
    </div>
    );
}

export default Banner;