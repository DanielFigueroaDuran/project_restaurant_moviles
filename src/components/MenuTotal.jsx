import { useContext, useState, useEffect } from "react"
import { RestaurantContext } from "./context/Context";
import { RxArrowLeft } from "react-icons/rx";
import Button from "./Button";
import { Link } from "react-router-dom";
//import Success from "./pages/Success";

const MenuTotal = () => {
    const { setCart, total, setFilter } = useContext(RestaurantContext);
    const [isShowModal, setIsShowModal] = useState(false);
    const [isUserResponse, setIsUserResponse] = useState(false)

    const subtotal = total * 0.21;
    const vat = 0.21;
    const totalVat = total * vat;

    const handleAsk = () => {
        setCart([]);
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Link to="/menuCart">
                <RxArrowLeft className="w-8 h-6" />
            </Link>

            {/* Modal Cancelar */}

            {isShowModal
                ?
                <div className="flex flex-col gap-1 items-center">
                    <p>¿Desea cancelar el pedido?</p>
                    <div className="flex gap-6">
                        <button
                            className="w-10 bg-black text-white p-2 rounded-md"
                            onClick={() => { setCart([]); setFilter("menu") }}
                        >
                            <Link to="/" >Sí</Link>
                        </button>

                        <button
                            className="w-10 bg-black text-white p-2 rounded-md"
                            onClick={() => { setIsUserResponse(true); setIsShowModal(false) }}
                        >
                            No
                        </button>
                    </div>
                </div>

                : <div className="section px-4 flex flex-col gap-10">
                    <div className="flex flex-col gap-4 p-6 text-black  shadow-black shadow-lg hover:shadow transition-all duration-300 border border-black border-opacity-40 rounded-lg">

                        <h3 className="font-semibold text-lg leading-6 ">Total a Pagar</h3>
                        <div className="w-full border border-[#e3ded7]"></div>
                        <div className="flex justify-between">
                            <div>
                                <p className='font-normal text-sm leading-4'>SUBTOTAL</p>
                            </div>
                            <div className="font-semibold text-sm leading-4 text-[#000000] ">
                                {(total - subtotal).toFixed(2).toString().replace(/\./g, ',')} €
                            </div>
                        </div>
                        <div className="w-full border border-[#e3ded7]"></div>
                        <div className="flex justify-between">
                            <div>
                                <p className='font-normal text-sm leading-4'>IVA</p>
                            </div>
                            <div className="smal">
                                <small className="text-[#515051] font-normal text-xs leading-4 ">
                                    {totalVat.toFixed(2).replace(/\./g, ',')} €
                                </small>
                            </div>
                        </div>

                        <div className="w-full border border-[#e3ded7]"></div>
                        <div className="flex justify-between">
                            <div className="">
                                <p className="font-semibold text-sm leading-4 ">TOTAL</p>
                            </div>
                            <div>
                                <div className="flex flex-col text-right gap-2 ">
                                    <p className='font-semibold text-sm leading-4'>
                                        {total.toFixed(2).toString().replace(/\./g, ',')} €
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* <!-----------------boton total---------- --> */}
                        <div className="flex justify-center">

                            <Button
                                handleClick={handleAsk}
                                text="Pedir"
                                route="/Success"
                            />
                        </div>
                    </div>

                    <div className="flex justify-center">
                        {/* <Button
                            handleClick={handleCancel}
                            text="Cancelar"
                         route="/"
                        /> */}
                        <button
                            className="rounded-md bg-black p-3  flex items-center justify-center
                 text-white text-[1rem] hover:bg-[#515051] font-semibold"
                            onClick={() => setIsShowModal(true)}
                        >
                            Cancelar
                        </button>
                    </div>

                </div>
            }
            {/* 
            {isUserResponse
                ?

                <div className="section px-4 flex flex-col gap-10">
                    <div className="flex flex-col gap-4 p-6 text-black  shadow-black shadow-lg hover:shadow transition-all duration-300 border border-black border-opacity-40 rounded-lg">

                        <h3 className="font-semibold text-lg leading-6 ">Total a Pagar</h3>
                        <div className="w-full border border-[#e3ded7]"></div>
                        <div className="flex justify-between">
                            <div>
                                <p className='font-normal text-sm leading-4'>SUBTOTAL</p>
                            </div>
                            <div className="font-semibold text-sm leading-4 text-[#000000] ">
                                {(total - subtotal).toFixed(2).toString().replace(/\./g, ',')} €
                            </div>
                        </div>
                        <div className="w-full border border-[#e3ded7]"></div>
                        <div className="flex justify-between">
                            <div>
                                <p className='font-normal text-sm leading-4'>IVA</p>
                            </div>
                            <div className="smal">
                                <small className="text-[#515051] font-normal text-xs leading-4 ">
                                    {totalVat.toFixed(2).replace(/\./g, ',')} €
                                </small>
                            </div>
                        </div>

                        <div className="w-full border border-[#e3ded7]"></div>
                        <div className="flex justify-between">
                            <div className="">
                                <p className="font-semibold text-sm leading-4 ">TOTAL</p>
                            </div>
                            <div>
                                <div className="flex flex-col text-right gap-2 ">
                                    <p className='font-semibold text-sm leading-4'>
                                        {total.toFixed(2).toString().replace(/\./g, ',')} €
                                    </p>
                                </div>
                            </div>
                        </div>
                       
                        <div className="flex justify-center">

                            <Button
                                handleClick={handleAsk}
                                text="Pedir"
                                route="/Success"
                            />
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <button
                            className="rounded-md bg-black p-3  flex items-center justify-center
                 text-white text-[1rem] hover:bg-[#515051] font-semibold"
                            onClick={() => setIsShowModal(true)}
                        >
                            Cancelar
                        </button>
                    </div>
                </div>
                : ''
            } */}
        </>
    )
}

export default MenuTotal