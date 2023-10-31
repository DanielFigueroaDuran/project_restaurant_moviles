import { useContext } from 'react'
import { RiDeleteBinLine } from "react-icons/ri";
import { RestaurantContext } from './context/Context';
import CounterMenu from './CounterMenu';
import Button from './Button';
import MenuTotal from './MenuTotal';


const MenuElement = () => {
    const { cart, setCart } = useContext(RestaurantContext);

    const handleMenuDelete = (id) => {
        // buscame el id que el usuario esta seleccionando
        const menuId = cart.find((item) => item.id === id);
        const newCart = cart.filter((item) => item !== menuId);

        setCart(newCart);
    }
    //    <div className='section '>
    //             <div className="flex flex-col items-center ">
    //                 <div className="text-3xl text-center font-bold mb-16">
    //                     Menú
    //                 </div>
    //                 <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-16 ">
    //                     {
    //                         cart.map((menu) => {
    //                             const { id, title, image, price, quantity } = menu
    //                             return (
    //                                 <div
    //                                     className="p-4 shadow-lg hover:shadow transition-all duration-300"
    //                                     key={id}
    //                                 >
    //                                     <img src={image} alt="imagenMenu"
    //                                         className='h-40 rounded-lg mb-4 bg-cover'
    //                                     />
    //                                     <div className='flex items-center justify-between mb-4'>
    //                                         <div className="md:text-xl text-[1rem] font-semibold">{title}</div>
    //                                         <span>{(price * quantity).toFixed(2).replace(/\./g, ',')} €</span>
    //                                     </div>

    //                                     <div className="flex items-center justify-between">

    //                                         <CounterMenu menu={menu} quantity={quantity} />

    //                                         <span className='flex gap-4'>
    //                                             <Button
    //                                                 text="Eliminar"
    //                                                 handleClick={() => handleMenuDelete(id)}
    //                                             />
    //                                         </span>
    //                                     </div>
    //                                 </div>
    //                             )
    //                         })
    //                     }
    //                 </div>
    //             </div>
    //         </div>
    return (
        <div className='section '>
            <div className="flex flex-col items-center border border-[tomato] ">
                <div className="text-3xl text-center font-bold mb-16 border border-[tomato]">
                    Menú
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 mb-16 border border-[green] ">
                    {
                        cart.map((menu) => {
                            const { id, title, image, price, quantity } = menu
                            return (
                                <div
                                    className="p-4 shadow-lg hover:shadow transition-all duration-300 border border-[tomato]"
                                    key={id}
                                >
                                    <div className='flex flex-col items-center border border-[blue]'>
                                        <img src={image} alt="imagenMenu"
                                            // className='h-40 rounded-lg mb-4 bg-cover'
                                            className='bg-cover w-40 h-40 rounded-lg mb-4 border border-[tomato]'
                                        />
                                        <CounterMenu menu={menu} quantity={quantity} />
                                    </div>

                                    <div className='flex items-center justify-center gap-4  mb-4 border border-[green]'>
                                        <div className="md:text-xl text-[1rem] font-semibold">{title}</div>
                                        <span>{(price * quantity).toFixed(2).replace(/\./g, ',')} €</span>
                                    </div>

                                    <div className="flex items-center justify-between">


                                        <span className='flex gap-4'>
                                            {/* <Button
                                                text="Eliminar"
                                                handleClick={() => handleMenuDelete(id)}
                                            /> */}
                                            <button onClick={() => handleMenuDelete(id)}>
                                                <RiDeleteBinLine />
                                            </button>
                                        </span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default MenuElement