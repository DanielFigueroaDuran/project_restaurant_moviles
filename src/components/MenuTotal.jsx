import { useContext } from "react"
import { RestaurantContext } from "./context/Context";
import Button from "./Button";

const MenuTotal = () => {
    const { cart, setCart, handleMenuDelete } = useContext(RestaurantContext);
    const total = cart.reduce((acc, menu) => acc + menu.price * menu.quantity, 0)
    const subtotal = total * 0.21;
    const vat = 0.21;
    const totalVat = total * vat;

    return (
        <div className="px-4 ">
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
                        text="Cancelar"
                    />
                    <Button text="Pedir" />

                    {/* <button onClick={handleonClick}>
                        <Link
                            to={route}
                            className="py-3 px-6 border-none rounded text-[#fff] bg-[#2a5b45] font-semibold
                         text-sm leading-4"
                        >
                            {label}
                        </Link>
                    </button> */}
                    {/* <Link
                        to='/tienda'
                        className="py-3 px-6 border-none rounded font-semibold text-sm leading-4 
                            text-[#2A5B45]"
                    >
                        {text}
                    </Link> */}
                </div>
            </div>
        </div>
    )
}

export default MenuTotal