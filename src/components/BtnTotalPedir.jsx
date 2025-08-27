import { useContext } from "react";
import { RestaurantContext } from "./context/Context";
import { Link } from "react-router-dom";


const BtnTotalPedir = ({ text, handleClick, quantity, label, route }) => {
      const { total } = useContext(RestaurantContext);

      return (
            <>
                  {total > 0
                        ?
                        <Link to={route}
                              className='flex items-center justify-between w-full py-2 px-8 
                         bg-black hover:bg-[#515051] font-semibold rounded-md'>

                              <p className='text-white'>{label}</p>
                              <p className='text-white'>|</p>
                              <span className='text-white'>{quantity} €</span>
                              <p className='text-white'>
                                    {text}
                              </p>
                        </Link>
                        : ''
                  }
            </>
      )
}

export default BtnTotalPedir