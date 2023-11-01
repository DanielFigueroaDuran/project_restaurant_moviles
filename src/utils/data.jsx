import { BiMap } from "react-icons/bi";
import { CiBurger } from "react-icons/ci";
import { GiBowlOfRice, GiCakeSlice } from "react-icons/gi";
import { FaIceCream } from "react-icons/fa";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi";
import { AiFillHome } from "react-icons/ai";
import { MdExplore, MdContactPage } from "react-icons/md";

import recipe1 from "../assets/menu/patacon.png";
import recipe2 from "../assets/menu/cachapa1.png";
import recipe3 from "../assets/menu/chicharron1bg.png";
import recipe4 from "../assets/menu/platonavideñobg.png";
import recipe5 from "../assets/menu/empanadadecarnemechada.png";
import recipe6 from "../assets/menu/pabellonremovebg.png";

import payment1 from "../assets/icons/payment1.png";
import payment2 from "../assets/icons/payment2.png";
import payment3 from "../assets/icons/payment3.png";
import payment4 from "../assets/icons/payment4.png";

export const heroIcons = [
    <CiBurger />,
    <FaIceCream />,
    <GiCakeSlice />,
    <GiBowlOfRice />,
];

export const menus = [
    {
        id: 1,
        image: recipe1,
        title: "Patacones",
        ingredients: "Tortillas de plátanos macho verdes frítos con ensalada fresca de la casa, queso blanco rallado, Ketchup y Mayonesa. o pollo mechado",
        price: 17,
        quantity: 1
    },
    {
        id: 2,
        image: recipe2,
        title: "Cachapa con Cochino Frito",
        ingredients: "Tortilla de maíz Tierno y dulce hecha a la plancha con queso de mano (Queso fresco artesanal)",
        price: 20,
        quantity: 1
    },
    {
        id: 3,
        image: recipe3,
        title: "chicharron Frito",
        ingredients: "Fritura de la piel del cerdo con carne.",
        price: 15,
        quantity: 1
    },
    {
        id: 4,
        image: recipe4,
        title: "Plato Navideño",
        ingredients: "Hallaca, Pernil, pan de Jamon y ensalada de gallina",
        price: 20,
        quantity: 1
    },
    {
        id: 5,
        image: recipe5,
        title: "Empanadas",
        ingredients: "Masa fina de harina de maíz en forma de media luna rellenas de. queso blanco rallado, ternera mechada (Carne de primera calidad, pollo mechado (Pechuga de pollo primera calidad))",
        price: 3,
        quantity: 1
    },
    {
        id: 6,
        image: recipe6,
        title: "Pabellon",
        ingredients: "Ternera mechada en su guiso, Arroz blanco, Frijoles negros y plátano macho maduro",
        price: 15,
        quantity: 1
    },
];

export const categories = [
    {
        id: 1,
        name: "Chicken",
        urlParamName: "chicken",
    },
    {
        id: 2,
        name: "Curry",
        urlParamName: "curry",
    },
    {
        id: 3,
        name: "Rice",
        urlParamName: "rice",
    },

]

export const footerSocials = [<BsFacebook />, <BsInstagram />, <BsTwitter />];
export const footerContacts = [
    {
        id: 1,
        icon: <HiOutlinePhone />,
        text: "+34-645-62-52-78",
    },
    {
        id: 2,
        icon: <HiOutlineMail />,
        text: "danielfigueroa@gmail.com",
    },
    {
        id: 3,
        icon: <BiMap />,
        text: "Madrid",
    },
];

export const mainMenu = [
    {
        id: 1,
        href: "home",
        text: "Home",
        icon: <AiFillHome />,
    },
    {
        id: 2,
        href: "about",
        text: "About",
        icon: <MdExplore />,
    },
    {
        id: 3,
        href: "recipe",
        text: "Recipe",
        icon: <GiBowlOfRice />,
    },
    {
        id: 4,
        href: "contact",
        text: "Contact",
        icon: <MdContactPage />,
    },
];

export const explores = ["Drinks", "Burger", "Salad", "Breakfast", "Dinner"];

export const payements = [payment1, payment2, payment3, payment4];
