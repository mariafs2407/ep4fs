import React from 'react';
import './Informacion.css';
import footer1 from '../assets/face.png';
import footer2 from '../assets/tw.png';
import footer3 from '../assets/instg.png';
import footer4 from '../assets/yout.png';

function Informacion(props) {
    return (
    <div id="inf">
       <div className="container py-4">
        <div className="row">
          <div className="col-lg-3 mb-3">
            <a className="d-inline-flex align-items-center mb-2 link-dark text-decoration-none" >
                <img width="286" height="115" className="dark" src="https://demo.themewinter.com/wp/qoxag/travel/wp-content/uploads/sites/12/2021/07/logo-dark.png" alt="Blog de viajes Qoxag"/>          
            </a>
            <ul className="list-unstyled small text-muted">
              <li className="mb-2">qoxag es una pagina web para viajar,que ofrece consejos atraves de su blog y descuentos exclusivos a sus mienbros.</li>
              <li className="mb-2">Promueve
                viajes sostenibles y responsables para los curiosos</li>
                <ul className="nav mb-2 justify-content-center borde">
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-muted icono"><img src={footer1} /></a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-muted icono"><img src={footer2} /></a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-muted icono"><img src={footer3} /></a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-muted icono"><img src={footer4} /></a></li>                
                </ul>
            </ul>
          </div>
          <div className="col-6 col-lg-2 offset-lg-2 mb-3">
            <h5 className="tit">Destinos</h5>
            <ul className="list-unstyled let">
              <li className="mb-2"><a href="/">Tailandia</a></li>
              <li className="mb-2"><a href="#">Nueva Zelanda</a></li>
              <li className="mb-2"><a href="#">Pakistán</a></li>
              <li className="mb-2"><a href="#">Indonesia</a></li>
              <li className="mb-2"><a href="#">Albania</a></li>
            </ul>
          </div>
          <div className="col-6 col-lg-2 mb-3">
            <h5 className="tit">Explorar</h5>
            <ul className="list-unstyled let">
              <li className="mb-2"><a href="#">Blogs mas populares</a></li>
              <li className="mb-2"><a href="#">Aventuras en la lista de deseos</a></li>
              <li className="mb-2"><a href="#">Consejos y trucos</a></li>
              <li className="mb-2"><a href="#">Destino recomendados</a></li>
            </ul>
          </div>      
          <div className="col-6 col-lg-2 mb-3">
            <h5 className="tit">Comunidad</h5>
            <ul className="list-unstyled let">
              <li className="mb-2"><a href="#">Terminos</a></li>
              <li className="mb-2"><a href="#">Mejor equipo de viaje</a></li>
              <li className="mb-2"><a href="#">Ajustes Preestablecidos</a></li>
              <li className="mb-2"><a href="#">Descuentos</a></li>
              <li className="mb-2"><a href="#">Traking</a></li>
              <li className="mb-2"><a href="#">Galeria</a></li>
            </ul>
          </div>
          
        </div>
      </div>
   </div>

    );
}

export default Informacion;