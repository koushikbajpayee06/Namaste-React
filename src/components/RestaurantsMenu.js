import { useEffect, useState } from "react";
import mockdata from '../utils/mockdata'
import ShimmerUI from "./Shimmer.js";

const RestaurantMenu=()=>{
  const [resInfo, setResInfo] =useState(null);
  
  useEffect(()=>{
    fetchMenu();
  },[]);

  const fetchMenu = async ()=>{
    const mockData = mockdata.data;
    console.log(mockData)
    setResInfo(mockData);
  };
    
  if (resInfo === null) {
    return <ShimmerUI />;
  }
  const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
  const itemCards = 
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card?.itemCards;
  console.log(itemCards);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>{cuisines.join(',')} - {costForTwoMessage}</p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item,id)=>(<li key={id}>{item.card.info.name} - Rs.{item.card.info.price/100}</li>))}

      </ul>
    </div>
  );
};
export default RestaurantMenu;