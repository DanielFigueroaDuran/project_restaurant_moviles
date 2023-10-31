import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button'

const Contact = () => {
    return (
        <div className=" section" id='contact'>
            <div className="flex justify-between items-end gap-4 flex-wrap border-solid border-black border-b pb-8 ">
                <div className="">
                    <div className="uppercase">Hablemos</div>
                    <div className="text-3xl font-bold">Quiero reservar una mesa?</div>
                </div>
                <Button
                    text="Contacto"
                />
                {/* <div className='rounded-tr-[1rem] rounded-b-[1rem] bg-black text-white p-4 text-[0.85rem]'>
                    <Link to="#">Contact</Link>
                </div> */}
            </div>
        </div>
    )
}

export default Contact