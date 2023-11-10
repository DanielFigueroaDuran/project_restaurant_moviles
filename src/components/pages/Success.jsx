import { Link } from "react-router-dom"
import { AiOutlineHome } from "react-icons/ai";
import { useContext } from "react";
import { RestaurantContext } from "../context/Context";
import logo from "../../assets/logo/logoDaniel2.jpg";

const Success = () => {
    const { setFilter } = useContext(RestaurantContext);

    return (
        <div className="w-screen h-screen  bg-[#fbf3eb]">



            <div className="flex flex-col ">
                <Link
                    className="pl-4"
                    to="/"
                    onClick={() => setFilter("menu")}
                >
                    <AiOutlineHome className='w-6 h-6 mt-24' />
                </Link>

                <div className="flex flex-col">
                    <h2 className="font-semibold text-[1.5rem] text-center mt-24">
                        Gracias por su pedido, estamos trabajando en ello.
                    </h2>
                    <img src={logo} alt="" />
                    <h3 className="font-semibold text-center">Agradecemos tu preferencia</h3>
                </div>
            </div>
        </div>


    )
}

export default Success