import { React, useState } from 'react'
import { mainMenu } from "../../utils/data";
import { Link } from 'react-router-dom';
import { LuMenuSquare } from "react-icons/lu";

const NavIcon = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <>
            <div
                className={`${toggle ? 'scale-1' : 'scale-0'} fixed w-full flex justify-center z-20 bottom-8 
      transition-all duration-300`}
            >
                <div className='flex sm:gap-8 gap-6 bg-black rounded-xl p-4'>
                    {mainMenu.map((main) => {
                        return (
                            <div
                                className="p-2 rounded-full bg-glass"
                                key={main.id}
                                onClick={() => { setToggle(false) }}
                            >
                                <a href={`#${main.href}`} className='text-white'>{main.icon}</a>
                            </div>
                        )
                    })}
                </div>

            </div>
            <div
                className="fixed right-0 top-[20%] z-20 cursor-pointer"
                onClick={() => {
                    setToggle(!toggle);
                }}
            >
                <LuMenuSquare className='text-3xl text-black' />
            </div>
        </>

    )
}

export default NavIcon