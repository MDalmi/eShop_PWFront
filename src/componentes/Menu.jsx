import { Outlet } from 'react-router-dom';
import './Menu.css'

function Menu() {

    return (
        <>

            <div className='menu'>
                <div className='itens-menu'>
                    <a href='/'> Home </a>
                    <a href='/categorias'>Robôs </a>
                    <a href='/categorias'>Missões </a>
                    <a href='/categorias'>Sobre</a>
                </div>
            </div>

            <Outlet />
        </>
    );
}

export default Menu;