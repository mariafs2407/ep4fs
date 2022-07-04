import React from 'react';
import  './Footer.css';

function Footer(props) {
    return (
    <div className="footer">
        <div className="container">      
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <p className="col-md-4 mb-0  borde">© 2021 Peru, Todos los derechos Reservados.</p>     
                <ul className="nav col-md-4 justify-content-end borde">
                    <li className="nav-item caja">
                        <a className="nav-link colr" href="#">Politica </a>
                    </li>        
                    <li className="nav-item caja">
                        <a className="nav-link colr" href="#">Destinos</a>
                    </li>       
                    <li className="nav-item caja">
                        <a className="nav-link colr"  href="#">Contacto</a>
                    </li>   
                </ul>
            </footer>
       </div>
    </div>
  
    );
}

export default Footer;