import { useContext, useEffect } from 'react'
import { RestaurantContext } from './context/Context';
import { HiMiniPlusSmall, HiMiniMinusSmall } from "react-icons/hi2";

const CounterMenu = ({ menu, quantity }) => {
    const { setNewMenu, setCardQuantity, handleAddToCart, handleClicksubtract } = useContext(RestaurantContext);

    useEffect(() => {
        setNewMenu(menu);
        setCardQuantity(quantity);
    }, []);

    return (
        <div className="flex items-center gap-2 ">
            <button
                className='w-6 h-6 border border-[white]'
                onClick={() => handleClicksubtract(menu)}>
                <HiMiniMinusSmall className='bg-black text-white rounded-full w-6 h-6' />
            </button>

            <p className='flex items-center justify-center w-6 h-6 text-[0.85rem]  rounded-[200px]'>
                {quantity}
            </p>

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