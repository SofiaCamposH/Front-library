import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Reportes() {
  const [nombreAlumno, setNombreAlumno] = useState('');
  const [matricula, setMatricula] = useState('');
  const [carrera, setCarrera] = useState('');
  const [Reporte, setReporte] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Registrar préstamo en la base de datos (código no incluido)

    alert('Préstamo registrado exitosamente!');

    // Limpiar formulario
    setNombreAlumno('');
    setMatricula('');
    setCarrera('');
    setReporte('');
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

      <label>Reporte:</label>
      <input type="text" value={Reporte} onChange={(e) => setReporte(e.target.value)} />

      <button type="submit">Crear reporte</button>
    </form>
  );
}

export default Reportes;
