import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";
import arepa from "../../assets/menu/arepabg.png";
import chef from "../../assets/icons/charan.jpg";
import Button from '../Button';

const Abaut = () => {
    return (
        <div className="section" id='about'>
            <div className="grid md:grid-cols-2 items-center mb-10 gap-10">
                <div className="flex flex-col justify-center items-start gap-6">
                    <div className="sm:text-3xl text-xl font-bold mb-6">
                        <h3>Arepa</h3>
                    </div>
                    <p className='text-sm opacity-70 '>
                        Tortilla de Hrina de Maíz redonda, Crujiente y rellena
                        (Opción: Asada o Frita).
                    </p>

                    {/* -------Components Button------------ */}

                    <Button text="Explora más" symbol={<FaArrowRight className='text-white' />} />

                </div>
                <div className="md:row-start-1">
                    <img src={arepa} alt="arepa" />
                </div>
            </div>
            <div className="grid md:grid-cols-2 gap-10 items-center">
                <div className="">
                    <div className="sm:text-3xl text-xl font-bold mb-6 text-center">
                        Conoce a Nuestro Chef
                    </div>
                    <p className='text-sm opacity-70 text-center'>
                        Nuestro talentoso  chefs experto se esfuerza por
                        ofrecerte una gastronomía innovadora y de alta calidad, utilizando ingredientes frescos y de
                        temporada para crear auténticas obras maestras culinarias
                    </p>
                </div>
                <div>
                    <img className='rounded-xl' src={chef} alt="chef" />
                </div>
            </div>
        </div>
    )
}

export default Abaut