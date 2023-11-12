import { createContext, useEffect, useState } from 'react'
import { menus, juice, desserts } from "../../utils/data";

export const RestaurantContext = createContext();

const Context = ({ children }) => {
    const [dishMenus, setDishMenus] = useState([]);
    const [drinks, setDrinks] = useState([]);
    const [dessert, setDessert] = useState([]);
    const [cart, setCart] = useState([]);
    const [filter, setFilter] = useState("menu");

    const menuQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
    const total = cart.reduce((acc, menu) => acc + menu.price * menu.quantity, 0);

    const handleClicksubtract = (menu) => {
        const menuRepeat = cart.find((item) => item.id === menu.id);

        menuRepeat.quantity !== 1 &&
            setCart(cart.map((item) => item.id === menu.id
                ? { ...menu, quantity: menuRepeat.quantity - 1 }
                : item
            ));
    };

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
        setDishMenus(menus);
        setDrinks(juice);
        setDessert(desserts);
    }, [])

    return (
        <RestaurantContext.Provider value={{ dishMenus, setDishMenus, cart, setCart, total, drinks, setDrinks, dessert, setDessert, filter, setFilter, handleAddToCart, handleClicksubtract, menuQuantity }}>
            {children}
        </RestaurantContext.Provider>
    )
}

export default Context