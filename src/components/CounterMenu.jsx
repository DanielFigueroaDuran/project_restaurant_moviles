import { useContext, useEffect } from 'react'
import { RestaurantContext } from './context/Context';
import { HiMiniPlusSmall, HiMiniMinusSmall } from "react-icons/hi2";

const CounterMenu = ({ menu, quantity }) => {
    //const { quantity } = menu;
    const { handleAddToCart, handleClicksubtract } = useContext(RestaurantContext);

    // useEffect(() => {
    //     setMenuQuantityItem(quantity);
    // }, []);

    //console.log(menu.quantity);

    // const handleClicksubtract = (menu) => {
    //     const menuRepeat = cart.find((item) => item.id === menu.id);

    //     menuRepeat.quantity !== 1 &&
    //         setCart(cart.map((item) => item.id === menu.id
    //             ? { ...menu, quantity: menuRepeat.quantity - 1 }
    //             : item
    //         ));
    // };


    return (
        <div className="flex items-center gap-2 ">
            <button
                className='w-6 h-6 border border-[white]'
                onClick={() => handleClicksubtract(menu)}>
                <HiMiniMinusSmall className='bg-black text-white rounded-full w-6 h-6' />
            </button>

            <p className='flex items-center justify-center w-6 h-6 text-[0.85rem]  rounded-[200px] '>{quantity}</p>

            <button
                className='w-6 h-6'
                onClick={() => handleAddToCart(menu)}
            >
                <HiMiniPlusSmall className='bg-black text-white rounded-full w-6 h-6' />
            </button>
        </div>
    )
}

export default CounterMenu