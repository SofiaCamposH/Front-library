import React, { useState, useEffect } from 'react';
import './Assets/prestamo-libro.css'
import Background from './Assets/blogo-.png'

function Prestamo() {
    const [libros, setLibros] = useState([]);
    const [nuevoLibro, setNuevoLibro] = useState({
        titulo: '',
        autor: '',
        genero: ''
    });
    const [error, setError] = useState(null);
    const [contador, setContador] = useState(1); // Inicializa el contador
    const [mostrarBotonesEliminar, setMostrarBotonesEliminar] = useState(false); // Estado para controlar la visibilidad de los botones de eliminar

    useEffect(() => {
        fetch('/api/books/view')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al obtener los libros');
                }
                return response.json();
            })
            .then(data => {
                setLibros(data);
                if (data.length > 0) {
                    const maxNumero = Math.max(...data.map(libro => libro.numero));
                    setContador(maxNumero + 1);
                } else {
                    setContador(1); // Si no hay libros, establecer el contador en 1
                }
            })
            .catch(error => {
                setError(error.message);
            });
    }, []);

    const nuevoLibroChange = (e) => {
        const { name, value } = e.target;
        setNuevoLibro(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleAgregarLibro = async () => {
        if (nuevoLibro.titulo && nuevoLibro.autor && nuevoLibro.genero) {
            const libroConNumero = { ...nuevoLibro, numero: contador };

            try {
                const response = await fetch('/api/books', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(libroConNumero)
                });

                if (!response.ok) {
                    throw new Error('Error al guardar el libro');
                }

                const data = await response.json();
                setLibros(prevLibros => [...prevLibros, data]);
                setNuevoLibro({ titulo: '', autor: '', genero: '' });
                setContador(prevContador => prevContador + 1); // Incrementa el contador
            } catch (error) {
                setError(error.message);
            }
        }
    };

    const handleEliminarLibro = async (id) => {
        try {
            const response = await fetch(`/api/books/delete/${id}`, {
                method: 'DELETE'
            });

            if (!response.ok) {
                throw new Error('Error al eliminar el libro');
            }

            setLibros(prevLibros => prevLibros.filter(libro => libro._id !== id));
        } catch (error) {
            setError(error.message);
        }
    };

    const handleEditar = () => {
        setMostrarBotonesEliminar(true);
    };

    const handleGuardar = () => {
        setMostrarBotonesEliminar(false);
    };

    return (

        
        <div className="inner-container">
            <div className="left-container">
                <h1>Lista de libros</h1>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {!mostrarBotonesEliminar && <button class="button" onClick={handleEditar}>Editar</button>} {/* Mostrar el botón de "Editar" solo si los botones de eliminar no están visibles */}
                {mostrarBotonesEliminar && <button  class="button" onClick={handleGuardar}>Guardar</button>} {/* Mostrar el botón de "Guardar" solo si los botones de eliminar están visibles */}
                <table className="tabla-libros">
                    <thead>
                        <tr>
                            <th>Número</th>
                            <th>Título</th>
                            <th>Autor</th>
                            <th>Género</th>
                            {mostrarBotonesEliminar && <th>Acciones</th>} {/* Mostrar la columna de acciones solo cuando se active la edición */}
                        </tr>
                    </thead>
                    <tbody>
                        {libros.map((libro, index) => (
                            <tr key={index}>
                                <td>{libro.numero}</td>
                                <td>{libro.titulo}</td>
                                <td>{libro.autor}</td>
                                <td>{libro.genero}</td>
                                {mostrarBotonesEliminar && (
                                    <td>
                                        <button onClick={() => handleEliminarLibro(libro._id)}>Eliminar</button>
                                    </td>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
            <div className="right-container">
                <h2>Agregar nuevo libro</h2>
                <form>
                    <label>
                        Título:
                        <input type="text" name="titulo" value={nuevoLibro.titulo} onChange={nuevoLibroChange} />
                    </label>
                    <br />
                    <label>
                        Autor:
                        <input type="text" name="autor" value={nuevoLibro.autor} onChange={nuevoLibroChange} />
                    </label>
                    <br />
                    <label>
                        Género:
                        <input type="text" name="genero" value={nuevoLibro.genero} onChange={nuevoLibroChange} />
                    </label>
                    <br />
                    <button class="button" type="button" onClick={handleAgregarLibro}>Agregar Libro</button>
                    <img src={Background} alt='' className='backgroundPrestamo' />
                </form>
            </div>
        </div>
    );
}






export default Prestamo;