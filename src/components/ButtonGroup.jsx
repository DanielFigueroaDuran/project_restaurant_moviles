import { useState } from "react";
import { categories } from "../utils/data";
import Menu from "./landingpage/Menu";
import Arepa from "./landingpage/Arepa";
import Bebidas from "./landingpage/Bebidas";
import Postre from "./landingpage/Postre";
//import { IoFastFood } from "react-icons/io5";

const ButtonGroup = () => {
    const [filter, setFilter] = useState("menu");
    console.log(filter)


    return (
        <section className="w-full my-6" id="menu">
            <div className="w-full flex flex-col items-center justify-center">

                <p className="text-sm text-center p-3 font-semibold capitalize"
                >
                    te transportará a un mundo de
                    sabores y sensaciones.
                </p>

                <div className="w-full flex items-center justify-center gap-8 py-6  px-1">
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

                                    {/* <IoFastFood
                                        className={`${filter === category.urlParamName
                                            ? "text-textColor"
                                            : "text-white"
                                            } group-hover:text-textColor text-lg`}
                                    /> */}
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
                        : filter === "arepa"
                            ? <Arepa />
                            : filter === "bebidas"
                                ? <Bebidas />
                                : filter === "postre"
                                    ? <Postre />
                                    : ''
                    }
                </div>
            </div>
        </section>
    )
}

export default ButtonGroup