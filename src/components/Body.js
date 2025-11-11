import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";




const Body = () => {
const [listOfRestaurant, setListOfRestaurant] = useState([])

useEffect(() => {
  fetchData();
}, []);

const fetchData = async () => {
  const data = await fetch("https://foodfire.onrender.com/api/restaurants");

  const json = await data.json();

  console.log(json);
  setListOfRestaurant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
};

return listOfRestaurant.length === 0 ? <Shimmer/> : (
  <div className="body">
    <div className="filter">
      <button className="filter-btn"
       onClick={() => {
        const filteredList = listOfRestaurant.filter(
          (res) => res.info.avgRating > 4
        );
        setListOfRestaurant(filteredList);
      }}

      >
        Top Rated Restaurants</button>
    </div>
    <div className="res-container">
        {listOfRestaurant.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
    </div>
  </div>
  );
};

export default Body;