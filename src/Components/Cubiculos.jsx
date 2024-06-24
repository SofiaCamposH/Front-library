import React from 'react';
import './Cubiculos.css';
import Background from './Assets/cub-bg.png'
import { Link } from 'react-router-dom';

const Cubiculos = () => {
  return (

    <div className='CubiculosContainer'>
      <div className="Cubiculos">
        <div className="botones-cub">
          
          <div>
            <button>Préstamo</button>
          </div>
          <div>
            <button>Prestados</button>
          </div>
          <div>
            <button>Disponibles</button>
          </div>
          <div>
            <button>Reportes</button>
          </div>
        </div>
      </div>
      <img src={Background} alt='' className='backgroundCubiculos' />
    </div>
  );
};

export default Cubiculos;