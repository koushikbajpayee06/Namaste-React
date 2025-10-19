import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShimmerUI from "./Shimmer.js";
import mockdata from "../utils/mockdata"; // assuming mockdata contains multiple restaurant data

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams(); // ✅ dynamic id from URL

  useEffect(() => {
    fetchMenu();
  }, [resId]); // ✅ runs when resId changes

  const fetchMenu = async () => {
    // If you have multiple restaurant data:
    const allRestaurants = mockdata?.restaurants || [mockdata]; 
    const selectedRes = allRestaurants.find(
      (r) => r.data?.cards?.[2]?.card?.card?.info?.id?.toString() === resId
    );

    // If not found, fallback to mockdata
    setResInfo(selectedRes?.data || mockdata.data);
  };

  if (resInfo === null) {
    return <ShimmerUI />;
  }

  // ✅ Safely destructure
  const info = resInfo?.cards?.[2]?.card?.card?.info;
  const itemCards =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[4]?.card?.card?.itemCards ||
    [];

  if (!info) {
    return <h2>Restaurant not found 🚫</h2>;
  }

  return (
    <div className="menu">
      <h1>{info.name}</h1>
      <p>
        {info.cuisines?.join(", ")} - {info.costForTwoMessage}
      </p>
      <h2>Menu</h2>

      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - Rs.{" "}
            {item.card.info.price
              ? item.card.info.price / 100
              : item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
