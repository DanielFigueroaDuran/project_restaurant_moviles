import { useContext } from 'react'
import Button from '../Button';
import { RestaurantContext } from '../context/Context';
import { HiMiniPlusSmall, HiMiniMinusSmall } from "react-icons/hi2";

const Menu = () => {
    const { dishMenus, cart, total, handleAddToCart, handleClicksubtract } = useContext(RestaurantContext);

    const quantity = cart?.map((item) => item.quantity)

    return (
        <div className="section mt-32">
            <div className="flex flex-col items-center">
                <div className="text-3xl text-center font-bold mb-8">
                    Menú
                </div>
                <div className=" grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-8">
                    {dishMenus?.map((menu) => {
                        const { id, image, title, price, ingredients } = menu;
                        return (
                            <div
                                className=" flex flex-col justify-between p-4 shadow-lg shadow-black hover:shadow transition-all duration-300 border border-black border-opacity-40 rounded-lg"
                                key={id}
                            >
                                <div className='flex self-end'>
                                    ({quantity})
                                </div>
                                <div className='flex justify-center items-center gap-4 border border-[tomato]'>

                                    <button
                                        className='w-6 h-6 border border-[white]'
                                        onClick={() => handleClicksubtract(menu)}>
                                        <HiMiniMinusSmall className='bg-black text-white rounded-full w-6 h-6' />
                                    </button>

                                    <img
                                        className='w-40 h-40 rounded-lg mb-4 bg-cover border border-[blue]'
                                        src={image}
                                        alt="imagenMenu"
                                    />

                                    <button
                                        className='w-6 h-6'
                                        onClick={() => handleAddToCart(menu)}
                                    >
                                        <HiMiniPlusSmall className='bg-black text-white rounded-full w-6 h-6' />
                                    </button>

                                </div>

                                <div className='flex items-center w-full justify-between mb-4 px-10'>
                                    <div className="md:text-xl text-[1rem] font-semibold ">{title}</div>
                                    <span
                                        className='font-semibold'
                                    >
                                        {price.toFixed(2).replace(/\./g, ',')} €
                                    </span>
                                </div>

                                <p className='text-[0.85rem] opacity-70 mb-4 text-center h-20'>
                                    {ingredients}
                                </p>

                                <div className="flex justify-center gap-4">

                                    <Button
                                        handleClick={() => handleAddToCart(menu)}
                                        text="Añadir"
                                        style="w-40"
                                    />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="flex justify-center min-w-full fixed bottom-0 left-0 ">
                {total > 0
                    ? <div className='flex items-center w-full justify-between pl-8 bg-black'>
                        <p className='text-white'>Total</p>
                        <p className='text-white'>|</p>
                        <span className='text-white'>{total.toFixed(2).replace(/\./g, ',')} €</span>
                        <Button
                            route="/menuCart"
                            text="Pedido"
                            style="w-40"
                        />
                    </div>
                    : ''
                }
            </div>
        </div>
    )
}

export default Menu