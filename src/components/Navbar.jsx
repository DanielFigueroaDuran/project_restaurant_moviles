import { useContext } from 'react'
import { Link } from 'react-router-dom';
import { RestaurantContext } from './context/Context';
import logo from "../assets/logo/logoDaniel.jpg";
import { MdShoppingBasket } from "react-icons/md";

const Navbar = () => {
    const { menuQuantity } = useContext(RestaurantContext);

    return (

        <div className=''>
            <nav className=' ma-auto flex items-center justify-between py-4 p-6 bg-black h-20 fixed top-0 left-0 w-full z-20'>

                <Link className='flex gap-3 items-center' to="/">
                    <img className=" w-20 object-cover rounded-full
                     " src={logo} alt="Logo" />
                    <span className='text-[0.65rem] text-white font-bold opacity-70'>Restaurant && DF</span>
                </Link>

                <Link to={"/menuCart"}>
                    <div className='cursor-pointer flex items-center justify-center w-10 h-12 bg-black          rounded-t-xl rounded-br-3xl relative'>
                        <div className='w-10 h-10'>
                            <MdShoppingBasket className='w-7 h-8 text-white text-xl' />
                        </div>

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
            {/* <ButtonGroup /> */}
        </div>

    )
}

export default Navbar