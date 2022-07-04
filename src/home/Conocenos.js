import React from 'react';
import './Conocenos.css';

function Conocenos(props) {
    return (
    <div id="conocemos">
       <div className="contenidoo">        
            <img className="img1" src="https://demo.themewinter.com/wp/qoxag/travel/wp-content/uploads/sites/12/2021/07/travel_see-min.png" alt=""/>
            <div className="texto">
                <div className="bord">
                    <p className="letra">La manera facil de ganar su</p>  
                    <li className="nav-item nav">
                        <a className="nav-link" href="#">LEER MAS</a>
                    </li>
                </div>               
            </div>           
       </div>
       <div className="contenido2">
         <p className=" titulo">¡Hola!</p> 
         <p className="titulo">Encantado de Reunir Tú.</p>
         <p className="txt">Para nosotros, la fotografía de viajes es la forma de fotografía más inspiradora y emocionante
            . Cada captura es única, cada viaje una
            nueva experiencia y por eso amamos lo que hacemos. Mira mi</p>   
         <p className="txtcolor"><strong>Llegar a conocerme</strong> </p>  
         <img width="88" height="91" src="https://demo.themewinter.com/wp/qoxag/travel/wp-content/uploads/sites/12/2021/07/shine_about.png" className="attachment-large size-large" alt="" loading="lazy"/>
       </div>
  </div>

    );
}

export default Conocenos;