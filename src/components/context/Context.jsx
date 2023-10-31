import { createContext, useEffect, useState } from 'react'
import { menus } from "../../utils/data";

export const RestaurantContext = createContext();

const Context = ({ children }) => {
    const [dishMenus, setDishMenus] = useState([]);
    const [cart, setCart] = useState([])

    const menuQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

    const handleAddToCart = (menu) => {
        // verificamos si el usuario esta metiendo el estrictamente igual  menu  que el usuario quiere agregar 
        const menuRepeat = cart.find((item) => item.id === menu.id);
        // de esta forma si el menu esta repetido se le suma uno
        if (menuRepeat) {
            setCart(cart.map((item) => item.id === menu.id
                ? { ...menu, quantity: menuRepeat.quantity + 1 }
                : item
            ));
        } else {

            setCart([...cart, menu]);
        }
    }

    useEffect(() => {
        setDishMenus(menus)
    }, [])

    return (
        <RestaurantContext.Provider value={{ dishMenus, setDishMenus, cart, setCart, handleAddToCart, menuQuantity }}>
            {children}
        </RestaurantContext.Provider>
    )
}

export default Context