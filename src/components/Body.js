import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
import { useState } from "react";

const Body = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState(resObj);

    return (
        <div className="body">
            <div className="filter" onClick={() => {
                const filteredList = listOfRestaurant.filter((res) => res.info.avgRating > 4);
                setListOfRestaurant(filteredList);
            }
            }>
                <button>Top Rated Restaurant</button>
            </div>
            <div className="restaurant-container">
                {listOfRestaurant.map((restaurant) => (
                    <RestaurantCard 
                        key={restaurant.info.id}
                        resData={restaurant}
                    />
                ))}
            </div>
        </div>
        
    );
};

export default Body;