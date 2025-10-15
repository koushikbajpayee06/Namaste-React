import { useEffect, useState } from "react";

const RestaurantMenu = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/restaurants")
      .then((res) => res.json())
      .then((data) => {
        const list = data?.data?.cards || [];
        setRestaurants(list);
      });
  }, []);

  const fetchMenu = async (id) => {
    const res = await fetch(`http://localhost:5000/menu/${id}`);
    const json = await res.json();
    console.log(json);
    setMenu(json?.data?.cards || []);
  };

  return (
    <div>
      <h1>Restaurants</h1>
      <ul>
        {restaurants.map((r, index) => (
          <li key={index} onClick={() => fetchMenu(r.data.id)}>
            {r.data.name}
          </li>
        ))}
      </ul>

      <h2>Menu</h2>
      <ul>
        {menu.map((item, index) => (
          <li key={index}>{item?.card?.info?.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
