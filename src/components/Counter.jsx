import { useContext } from "react"
import { RestaurantContext } from "./context/Context";

const Counter = () => {
    const { cardQuantity } = useContext(RestaurantContext);
    //console.log(newMenu)
    return (
        <div>{cardQuantity}</div>
    )
}

export default Counter