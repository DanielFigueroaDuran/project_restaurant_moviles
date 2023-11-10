import { useContext, useEffect } from 'react';
import MenuElement from '../MenuElement';
import { RestaurantContext } from '../context/Context';
import { Link } from 'react-router-dom';
import { AiOutlineHome } from "react-icons/ai";

const MenuCart = () => {
    const { cart, setFilter } = useContext(RestaurantContext);

    const handleFilter = () => {
        setFilter("menu");
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='section mt-24'>

            {cart.length > 0
                ?
                <div>
                    <Link
                        to="/"
                        onClick={handleFilter}
                    >
                        <AiOutlineHome className='w-6 h-6' />
                    </Link>
                    <MenuElement />
                </div>

                : <div className='flex flex-col items-center  p-4  gap-10  min-h-screen'>
                    <h2 className='font-semibold'>Ningún pedido aún </h2>
                    <p className='text-center'>
                        Aqui podrás ver tu historial de pedidos y volver a pedir tus favoritos.
                    </p>
                    <Link
                        className='bg-black text-white p-4 rounded-xl'
                        to="/"
                        onClick={handleFilter}
                    >
                        Iniciar pedido
                    </Link>
                </div>}
        </div>

    )
}

export default MenuCart