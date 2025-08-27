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
        // We check if the user is entering the exact same menu that the user wants to add.
        const menuRepeat = cart.find((item) => item.id === menu.id);

        // We check if the menu is repeated and add one.
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
        <RestaurantContext.Provider value={
            {
                dishMenus,
                setDishMenus,
                cart,
                setCart,
                total,
                drinks,
                setDrinks,
                dessert,
                setDessert,
                filter,
                setFilter,
                handleAddToCart,
                handleClicksubtract,
                menuQuantity
            }}>
            {children}
        </RestaurantContext.Provider>
    )
}

export default Context