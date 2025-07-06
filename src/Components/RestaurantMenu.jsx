//import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

  //const [resInfo, setResInfo] = useState(null);

  const {resId} = useParams();

  const resInfo = useRestaurantMenu(resId);

 /* useEffect(() => {
    fetchMenu();
  }, []); */

  /* const fetchMenu = async () => {
     const data = await fetch("https://swiggy-api-4c740.web.app/swiggy-api.json");
     const json = await data.json();
     setResInfo(json.data);
     console.log(json);
  }; */

  if (resInfo === null) return <Shimmer />;

  const restaurant = resInfo?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.[4]?.info;

  const { name, cuisines, costForTwoMessage, avgRating, areaName, locality, Veg } = restaurant || {};

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h1 className="text-3xl font-bold mb-2 text-gray-800">{name}</h1>

      <div className="text-gray-600 mb-4 space-y-1">
        <p><span className="font-semibold">Cuisines:</span> {cuisines?.join(", ")}</p>
        <p><span className="font-semibold">Cost:</span> {costForTwoMessage}</p>
        <p><span className="font-semibold">Rating:</span> ⭐ {avgRating}</p>
        <p><span className="font-semibold">Area:</span> {areaName}</p>
        <p><span className="font-semibold">Locality:</span> {locality}</p>
        <p><span className="font-semibold">Veg:</span>{Veg}</p>
      </div>

      <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-700">Menu</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-1">
        <li>Biryani</li>
        <li>Burgers</li>
        <li>French Fries</li>
        <li>Coke</li>
        <li>Samosa</li>
        <li>Cheese Pizza</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
