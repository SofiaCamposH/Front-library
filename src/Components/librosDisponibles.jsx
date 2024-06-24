import React, { useState, useEffect } from 'react';
import './Assets/prestamo-libro.css'
import Background from './Assets/blogo-.png'

function Disponibles() {
    const [libros, setLibros] = useState([]);
    const [error, setError] = useState(null);
    const [contador, setContador] = useState(1); // Inicializa el contador
    const [mostrarBotonesPrestar, setMostrarBotonesPrestar] = useState(false); // Estado para controlar la visibilidad de los botones de Prestar

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

    const handlePrestarLibro = async (id) => {
        try {
            const response = await fetch(`/api/books/delete/${id}`, {
                method: 'DELETE'
            });

            if (!response.ok) {
                throw new Error('Error al Prestar el libro');
            }

            setLibros(prevLibros => prevLibros.filter(libro => libro._id !== id));
        } catch (error) {
            setError(error.message);
        }
    };

    const handleEditar = () => {
        setMostrarBotonesPrestar(true);
    };

    const handleGuardar = () => {
        setMostrarBotonesPrestar(false);
    };

    return (

        
        <div className="inner-container">
            <div className="left-container">
                <h1>Lista de libros</h1>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {!mostrarBotonesPrestar && <button class="button" onClick={handleEditar}>Prestar</button>} {/* Mostrar el botón de "Editar" solo si los botones de eliminar no están visibles */}
                {mostrarBotonesPrestar && <button  class="button" onClick={handleGuardar}>Guardar</button>} {/* Mostrar el botón de "Guardar" solo si los botones de Prestar están visibles */}
                <table className="tabla-libros">
                    <thead>
                        <tr>
                            <th>Número</th>
                            <th>Título</th>
                            <th>Autor</th>
                            <th>Género</th>
                            {mostrarBotonesPrestar && <th>Acciones</th>} {/* Mostrar la columna de acciones solo cuando se active la edición */}
                        </tr>
                    </thead>
                    <tbody>
                        {libros.map((libro, index) => (
                            <tr key={index}>
                                <td>{libro.numero}</td>
                                <td>{libro.titulo}</td>
                                <td>{libro.autor}</td>
                                <td>{libro.genero}</td>
                                {mostrarBotonesPrestar && (
                                    <td>
                                        <button>Prestar</button>
                                    </td>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>

        </div>
    );
}






export default Disponibles;