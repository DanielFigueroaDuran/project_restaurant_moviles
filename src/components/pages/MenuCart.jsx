import { useContext } from 'react';
import MenuElement from '../MenuElement';
import { RestaurantContext } from '../context/Context';
import { Link } from 'react-router-dom';

const MenuCart = () => {
    const { cart, setFilter } = useContext(RestaurantContext);

    const handlefilter = () => {
        setFilter("menu");
    }

    return (
        <div className='section mt-40'>
            {cart.length > 0
                ? <MenuElement />
                : <div className='flex flex-col items-center  p-4  gap-10  min-h-screen'>
                    <h2 className='font-semibold'>Ningún pedido aún </h2>
                    <p className='text-center'>
                        Aqui podrás ver tu historial de pedidos y volver a pedir tus favoritos.
                    </p>
                    <Link
                        className='bg-black text-white p-4 rounded-xl'
                        to="/"
                        onClick={handlefilter}
                    >
                        Iniciar pedido
                    </Link>
                </div>}
        </div>
    )
}

export default MenuCart