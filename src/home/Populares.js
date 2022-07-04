import React from 'react';
import './Populares.css';

function Populares(props) {
    return (
<div className="container padded">
    <div className='col-lg-8 mx-auto '>
        <h2 className='tituno '>CALIENTE EN CANGREJO ROJO</h2>
        <h1 className='titdos '>La mayoría<i>Popular</i> Correo</h1>
    </div>
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 galeria">       

        <div className="col">
            <div className="card shadow-sm">
                <div className='divimg'>
                    <img loading="lazy"  src="https://demo.themewinter.com/wp/qoxag/travel/wp-content/uploads/sites/12/2021/07/travel_8.jpg" className="attachment-large size-large wp-post-image" />
                </div>                
                <div className="card-body">
                    <h5 className='tittres'>RASGO</h5>
                    <p className="card-text">Encuentre un destino de ensueño donde pueda quedarse</p>
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="btn-group ">
                            <a href="" className='color'>LEER MAS <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                            </svg></a>
                        </div>                       
                    </div>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card shadow-sm">
                <div className='divimg'>
                    <img  src="https://demo.themewinter.com/wp/qoxag/travel/wp-content/uploads/sites/12/2021/07/travel_9.jpg" className="attachment-large size-large wp-post-image" loading="lazy" />
                </div>                
                <div className="card-body">
                    <h5 className='tittres'>RASGO</h5>
                    <p className="card-text">Las mejores rutas de senderismo en Taiwán que no debes perderte</p>
                    <div className="btn-group ">
                            <a href="" className='color'>LEER MAS <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                            </svg></a>
                        </div>      
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card shadow-sm">
                <div className='divimg'>
                    <img src="https://demo.themewinter.com/wp/qoxag/travel/wp-content/uploads/sites/12/2021/07/travel_4.jpg" className="attachment-large size-large wp-post-image" loading="lazy"  sizes="(max-width: 850px) 100vw, 850px"/>
                </div>                
                <div className="card-body">
                    <h5 className='tittres'>DESTINO</h5>
                    <p className="card-text">Cómo caminar por la pista copland de nueva zelanda hasta</p>
                    <div className="btn-group ">
                            <a href="" className='color'>LEER MAS <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                            </svg></a>
                        </div>      
                </div>
            </div>
        </div>

        <div className="col">
            <div className="card shadow-sm">
                <div className='divimg'>
                    <img  src="https://demo.themewinter.com/wp/qoxag/travel/wp-content/uploads/sites/12/2021/07/travel_10.jpg" className="attachment-large size-large wp-post-image" loading="lazy"  sizes="(max-width: 850px) 100vw, 850px"/>
                </div>                
                <div className="card-body">
                    <h5 className='tittres'>NUEVA ZELANDA</h5>
                    <p className="card-text">Cómo caminar por la pista copland de nueva zelanda hasta</p>
                    <div className="btn-group ">
                            <a href="" className='color'>LEER MAS <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                            </svg></a>
                        </div>      
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card shadow-sm">
                <div className='divimg'>
                    <img  src="https://demo.themewinter.com/wp/qoxag/travel/wp-content/uploads/sites/12/2021/07/travel_2.jpg" className="attachment-large size-large wp-post-image"  loading="lazy"  sizes="(max-width: 850px) 100vw, 850px"/>
                </div>                
                <div className="card-body">
                    <h5 className='tittres'>RASGO</h5>
                    <p className="card-text">Cómo tener un viaje increíble al visitar</p>
                    <div className="btn-group ">
                            <a href="" className='color'>LEER MAS <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                            </svg></a>
                        </div>      
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card shadow-sm">
                <div className='divimg'> 
                    <img  src="https://demo.themewinter.com/wp/qoxag/travel/wp-content/uploads/sites/12/2021/07/travel_5.jpg" className="attachment-large size-large wp-post-image"  loading="lazy"  sizes="(max-width: 850px) 100vw, 850px"/>
                </div>                
                <div className="card-body">
                    <h5 className='tittres'>DESTINO</h5>
                    <p className="card-text">Vea nuestra filosofía de viaje</p>
                    <div className="btn-group ">
                            <a href="" className='color'>LEER MAS <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                            </svg></a>
                        </div>      
                </div>
            </div>
        </div>
        
    
    </div>
</div>
    );
}

export default Populares;