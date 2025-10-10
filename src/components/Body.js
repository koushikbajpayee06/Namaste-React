import {  useState , useEffect} from "react";
import RestaurantCard from "./RestaurantCard";
import ShimmerUI from "./Shimmer";


const Body = () =>{
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants,setFilterRestaurents] = useState([]);
  const [searchText, setSearchText] = useState("");
  console.log("Body rendered");
 

  useEffect(()=>{
    console.log("useEffect called");
    fetchData();
  },[]);

const fetchData = async () => {
  const data = await fetch(
    'https://corsproxy.io/https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.56430&lng=88.36930&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
  );
  const json = await data.json();
  // console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

  const restaurantList =
    json?.data?.cards?.find(
      (card) => card.card?.card?.id === "restaurant_grid_listing_v2"
    )?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

  console.log("🍽️ Restaurant List:", restaurantList);

  setListOfRestaurants(restaurantList);
  setFilterRestaurents(restaurantList);
  // setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
};


    return listOfRestaurants.length ===0 ? (<ShimmerUI/>): (
        <div className="body">
            <div className="filter">
              <div className="search">
                <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                  setSearchText(e.target.value);
                }}/>
                <button onClick={()=>{
                  //Filter the resaurent cards and ipdate the UI
                  //search text
                  // console.log(searchText);
                  const filteredRestaurant = listOfRestaurants.filter(
                    (res)=>res.info.name.includes(searchText));
                  setFilterRestaurents(filteredRestaurant);
                }}>search</button>
              </div>
                <button className="filter-btn"
                 onClick={()=>{
                    //Filter Logic Here
                    const filteredList = listOfRestaurants.filter(
                      (x)=>x.info.avgRating>4
                    );
                    setListOfRestaurants(filteredList);
                 }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
               { filteredRestaurants.map((restaurant,index) =>(
                    <RestaurantCard key={restaurant.info.id } resData={restaurant}/>
                ))}
            </div>
        </div>
    )
}

export default Body;