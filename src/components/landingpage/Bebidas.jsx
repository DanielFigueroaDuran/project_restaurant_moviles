import { useContext, useEffect } from "react";
import { RestaurantContext } from "../context/Context";
import Button from "../Button";

const Bebidas = () => {
    const { drinks, total, handleAddToCart } = useContext(RestaurantContext);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="section mt-32">
            <div className="flex flex-col items-center">
                <div className="text-3xl text-center font-bold mb-8">
                    Bebidas
                </div>
                <div className=" grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-8">
                    {drinks?.map((menu) => {
                        const { id, image, title, price } = menu;
                        return (
                            <div
                                className=" flex flex-col justify-between p-4 shadow-lg shadow-black hover:shadow transition-all duration-300 border border-black border-opacity-40 rounded-lg"
                                key={id}
                            >
                                <div className='flex justify-center'>
                                    <img src={image} alt="imagenMenu"
                                        className='w-40 h-40 rounded-lg mb-4 bg-cover'
                                    />
                                </div>

                                <div className='flex items-center w-full justify-between gap-2 mb-4 px-4'>
                                    <div className="md:text-xl text-[1rem] font-semibold ">{title}</div>
                                    <span
                                        className='font-semibold'
                                    >
                                        {price.toFixed(2).replace(/\./g, ',')} €
                                    </span>
                                </div>

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

export default Bebidas