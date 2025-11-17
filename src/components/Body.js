import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.59486030415836&lng=77.24561601877213&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    return listOfRestaurant.length === 0 ? <Shimmer/> : (
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