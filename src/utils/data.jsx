import { BiMap } from "react-icons/bi";
//import { CiBurger } from "react-icons/ci";
import { GiBowlOfRice, GiCakeSlice } from "react-icons/gi";
//import { FaIceCream } from "react-icons/fa";
//import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi";
import { AiFillHome } from "react-icons/ai";
import { MdExplore, MdContactPage, MdOutlineRestaurantMenu } from "react-icons/md";
import { FaGlassWater } from "react-icons/fa6";
import { CgMenuHotdog } from "react-icons/cg";

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

// export const heroIcons = [
//     <CiBurger />,
//     <FaIceCream />,
//     <GiCakeSlice />,
//     <GiBowlOfRice />,
// ];

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
        title: "Cachapa con Cerdo",
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
        name: "Menú",
        urlParamName: "menu",
        logo: <MdOutlineRestaurantMenu />,
    },
    {
        id: 2,
        name: "Arepas",
        urlParamName: "arepa",
        logo: <CgMenuHotdog />,
    },
    {
        id: 3,
        name: "Bebidas",
        urlParamName: "bebidas",
        logo: <FaGlassWater />,
    },
    {
        id: 4,
        name: "Postre",
        urlParamName: "postre",
        logo: <GiCakeSlice />,
    },

]

//export const footerSocials = [<BsFacebook />, <BsInstagram />, <BsTwitter />];
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
