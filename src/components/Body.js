import RestaurantCard, {discountSection} from "./RestaurantCard";
import resObj from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    console.log(listOfRestaurant);

    const [searchText, setSearchText] = useState("");

    const RestaurantCardDiscound = discountSection(RestaurantCard);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.677067306891495&lng=77.29431621730328&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    };

    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false) return (
        <h1>Looks like you're offline!! Please check your network connection.......</h1>
    ) 
        

    return listOfRestaurant.length === 0 ? <Shimmer/> : (
        <div>
            <div className="flex items-center m-6">
                <div>
                    <input type="text" className="m-3 placeholder:text-gray-500 border-2 rounded" value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
                    <button className="w-14 rounded hover:bg-[#F6F0D7] cursor-pointer" onClick={() => {
                        const filteredRestaurant = listOfRestaurant.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                        setFilteredRestaurant(filteredRestaurant);
                    }}>
                        Search
                    </button>
                </div>
                <button className="mx-8 rounded w-[200] h-8 cursor-pointer hover:bg-[#F6F0D7]" onClick={() => {
                    const filteredList = listOfRestaurant.filter((res) => res.info.avgRating > 4);
                    setListOfRestaurant(filteredList)}}
                >
                    Top Rated Restaurant
                </button>
            </div>
            <div className="flex flex-wrap">
                {filteredRestaurant.map((restaurant) => (
                    <Link key={restaurant.info.id} to={"/restaurant/" + restaurant.info.id} style={{ textDecoration: "none", color: "inherit" }}>
                    {restaurant.info?.aggregatedDiscountInfoV3 ? (
                        <RestaurantCardDiscound resData={restaurant} />
                    ) : (
                        <RestaurantCard resData={restaurant} />
                    )}
                    </Link>
                ))}
            </div>
        </div>
        
    );
};

export default Body;