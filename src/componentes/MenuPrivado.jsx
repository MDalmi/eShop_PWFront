import { Outlet } from 'react-router-dom';
import './Menu.css'
import { getUsuario, logout } from '../seguranca/Autenticacao';

function MenuPrivado() {

    const usuario = getUsuario();


    return (
        <>
            <div className='background'>
                <div className='itens-menu'>
                    <a href='/'> Home </a>
                    <a href='/privado/robo'>Robôs</a>
                    <a href='/privado/aluguel'>Aluguel </a>
                    {usuario ?
                        <a exact="true"
                            href="/" onClick={() => logout()}>Logout</a>
                        :
                        <a exact="true"
                            href="/login">Login</a>
                    }
                </div>
                <Outlet />
            </div>
        </>
    );
}

export default MenuPrivado;