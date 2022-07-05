import React, { useEffect } from 'react';
import { useState } from 'react';

function Categorias(props) {
    const [categorias,setCategorias] =useState([]);
    const [idcategorias,setIdcategoria] =useState("");
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');

    useEffect(()=>{
        leerCategorias();
    },[]);

    const leerCategorias =(e) =>{
        const rutaServicio ="https://mariafsphp.herokuapp.com/categorias.php";
        fetch(rutaServicio)
        .then((response) =>{
            return response.json();
        })
        .then((data) =>{
            setCategorias(data);
        })
    }
    const mostrarTabla = () => {
        return (
            <table className='table'>
                <thead className='table-white'>
                    <tr>
                        <th>Codigo</th>
                        <th>Nombre</th>
                        <th>Descripcion</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {categorias.map(item =>
                        <tr key={item.idcategoria}>
                            <td>{item.idcategoria}</td>
                            <td>{item.nombre}</td>
                            <td>{item.descripcion}</td>
                            <td><i className="bi bi-pencil-fill" onClick={() => llenarDatos(item)}
                                data-bs-toggle="modal" data-bs-target="#updateModal"></i></td>
                            <td><i className="bi bi-x-lg" onClick={() => llenarDatos(item)}
                                data-bs-toggle="modal" data-bs-target="#deleteModal"></i></td>
                        </tr>
                    )}
                </tbody>
            </table>
        )
    }
    const llenarDatos = (item) => {
        setIdcategoria(item.idcategoria);
        setNombre(item.nombre);
        setDescripcion(item.descripcion);
    }


    return (
        <>
            <section id="categorias" className='padded'>
                <div className="container">
                    <h2>Categorías</h2>
                    <div className="mb-3">
                        <button className='btn btn-primary' type='button'                             
                            data-bs-toggle="modal" data-bs-target="#insertModal">
                            Añadir categoría
                        </button>
                    </div>

                    {mostrarTabla()}


                </div>
            </section>
            
        </>
    );
}

export default Categorias;