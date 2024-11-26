import { Outlet } from 'react-router-dom';
import './Menu.css'

function MenuPublico() {

    return (
        <>
            <div className='background'>
                <div className='itens-menu'>
                    <a href='/'> Home </a>
                    <a href='/login'> Login </a>
                </div>
                <Outlet />
            </div>
        </>
    );
}

export default MenuPublico;