import React, { useEffect } from 'react';
import { useState } from 'react';
import './Categorias.css';

function Categorias(props) {
    const [categorias, setCategorias] = useState([]);
    const [idcategoria, setIdcategoria] = useState('');
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [marcas, setMarcas]= useState('');

    useEffect(() => {
        leerCategorias();
    }, []);
    const leerCategorias = (e) => {
        const rutaServicio ="https://api-react-production.up.railway.app/categoria-dos.php";
        fetch(rutaServicio)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                //console.log(data);
                setCategorias(data);
            })
    }

    const mostrarTabla = () => {
        return (
            <table className='table'>
                <thead className='table-white'>
                    <tr>
                        <th>Codigo</th>
                        <th>Categoria</th>
                        <th>Descripcion</th>
                        <th>Marcas</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {categorias.map(item =>
                        <tr key={item.idcategoria}>
                            <td>{item.idcategoria}</td>
                            <td>{item.nombre}</td>
                            <td>{item.descripcion}</td>
                            <td>{item.marcas}</td>
                            {/* boton editar */}
                            <td><i className="bi bi-pencil-fill opaci" onClick={() => llenarDatos(item)}
                                data-bs-toggle="modal" data-bs-target="#updateModal"></i></td>
                            {/* boton eliminar */}
                            <td><i className="bi bi-x-lg opaci" onClick={() => llenarDatos(item)}
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
        setMarcas(item.marcas);
    }
    const borrarDatos = (item) => {
        setIdcategoria('');
        setNombre('');
        setDescripcion('');
        setMarcas('');
    }

    const contenidoFormulario = () => {
        return (
            <div className="modal-body">
                <div className="mb-3">
                    <input type="text" className='form-control' placeholder='idcategoria' value={idcategoria}
                        readOnly />
                </div>
                <div className="mb-3">
                    <input type="text" className='form-control' placeholder='Nombre' value={nombre}
                        required
                        onChange={(event) => setNombre(event.target.value)} />
                </div>
                <div className="mb-3">
                    <input type="text" className='form-control' placeholder='Descripción' value={descripcion}
                        required
                        onChange={(event) => setDescripcion(event.target.value)} />
                </div>
                <div className="mb-3">
                    <input type="text" className='form-control' placeholder='Marcas' value={marcas}
                        required
                        onChange={(event) => setMarcas(event.target.value)} />
                </div>
            </div>
        )
    }

    const mostrarInsertModal = () => {
        return (
            <div className="modal fade" id="insertModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form onSubmit={(event) => insertarFila(event)}>
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Registrar categoría</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            {contenidoFormulario()}
                            <div className="modal-footer">
                                <button type="button" className="btn butoncolor2" data-bs-dismiss="modal">Cerrar</button>
                                <button type="submit" className="btn butoncolor">Guardar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

    const mostrarUpdateModal = () => {
        return (
            <div className="modal fade" id="updateModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form onSubmit={(event) => actualizarFila(event)}>
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Actualizar categoría</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            {contenidoFormulario()}
                            <div className="modal-footer">
                                <button type="button" className="btn butoncolor2" data-bs-dismiss="modal">Cerrar</button>
                                <button type="submit" className="btn butoncolor">Guardar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

    const mostrarDeleteModal = () => {
        return (
            <div className="modal fade" id="deleteModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form onSubmit={(event) => eliminarFila(event)}>
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Eliminar categoría</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                ¿Está seguro que desea eliminar {nombre}?
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn butoncolor2" data-bs-dismiss="modal">Cerrar</button>
                                <button type="submit" className="btn butoncolor">Eliminar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

    const insertarFila = (event) => {
        event.preventDefault();
        document.querySelector("#insertModal .btn-close").click();
        //console.log(nombre + "----" + descripcion );
        const rutaServicio = "https://mariafsphp.herokuapp.com/categoriatresinsert.php";
        var formData = new FormData();
        formData.append("nombre", nombre);
        formData.append("descripcion", descripcion);
        formData.append("marcas",marcas);

        fetch(rutaServicio, {
            method: 'POST',
            body: formData
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                //console.log(data);
                alert("Se ha registrado la categoría " + nombre + " con el código " + data);
                leerCategorias();
            })
    }

    const actualizarFila = (event) => {
        event.preventDefault();
        document.querySelector("#updateModal .btn-close").click();

        const rutaServicio = "https://mariafsphp.herokuapp.com/categoriatresupdate.php";
        var formData = new FormData();
        formData.append("idcategoria", idcategoria);
        formData.append("nombre", nombre);
        formData.append("descripcion", descripcion);
        formData.append("marcas",marcas);

        fetch(rutaServicio, {
            method: 'POST',
            body: formData
        })
            .then(() => {
                alert("Se ha actualizado la categoría " + nombre + " con el código " + idcategoria);
                leerCategorias();
            })
    }

    const eliminarFila = (event) => {
        event.preventDefault();
        document.querySelector("#deleteModal .btn-close").click();

        const rutaServicio = "https://mariafsphp.herokuapp.com/categoriatresdelete.php";
        var formData = new FormData();
        formData.append("idcategoria", idcategoria);

        fetch(rutaServicio, {
            method: 'POST',
            body: formData
        })
            .then(() => {
                alert("Se ha eliminado la categoría " + nombre + " con el código " + idcategoria);
                leerCategorias();
            })
    }


    return (
        <>
            <section id="categorias" className='padded'>
                <div className="container">
                    <h2 className='titulog '>Categorías :</h2>
                    <div className="mb-3">
                        <button className='btn butoncolor' type='button'
                            onClick={() => borrarDatos()}
                            data-bs-toggle="modal" data-bs-target="#insertModal">
                            Añadir categoría
                        </button>
                    </div>

                    {mostrarTabla()}


                </div>
            </section>
            {mostrarInsertModal()}
            {mostrarUpdateModal()}
            {mostrarDeleteModal()}
        </>
    );
}

export default Categorias;