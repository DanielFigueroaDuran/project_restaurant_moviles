import React from 'react'
import {
    footerSocials,
    footerContacts,
    mainMenu,
    explores
} from "../../utils/data";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="section">
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-10 mb-8 ">
                <div>
                    <div className="text-xl font-semibold mb-3">Zona Alimentaria</div>
                    <p className='text-justify mb-4'>
                        Si desees disfrutar de una cena
                        romántica, celebrar una ocasión especial o simplemente deleitarte con una comida deliciosa, nuestro
                        restaurante es el lugar perfecto para satisfacer tus deseos gastronómicos. ¡Ven y déjanos consentirte
                        con nuestra atención impecable
                    </p>
                    <div className="flex items-center gap-4">
                        <span>Síganos</span>
                        <div className="h-[2px] w-12 bg-black"></div>
                        {footerSocials.map((footerSocial, i) => {
                            return (
                                <div key={i}>
                                    <a href="#">{footerSocial}</a>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="grid grid-cols-2">
                    <div>
                        <h3 className='font-semibold text-[1.1rem] mb-4'>Menú principal</h3>
                        {mainMenu.map((menu, i) => {
                            return (
                                <div className="mb-2" key={i}>
                                    <a href={`# ${menu.href}`}>{menu.text}</a>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div>
                    <h3 className='font-semibold text-[1.1rem] mb-4'>Contacto</h3>
                    {footerContacts?.map((footerContact, i) => {
                        return (
                            <div className="flex items-center gap-4 mb-4" key={footerContact.id}>
                                <div className="text-xl">
                                    {footerContact.icon}
                                </div>
                                <div>{footerContact.text}</div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default Footer