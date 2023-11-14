import { BiMap } from "react-icons/bi";
//import { CiBurger } from "react-icons/ci";
import { GiBowlOfRice, GiCakeSlice } from "react-icons/gi";
//import { FaIceCream } from "react-icons/fa";
//import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi";
import { AiFillHome } from "react-icons/ai";
import { MdExplore, MdContactPage, MdOutlineRestaurantMenu } from "react-icons/md";
import { FaGlassWater } from "react-icons/fa6";
import { BiSolidDish } from "react-icons/bi";
//import { CgMenuHotdog } from "react-icons/cg";


import mechada from "../assets/arepas/arepaMechada.png";
import pabellon from "../assets/arepas/arepaPabellon.png";
import pollo from "../assets/arepas/arepaPollo.png";
import polloQueso from "../assets/arepas/arepaPolloQueso.png";
import queso from "../assets/arepas/arepaQueso.png";
import quesoMano from "../assets/arepas/arepaQuesoMano.png";
import reinaPepiada from "../assets/arepas/arepaReinaPepiada.png";

import recipe1 from "../assets/menu/patacon.png";
import recipe2 from "../assets/menu/cachapa1.png";
import recipe3 from "../assets/menu/chicharron1bg.png";
import recipe4 from "../assets/menu/platonavideñobg.png";
import recipe5 from "../assets/menu/empanadadecarnemechada.png";
import recipe6 from "../assets/menu/pabellonremovebg.png";

import fresa from "../assets/bebidas/batidoFresa.png";
import lulo from "../assets/bebidas/lulo.png";
import mango from "../assets/bebidas/mango.png";
import papelon from "../assets/bebidas/papelon.png";
import malta from "../assets/bebidas/malta.png";

import ArrozConCoco from "../assets/postres/arrozConCoco.png";
import dulceLechoza from "../assets/postres/dulceLechoza.png";
import quesillo from "../assets/postres/quesillo.png";
import golfeado from "../assets/postres/golfeado.png";
import tortaPiña from "../assets/postres/tortaPiña.png";
//import tortaTresLeche from "../assets/postres/tortaTresLeche.png";



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
    {
        id: 7,
        image: mechada,
        title: "Arepa Carne Mechada",
        ingredients: "Carne (Ternera) Mechada en su guiso",
        price: 10,
        quantity: 1
    },
    {
        id: 8,
        image: pabellon,
        title: "Arepa Pabellon",
        ingredients: "Frijoles Negros, Ternera Mechada, plátano y queso",
        price: 12,
        quantity: 1
    },
    {
        id: 9,
        image: pollo,
        title: "Arepa de Pollo",
        ingredients: "Pollo Mechado (Mechada en su guiso)",
        price: 8,
        quantity: 1
    },
    {
        id: 10,
        image: polloQueso,
        title: "Arepa Pollo y Queso",
        ingredients: "Pollo Mechado con queso (Edam)",
        price: 10,
        quantity: 1
    },
    {
        id: 11,
        image: queso,
        title: "Arepa de Queso",
        ingredients: "Queso Fresco Tipo Latino Rallado",
        price: 7,
        quantity: 1
    },
    {
        id: 12,
        image: quesoMano,
        title: "Arepa Queso de Mano",
        ingredients: "Queso de mano (Queso Artesanal)",
        price: 8,
        quantity: 1
    },
    {
        id: 13,
        image: reinaPepiada,
        title: "Arepa Reina Pepiada",
        ingredients: "Pollo, aguacate y mayonesa",
        price: 10,
        quantity: 1
    },
];

export const juice = [
    {
        id: 14,
        image: fresa,
        title: "Batido fresa con leche",
        price: 2,
        quantity: 1
    },
    {
        id: 15,
        image: lulo,
        title: "Lulo",
        price: 1.50,
        quantity: 1
    },
    {
        id: 16,
        image: mango,
        title: "Mango",
        price: 1.20,
        quantity: 1
    },
    {
        id: 17,
        image: papelon,
        title: "Papelon",
        price: 1,
        quantity: 1
    },
    {
        id: 18,
        image: malta,
        title: "Malta",
        price: 0.95,
        quantity: 1
    },
];

export const desserts = [
    {
        id: 19,
        image: ArrozConCoco,
        title: "Arroz Con Coco",
        price: 1.80,
        quantity: 1
    },
    {
        id: 20,
        image: dulceLechoza,
        title: "Dulce de Lechoza",
        price: 2,
        quantity: 1
    },
    {
        id: 21,
        image: quesillo,
        title: "Quesillo",
        price: 2.50,
        quantity: 1
    },
    {
        id: 22,
        image: golfeado,
        title: "Golfeado",
        price: 3.30,
        quantity: 1
    },
    {
        id: 23,
        image: tortaPiña,
        title: "Torta de Piña",
        price: 3,
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
        name: "Bebidas",
        urlParamName: "bebidas",
        logo: <FaGlassWater />,
    },
    {
        id: 3,
        name: "Postre",
        urlParamName: "postre",
        logo: <GiCakeSlice />,
    },
    {
        id: 4,
        name: "Pedidos",
        urlParamName: "pedidos",
        logo: <BiSolidDish />,
    },
];


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
