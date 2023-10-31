import { useContext } from 'react'
import MenuElement from '../MenuElement'
import MenuTotal from '../MenuTotal'
import { RestaurantContext } from '../context/Context';

const MenuCart = () => {
    const { cart } = useContext(RestaurantContext);
    return (

        cart.length > 0
            ?
            <>
                <MenuElement />
                {/* <MenuTotal /> */}
            </>
            : (
                <div className='flex justify-center items-center mt-10 min-h-screen'>
                    <h2>Your Menu is empty </h2>
                </div>
            )
    )
}

export default MenuCart