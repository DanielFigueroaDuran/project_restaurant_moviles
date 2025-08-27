import { useContext, useEffect } from 'react'
import Button from '../Button';
import { RestaurantContext } from '../context/Context';
import BtnTotalPedir from '../BtnTotalPedir';

const Menu = () => {
    const { dishMenus, total, cart, handleAddToCart } = useContext(RestaurantContext);

    //console.log(newMenu)
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="section mt-32">
            <div className="flex flex-col items-center">
                <div className="text-3xl text-center font-bold mb-8">
                    Menú
                </div>
                <div className=" grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-8">
                    {dishMenus?.map((menu) => {
                        const { id, image, title, price, ingredients } = menu;
                        const newQuantity = cart.find((item) => item.id === menu.id);
                        return (
                            <div
                                className=" flex flex-col justify-between p-4 hover:shadow-lg hover:shadow-black 
                                transition-transform duration-300 hover:translate-y-[-2px] 
                                hover:scale-[1.03] border border-black border-opacity-40 rounded-lg"
                                key={id}
                            >
                                <div className='text-right'>
                                    {newQuantity
                                        ? `(${newQuantity.quantity})`
                                        : ''
                                    }
                                </div>
                                <div className='flex justify-center items-center gap-4'>
                                    <img
                                        className='w-40 h-40 rounded-lg mb-4 bg-cover'
                                        src={image}
                                        alt="imagenMenu"
                                    />
                                </div>
                                <div className='flex items-center w-full justify-between mb-4 px-4'>
                                    <div className="flex justify-center  md:text-xl   font-semibold ">{title}</div>
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
            <div className="flex justify-center min-w-full fixed bottom-0 left-0">
                <BtnTotalPedir
                    label="Total"
                    quantity={`${total.toFixed(2).replace(/\./g, ',')}`}
                    text="Pedido"
                    route="/menuCart"
                />
            </div>
        </div>
    )
}

export default Menu