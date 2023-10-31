import { useContext, useState, } from 'react'
import { RestaurantContext } from './context/Context';
import minus from "../assets/icons/minus.png";
import plus from "../assets/icons/plus.png";


const CounterMenu = ({ menu, quantity }) => {
    //const { quantity } = menu;
    const { cart, setCart, handleAddToCart } = useContext(RestaurantContext);
    //console.log(menu.quantity);

    const handleClicksubtract = (menu) => {
        const menuRepeat = cart.find((item) => item.id === menu.id);

        menuRepeat.quantity !== 1 &&
            setCart(cart.map((item) => item.id === menu.id
                ? { ...menu, quantity: menuRepeat.quantity - 1 }
                : item
            ));
    };


    return (
        <div className="mt-[-40px] flex items-center gap-3 bg-white border rounded-l-[25px] rounded-r-[25px]  p-1">
            <button
                className='w-6 h-6'
                onClick={() => handleClicksubtract(menu)}>
                <img src={minus} alt="minus" />
            </button>

            <p className='flex items-center justify-center w-6 h-6  bg-[#2a5b451a] text-[0.85rem]  rounded-[200px] '>{quantity}</p>

            <button
                className='w-6 h-6'
                onClick={() => handleAddToCart(menu)}
            >
                <img src={plus} alt="plus" />
            </button>
        </div>
    )
}

export default CounterMenu