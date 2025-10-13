import { useEffect } from "react";

const RestaurantMenu = () => {
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const data = await fetch(
        "https://corsproxy.io/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.56430&lng=88.36930&restaurantId=985567&catalog_qa=undefined&submitAction=ENTER"
      );

      // ✅ Check if response is ok (status 200)
      if (!data.ok) {
        throw new Error(`HTTP error! Status: ${data.status}`);
      }

      // ✅ Check content length before parsing
      const text = await data.text();
      if (!text) {
        throw new Error("Empty response from API");
      }

      const json = JSON.parse(text);
      console.log(json);
    } catch (err) {
      console.error("❌ Fetch failed:", err.message);
    }
  };

  return (
    <div className="menu">
      <h1>Name of the Restaurant</h1>
      <h2>Menu</h2>
      <ul>
        <li>Biryani</li>
        <li>Burgers</li>
        <li>Diet Coke</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
