import { useContext } from 'react'
import { RiDeleteBinLine } from "react-icons/ri";
import { RestaurantContext } from './context/Context';
import CounterMenu from './CounterMenu';
import Button from './Button';

const MenuElement = () => {
    const { cart, setCart, total } = useContext(RestaurantContext);

    const handleMenuDelete = (id) => {
        // buscame el id que el usuario esta seleccionando
        const menuId = cart.find((item) => item.id === id);
        const newCart = cart.filter((item) => item !== menuId);

        setCart(newCart);
    }

    return (
        <>
            <div className='mt-16'>
                <div className="flex flex-col items-center gap-4 min-h-screen  w-[90vw]">
                    <div className="flex items-center justify-center gap-20 text-3xl text-center font-bold w-full">
                        <h3>Pedido</h3>
                    </div>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 w-full">
                        {
                            cart.map((menu) => {
                                const { id, title, image, price, quantity } = menu

                                return (
                                    <div
                                        className="flex flex-col p-1 gap-4 shadow-lg shadow-black hover:shadow transition-all duration-300 border"
                                        key={id}
                                    >
                                        <div className='flex items-center gap-4 h-20'>
                                            <img src={image} alt="imagenMenu"
                                                className='bg-cover w-16 h-16 rounded-lg '
                                            />
                                            <div className='w-full flex flex-col gap-1'>
                                                <div className='w-full flex justify-between gap-4'>
                                                    <div className="text-[0.80rem] font-semibold">{title}</div>
                                                    <CounterMenu menu={menu} quantity={quantity} />
                                                </div>

                                                <div className="flex items-center justify-between">
                                                    <span>
                                                        {(price * quantity).toFixed(2).replace(/\./g, ',')} €
                                                    </span>
                                                    <span className='pr-8'>
                                                        <button onClick={() => handleMenuDelete(id)}>
                                                            <RiDeleteBinLine className='w-6 h-8' />
                                                        </button>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <Button
                        text="Pedir  |"
                        route="/checkout"
                        label={`${total.toFixed(2).replace(/\./g, ',')} €`}
                        style="w-[80%] h-12"
                    />
                </div>
            </div>
        </>
    )
}

export default MenuElement