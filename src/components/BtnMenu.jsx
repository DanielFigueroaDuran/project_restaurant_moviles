import { useContext } from "react";
import { RestaurantContext } from "./context/Context";
import { Link } from "react-router-dom";



const BtnMenu = () => {
      const { total } = useContext(RestaurantContext);

      return (
            <>
                  {total > 0
                        ?
                        <Link to="/menuCart"
                              className='flex items-center justify-between w-full py-2 px-8 
                        bg-black hover:bg-[#515051] font-semibold rounded-md'>

                              <p className='text-white'>Total</p>
                              <p className='text-white'>|</p>
                              <span className='text-white'>{total.toFixed(2).replace(/\./g, ',')} €</span>
                              <p className='text-white'>
                                    Pedido
                              </p>
                        </Link>
                        : ''
                  }
            </>
      )
}

export default BtnMenu