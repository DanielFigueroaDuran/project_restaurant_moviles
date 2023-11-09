import { Link } from "react-router-dom"


const Button = ({ text, handleClick, style, label, route }) => {
    return (
        <button
            className={`rounded-md bg-black p-3 pl-7 flex items-center justify-center
             text-white text-[1rem] hover:bg-[#515051] font-semibold  ${style}`}
            onClick={handleClick}
        // className={`flex p-4 bg-black text-white pl-9
        //    ${style}`}
        // onClick={handleClick}
        >
            <div className='flex gap-4'>
                <Link to={route}>
                    {text}
                </Link>
                <div>
                    {label}
                </div>
            </div>
        </button >
    )
}

export default Button