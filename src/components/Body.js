import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () =>{
    let listOfRestaurants = [
        {
            "info": {
                      "id": "769456",
                      "name": "Pizza Hut",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/ef0aff43-dcd4-4dca-9140-0aac4f52fe83_769456.JPG",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Pizzas"
                      ],
                      "avgRating": 3.7,
                      "sla": {
                        "deliveryTime": 40,
                      },
            },
        },
        {
            "info": {
                      "id": "769457",
                      "name": "Domminos",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/ef0aff43-dcd4-4dca-9140-0aac4f52fe83_769456.JPG",
                      "costForTwo": "₹450 for two",
                      "cuisines": [
                        "Pizzas"
                      ],
                      "avgRating": 4.5,
                      "sla": {
                        "deliveryTime": 24,
                      },
            },
        },

    ];
    return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn"
                 onClick={()=>{
                    //Filter Logic Here
                    listOfRestaurants = listOfRestaurants.filter((x)=>x.info.avgRating>4);
                    console.log(listOfRestaurants)
                 }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
               { listOfRestaurants.map((restaurant) =>(
                    <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                ))}
            </div>
        </div>
    )
}

export default Body;