import { useContext, useState } from "react";
import { categories } from "../utils/data";
import { RxArrowLeft } from "react-icons/rx";
import Menu from "./landingpage/Menu";
import Bebidas from "./landingpage/Bebidas";
import Postre from "./landingpage/Postre";
import MenuCart from "./pages/MenuCart";
import { Link } from "react-router-dom";
import { RestaurantContext } from "./context/Context";

const ButtonGroup = () => {
    const { filter, setFilter } = useContext(RestaurantContext);
    // const [filter, setFilter] = useState("menu");
    // console.log(filter)


    return (
        <section className="w-full mt-24">
            <div className="w-full flex flex-col items-center justify-center">
                <div className="w-full flex items-center justify-center gap-8 mt-14 py-6 px-3  bg-bgBtnGroup bg-cover bg-center fixed top-0 left-0 pt-10 z-10">
                    {categories &&
                        categories.map((category) => (
                            <div

                                key={category.id}
                                className={`group ${filter === category.urlParamName ? "bg-cartNumBg" : "bg-card"
                                    } w-24  h-24 p-1 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center hover:bg-cartNumBg`}
                                onClick={() => setFilter(category.urlParamName)}
                            >
                                <div
                                    className={`w-10 h-10 rounded-full shadow-lg ${filter === category.urlParamName
                                        ? "bg-white"
                                        : "bg-cartNumBg"
                                        } group-hover:bg-white flex items-center justify-center`}
                                >

                                    <div className={`${filter === category.urlParamName
                                        ? "text-textColor"
                                        : "text-white"
                                        } group-hover:text-textColor text-lg`}>
                                        {category.logo}
                                    </div>
                                </div>
                                <p
                                    className={`text-sm ${filter === category.urlParamName
                                        ? "text-white"
                                        : "text-textColor"
                                        } group-hover:text-white`}
                                >
                                    {category.name}
                                </p>
                            </div>
                        ))}
                </div>

                <div>
                    {filter === "menu"
                        ? <Menu />
                        : filter === "bebidas"
                            ? <Bebidas />
                            : filter === "postre"
                                ? <Postre />
                                : filter === "pedidos"
                                    ? <MenuCart />
                                    : ''
                    }
                </div>
            </div>
        </section>
    )
}

export default ButtonGroup