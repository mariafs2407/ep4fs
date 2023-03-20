import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import imagen from '../assets/tienda.jpg';
import Productos from './Productos';
import './Tienda.css';

function Tienda(props) {
    const [categorias,setCategorias] =useState([]);
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState([]);

    useEffect(()=>{
        leerCategorias();
    },[]);

    const leerCategorias =(e) =>{
        const rutaServicio="https://api-react-production.up.railway.app/categorias";
        fetch(rutaServicio)
        .then((response) => {
            //console.log(response)..
            return response.json();
        })
        .then((data)=>{
            setCategorias(data.categorias);
        })
    }
    const mostrarCategorias = () => {
        return (
            <ul className="list-group" id="lista-categorias">
                {categorias.map(item =>
                    <li className="list-group-item" key={item.idcategoria}
                        onClick={(event) => seleccionarCategoria(item, event)}>
                        <h5 className='titulodos'>{item.nombre}</h5>
                        <small className='titulotres'>{item.descripcion}</small>
                    </li>
                )}
            </ul>
        )
    }

    const seleccionarCategoria = (item, event) => {
        event.preventDefault();//Para evitar que propaguen mas eventos
        setCategoriaSeleccionada(item);
        
        var itemLista = document.querySelectorAll("#lista-categorias li");
        itemLista.forEach((item) => {
            item.classList.remove("active");
        })

        event.currentTarget.classList.add("active");
        //event.currentTarget hace referencia al objeto que recibió el evento
    }
    
    return (
        <section id='tienda' > 
            <div className='cimgtienda'>
                <img src={imagen} alt="" />
                <img  className="dark align-items-center  mover" src="https://demo.themewinter.com/wp/qoxag/travel/wp-content/uploads/sites/12/2021/07/logo.png" alt="Blog de viajes Qoxag"/>
            </div>
            <div className="container padded">
                <h2 className='titTienda'>Tienda</h2>
                <div className="row">
                    <div className="col-md-3">
                        {mostrarCategorias()}
                    </div>
                    <div className="col-md-9 cajacontenido">
                        <h3 className='titulouno'>{categoriaSeleccionada.nombre}</h3>
                        <p className='titulodos'> {categoriaSeleccionada.descripcion}</p>      
                        <Productos categoriaProducto ={categoriaSeleccionada.idcategoria
                            != null ? categoriaSeleccionada.idcategoria: 1} />          
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Tienda;