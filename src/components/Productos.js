import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import nofoto from '../assets/no-imagen.jpg';
import './Producto.css';

function Productos(props) {
    const [productos ,setProductos] = useState([]);    

    useEffect(() => {
        leerProductos(props.categoriaProducto);
    },[props.categoriaProducto]);

    const leerProductos =(idcategoria) =>{
        const rutaServicio ="https://mariafsphp.herokuapp.com/productos.php";

        var formData =new FormData();
        formData.append("idcategoria",idcategoria);
        fetch(rutaServicio,{
            method:'POST',
            body:formData
        })
        .then((response) =>{
            return response.json();
        })
        .then((data) =>{
            console.log(data);
            setProductos(data);
        })
    }

    const mostrarProductosTabla = () => {
        return (
            <table className='table'>
                <thead className='table-dark'>
                    <tr>
                        <th>Codigo</th>
                        <th>Nombre</th>
                        <th className="text-end">Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map(item =>
                        <tr key={item.idproducto}>
                            <td>{item.idproducto}</td>
                            <td>{item.marca}</td>
                            <td className="text-end">{parseFloat(item.precio).toFixed(2)}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        )
    }

    const mostrarCuadriculaTabla = () => {
        return (
            <div className="row row-cols-1 row-cols-xl-4 row-cols-lg-3  row-cols-2 g-4" id="cards-productos">
                {productos.map(item =>
                    <div className="col" key={item.idproducto}>
                        <div className="card">
                            <div className='imgproducto'>
                                <img className="card-img-top " src={item.imagen !== null? "https://mariafsphp.herokuapp.com/img/" + item.imagen: nofoto} alt="..." />                            
                            </div>
                            <div className={item.preciorebajado === "0.00" ? "sin-oferta" : "con-oferta"}>                                
                                {Math.round((1 - parseFloat(item.preciorebajado) / parseFloat(item.precio)) * 100)}%</div>
                            <div className="card-body">
                                <h6 className="card-title">{item.marca}</h6>                                    
                                <p className="card-text">S/
                                    {item.preciorebajado === "0.00" ? parseFloat(item.precio).toFixed(2) :
                                        parseFloat(item.preciorebajado).toFixed(2)}</p>
                                        {/* si precio rebajado es igual a cero me muestra el precio normla si no se muestra
                                    lo que sigue de los dos puntos el precio rebajado */}
                                <span className='precio-lista'>
                                    {item.preciorebajado !== "0.00" ? "(S/." + parseFloat(item.precio).toFixed(2) + ")"
                                    : ""}</span>                        
                            </div>
                        </div>
                    </div>
                )}
            </div>
        )
    }


    return (
        <div>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true"><i className="bi bi-table"></i></button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false"><i className="bi bi-grid-3x3-gap-fill"></i></button>
                </li>
            </ul>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    {mostrarProductosTabla()}
                </div>
                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    {mostrarCuadriculaTabla()}
                </div>
            </div>
            
        </div>
    );
}

export default Productos;