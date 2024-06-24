import React from 'react';
import './Libros.css';
import Background from './Assets/lib-bg.png'
import { Link } from 'react-router-dom';

const Libros = () => {
  return (

    <div className='LibrosContainer'>
      <div className="Libros">
        <div className="botones-lib">
          
          <div>
            <Link to = "./Prestamo">
               <button>Registro</button>
            </Link>
          </div>
          <div>
            <Link to = "./prestar">
                <button>Prestados</button>
            </Link>
          </div>
          <div>
            <Link to = "./disponibles">
              <button>Disponibles</button>
            </Link>
          </div>
          <div>
               <Link to = "./reportes">
            <button>Reportes</button>
               </Link>
          </div>
        </div>
      </div>
      <img src={Background} alt='' className='backgroundLibros' />
    </div>
  );
};

export default Libros;