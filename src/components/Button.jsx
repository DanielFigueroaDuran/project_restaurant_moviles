import { Link } from 'react-router-dom'

const Button = ({ text, symbol, handleClick, style }) => {
    return (
        <button
            className={`rounded-md bg-black p-3 flex items-center justify-center 
            gap-4 text-white text-[0.85rem] hover:bg-[#515051]  ${style}`}
            onClick={handleClick}
        >
            <Link to="#">{text}</Link>
            {symbol}
        </button>
    )
}

export default Button