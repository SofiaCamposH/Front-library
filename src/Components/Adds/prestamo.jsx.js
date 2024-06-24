import React, { useState } from 'react';
import './prestamo.css'; 

function App() {
  const [students, setStudents] = useState([
    { name: 'Sofia', subject: 'Base de datos', grade: 100 },
    { name: 'Montserrat', subject: 'Ingles', grade: 90 },
    { name: 'Maricruz', subject: 'Integradora', grade: 90 },
    { name: 'Maria Fernanda', subject: 'Ciencia y Biologia', grade: 80 },
    { name: 'Maximo', subject: 'Pistologia', grade: 100 },
  ]);

  const [newStudent, setNewStudent] = useState({ name: '', subject: '', grade: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStudent({
      ...newStudent,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStudents([...students, newStudent]);
    setNewStudent({ name: '', subject: '', grade: '' });
  };

  return (
    <div className="App">
      <h1>Registro de Estudiantes</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={newStudent.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="subject"
          placeholder="Materia"
          value={newStudent.subject}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="grade"
          placeholder="Calificación"
          value={newStudent.grade}
          onChange={handleInputChange}
        />
        <button type="submit">Agregar Estudiante</button>
      </form>
      <ul>
        {students.map((student, index) => (
          <li key={index}>
            {student.name} - {student.subject} - {student.grade}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;


