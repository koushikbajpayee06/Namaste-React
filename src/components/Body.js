import {  useState , useEffect} from "react";
import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";


const Body = () =>{
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  useEffect(()=>{
    console.log("useEffect called");
    fetchData();
  },[]);

  const fetchData = async () =>{
    const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.56430&lng=88.36930&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
    const json = await data.json();
    console.log(json)

  }

  console.log("Body called");

    // let listOfRestaurants = [
    //     {
    //         "info": {
    //                   "id": "769456",
    //                   "name": "Pizza Hut",
    //                   "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/ef0aff43-dcd4-4dca-9140-0aac4f52fe83_769456.JPG",
    //                   "costForTwo": "₹350 for two",
    //                   "cuisines": [
    //                     "Pizzas"
    //                   ],
    //                   "avgRating": 3.7,
    //                   "sla": {
    //                     "deliveryTime": 40,
    //                   },
    //         },
    //     },
    //     {
    //         "info": {
    //                   "id": "769457",
    //                   "name": "Domminos",
    //                   "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/ef0aff43-dcd4-4dca-9140-0aac4f52fe83_769456.JPG",
    //                   "costForTwo": "₹450 for two",
    //                   "cuisines": [
    //                     "Pizzas"
    //                   ],
    //                   "avgRating": 4.5,
    //                   "sla": {
    //                     "deliveryTime": 24,
    //                   },
    //         },
    //     },

    // ];
    return(
        <div className="body">
            <div className="filter">
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
               { listOfRestaurants.map((restaurant,index) =>(
                    <RestaurantCard key={restaurant.info.id } resData={restaurant}/>
                ))}
            </div>
        </div>
    )
}

export default Body;