import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";




const Body = () => {
const [listOfRestaurant, setListOfRestaurant] = useState([]);
const [filteredRestaurant, setFilteredRestaurant] = useState([]);

const [searchText, setSearchText] = useState("");


//Whenever state variable update, react trigger a reconciliation cycle(re-rendering the components)
console.log("Body Rendering");


useEffect(() => {
  fetchData();
}, []);

const fetchData = async () => {
  const data = await fetch("https://foodfire.onrender.com/api/restaurants");
  

  const json = await data.json();

  setListOfRestaurant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
  setFilteredRestaurant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
};

return listOfRestaurant.length === 0 ? (
   <Shimmer/>
  ) : (
  <div className="body">
    <div className="filter">
      <div className="search">
        <input
         type="text"
         className="search-box"
         value={searchText}
         onChange={(e) => {
            setSearchText(e.target.value);
          }}
          />
        <button onClick={() => {
          //filter the restaurant and update UI
          //serachlist
          console.log(searchText);

          const filteredRestaurant = listOfRestaurant.filter((res) =>
          res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );


          setFilteredRestaurant(filteredRestaurant);
        }}
        >
          Search</button>
      </div>
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
        {filteredRestaurant.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
    </div>
  </div>
  );
};

export default Body;