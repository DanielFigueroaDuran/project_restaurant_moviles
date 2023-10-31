import pabellon from "../../assets/menu/pabellonCriollo.png";
import { FaArrowRight } from "react-icons/fa";
import { heroIcons } from "../../utils/data";
import Button from '../Button';

const Home = () => {

    return (
        <div className='section flex items-center xl:justify-center justify-center flex-wrap  mt-10 gap-7'>
            <div className='flex flex-col items-start gap-10 '>
                <div className='flex flex-col items-center w-40'>
                    <h2 className='sm:text-[2.5rem] text-[2.5rem] font-bold'>Exquisito </h2>
                    <p className='text-sm text-center'>te transportará a un mundo de
                        sabores y sensaciones.
                    </p>
                </div>

                {/* -------Components Button------------ */}

                <Button text="Ver Menú" symbol={<FaArrowRight />} />

                <div className='flex md:gap-6 gap-2'>
                    {heroIcons.map((icon, index) => {
                        return (
                            <div
                                className='flex items-center justify-center 
              bg-black w-12 h-12 text-white md:text-3xl text-xl rounded-md '
                                key={index}
                            >
                                {icon}
                            </div>
                        )
                    })
                    }
                </div>
            </div>
            <div className='min-w[200px] md:w-[600px]'>
                <img src={pabellon} alt="pabellon" />
            </div>
        </div>
    )
}

export default Home