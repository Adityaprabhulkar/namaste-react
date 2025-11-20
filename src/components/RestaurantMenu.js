import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch("https://foodfire.onrender.com/api/restaurants");
        
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
    };

    // if (resInfo === null) retrun <Shimmer />;

    const{ name , cuisines, costForTwoMessage } =

    resInfo

    return(
        <div className="menu">
            <h1>Name of the Restaurant</h1>
            <h2>Menu</h2>
            <ul>
                <li>Biryani</li>
                <li>Burgers</li>
                <li>Diet Coke</li>
            </ul>
        </div>
    );
};

export default RestaurantMenu;