import { payements } from "../utils/data";

const Copyright = () => {
    return (
        <div className="flex flex-wrap  sm:justify-center lg:justify-between gap-4  p-4">
            <div className="flex flex-col justify-center items-center gap-2">
                <div>
                    Copyright &#169; <span className='font-bold '></span>Todos los derechos merecidos.
                </div>
                <div className="flex gap-2">
                    {payements?.map((payement, i) => {
                        return (
                            <div key={i}>
                                <img className='w-10' src={payement} alt="image" />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
};

export default Copyright;
