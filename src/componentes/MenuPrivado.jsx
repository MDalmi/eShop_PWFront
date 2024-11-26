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
                    <a href='/robo'>Robôs</a>
                    <a href='/aluguel'>Aluguel </a>
                    {usuario ?
                        <a exact="true"
                            to="/" onClick={() => logout()}>Logout</a>
                        :
                        <a exact="true"
                            to="/login">login</a>
                    }
                </div>
                <Outlet />
            </div>
        </>
    );
}

export default MenuPrivado;