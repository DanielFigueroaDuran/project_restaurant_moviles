import { useContext } from "react"
import { RestaurantContext } from "./context/Context";
import { RxArrowLeft } from "react-icons/rx";
import Button from "./Button";
import { Link } from "react-router-dom";
import Success from "./pages/Success";

const MenuTotal = () => {
    const { setCart, total } = useContext(RestaurantContext);

    const subtotal = total * 0.21;
    const vat = 0.21;
    const totalVat = total * vat;

    const handleCancel = () => {
        setCart([]);
    }

    const handleAsk = () => {
        setCart([]);
    }

    return (
        <>
            <Link to="/menuCart">
                <RxArrowLeft className="w-8" />
            </Link>

            <div className="section px-4 ">
                <div className="flex flex-col gap-4 p-6 bg-[#f7f5f3] text-[#000000]">
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
                    <div className="flex justify-center gap-4">
                        <Button
                            handleClick={handleCancel}
                            text="Cancelar"
                            route="/"
                        />
                        <Button
                            handleClick={handleAsk}
                            text="Pedir"
                            route="/Success"
                        />

                    </div>
                </div>
            </div>

        </>
    )
}

export default MenuTotal