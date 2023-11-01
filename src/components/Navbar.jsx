import { useContext } from 'react'
//import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { RestaurantContext } from './context/Context';
import logo from "../assets/logo/logoDaniel.jpg";
import { MdShoppingBasket } from "react-icons/md";

const Navbar = () => {
    const { menuQuantity } = useContext(RestaurantContext);


    return (

        <div>
            <nav className='relattive ma-auto flex items-center justify-between py-4 p-6 bg-black'>
                <div>
                    <Link to="/">
                        <img className=" w-20 object-cover rounded-full
                     " src={logo} alt="Logo" />
                    </Link>

                    <span className='text-[0.65rem] text-white font-bold opacity-70'>Restaurant && DF</span>
                </div>
                <Link to="/menu">
                    <div className='cursor-pointer flex items-center justify-center w-10 h-12 bg-black rounded-t-xl rounded-br-3xl relative'>
                        <MdShoppingBasket className='text-white text-xl' />
                        {
                            menuQuantity > 0
                                ? <div className='absolute bg-red-500 text-[0.65rem] w-4 h-4 right-1 top-2 flex items-center justify-center rounded-full text-white'
                                >
                                    {menuQuantity}
                                </div>
                                : ''
                        }
                    </div>
                </Link>
            </nav>
        </div>

    )
}

export default Navbar