import React from "react";
import './home.css'
import { Link } from 'react-router-dom';

     
          

//export default Header;

function home() {
    return (
        <main>

        <section class="banner"> 
            <div class="banner-text">
                <h2>Bienvenido a la Biblioteca Metropolitana </h2>
                <p>Un espacio para el aprendizaje, la cultura y el conocimiento.</p> 
            </div>
        </section>

        <section class="servicios">
        
                <div class="libros">
                    <img src="libros.JPG" alt="Icono de servicio" class="libros" width="85%" />
                    <h3>Préstamo de libros</h3>
                    <p>Consulta nuestros libros disponibles.</p>
                    <Link to={"/Libros"}>
                       <button type="button" class="button-images">LIBROS </button>
                     </Link>
                </div>
                <div class="service-card">
                    <img src="cubiculos.JPG" alt="Icono de servicio" width="85%" />
                    <h3>Cubiculos </h3>
                    <p>Accede a nuestros cubiculos, es el espacio ideal para tener una junta.</p>
                    <Link to= '/Cubiculos'>
                       <button type="button" class="button-images">  CUBICULOS  </button>
                    </Link>
                </div>
                <div class="service-card">
                    <img src="computadoras.JPG" alt="Icono de servicio" width="85%" />
                    <h3>Computadoras</h3>
                    <p>Accede al prestamo de una de nuestras computadoras.</p>
                <Link to= {"/Computadoras"}>
                    <button type="button" class="button-images">  COMPUTADORAS  </button>
                </Link>

            </div>
        </section>
    </main>  
    );
}

export default home;