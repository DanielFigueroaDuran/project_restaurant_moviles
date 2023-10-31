import { useContext, useEffect, useState } from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { RestaurantContext } from './context/Context';

const Navbar = () => {
    const { menuQuantity } = useContext(RestaurantContext);
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 20);
        });
    }, []);

    return (
        <div className={`${scroll ? 'bg-back shadow-sm' : ''} fixed top-0 left-0 w-full z-20`}>
            <nav className='relattive ma-auto flex items-center justify-between py-4 p-6'>
                <div>
                    <Link to="/">
                        <h4 className='text-xl font-semibold text-black'>Daniels</h4>
                    </Link>

                    <span className='text-[0.65rem] font-bold opacity-70'>Restaurant && DF</span>
                </div>
                <Link to="/menu">
                    <div className='cursor-pointer flex items-center justify-center w-10 h-12 bg-black rounded-t-xl rounded-br-3xl relative'>
                        <AiOutlineShoppingCart className='text-white text-xl' />
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