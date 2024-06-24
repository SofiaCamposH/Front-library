import React from 'react';
import './LoginForm.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Background from './Assets/IMG_4545.JPG'
const LoginForm = () => {
    return (
        <div className='container'>
            <img src={Background} alt='' className='background'/>
            <div className='wrapper'>
                <form action=''>
                    <h1>Biblioteca UTMA </h1>
                    <h2>Admin</h2>
                    <div className="input-box">
                        <input type="text" placeholder='Usuario' required />
                        <FaUser className='icon' />
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder='Contraseña' required />
                        <FaLock className='icon' />
                    </div>
                    <div className="remember-forgot">
                        <label><input type="checkbox" /> Recuerdame</label>
                        <a href="#">¿Olvidaste tu contraseña?</a>
                    </div>
                    <Link to={"/home"}>
                        <button>Iniciar sesión</button>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default LoginForm;