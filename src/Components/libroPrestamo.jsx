import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function FormularioPrestamo() {
  const [nombreAlumno, setNombreAlumno] = useState('');
  const [matricula, setMatricula] = useState('');
  const [carrera, setCarrera] = useState('');
  const [isbnLibro, setIsbnLibro] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Registrar préstamo en la base de datos (código no incluido)

    alert('Préstamo registrado exitosamente!');

    // Limpiar formulario
    setNombreAlumno('');
    setMatricula('');
    setCarrera('');
    setIsbnLibro('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Préstamo de libro</h2>

      <label>Nombre del alumno:</label>
      <input type="text" value={nombreAlumno} onChange={(e) => setNombreAlumno(e.target.value)} />

      <label>Matrícula:</label>
      <input type="text" value={matricula} onChange={(e) => setMatricula(e.target.value)} />

      <label>Carrera:</label>
      <input type="text" value={carrera} onChange={(e) => setCarrera(e.target.value)} />

      <label>ISBN del libro:</label>
      <input type="text" value={isbnLibro} onChange={(e) => setIsbnLibro(e.target.value)} />

      <button type="submit">Solicitar préstamo</button>
    </form>
  );
}

export default FormularioPrestamo;
