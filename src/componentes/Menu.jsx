import { Outlet } from 'react-router-dom';
import './Menu.css'

function Menu() {

    return (
        <>
            <div className='background'>
                <div className='itens-menu'>
                    <a href='/'> Home </a>
                    <a href='/robo'>Robôs </a>
                    <a href='/aluguel'>Aluguel </a>
                    <a href='/sobre'>Sobre</a>
                </div>
                <Outlet />
            </div>
        </>
    );
}

export default Menu;