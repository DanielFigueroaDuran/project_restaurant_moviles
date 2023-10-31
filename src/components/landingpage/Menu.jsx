import { useContext } from 'react'
//import { menus } from "../../utils/data";
import Button from '../Button';
//import CounterMenu from '../CounterMenu';
import { RestaurantContext } from '../context/Context';

const Menu = () => {
    const { dishMenus, handleAddToCart } = useContext(RestaurantContext);

    return (
        <div className="section menu" id='menu'>
            <div className="flex flex-col items-center">
                <div className="text-3xl text-center font-bold mb-16">
                    Menú
                </div>
                <div className=" grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-16 ">
                    {dishMenus?.map((menu) => {
                        const { id, image, title, price, ingredients, quantity } = menu;
                        return (
                            <div
                                className="p-4 shadow-lg hover:shadow transition-all duration-300"
                                key={id}
                            >
                                <img src={image} alt="imagenMenu"
                                    className='h-40 rounded-lg mb-4 bg-cover'
                                />
                                <div className='flex items-center justify-between mb-4'>
                                    <div className="md:text-xl text-[1rem] font-semibold">{title}</div>
                                </div>

                                <p className='text-[0.85rem] opacity-70 mb-4 text-center h-[150px]'>
                                    {ingredients}
                                </p>

                                <div className="flex items-center justify-between">
                                    <span>{price.toFixed(2).replace(/\./g, ',')}</span>
                                    <span>
                                        <Button
                                            handleClick={() => handleAddToCart(menu)}
                                            text="Añadir" />
                                    </span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Menu