import { useEffect, useState } from "react";
import Card from "./Card";
import Shimmer from "./Shimmer";
import SearchBar from "./Searchbar";
import useOnlinestatus from "../utils/useOnlineStatus";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);              // All restaurants from API
  
  const [searchText, setSearchText] = useState([]);    // Filtered list based on search

  useEffect(() => {
    fetchData();
  }, []);
 
  const fetchData = async () => {
    const data = await fetch("https://swiggy-api-4c740.web.app/swiggy-api.json");
    const json = await data.json();

    console.log(json)
 
    const restaurants = json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

    setAllRestaurants(restaurants);
    setSearchText(restaurants); // Initial filtered list is the full list
  };

  

  const handleSearch = (searchText) => {
    const filtered = allRestaurants.filter(res =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setSearchText(filtered); // This updates what is displayed
  };

  const onlineStatus = useOnlinestatus();

  if (onlineStatus === false)
    return(
  <h1>Looks like your network connection interupted</h1>
  );

  return searchText.length === 0 ? (
    <h1 className="text-2xl font-bold ml-5 mt-4"><Shimmer /></h1>
  ) : (
    <div>
      <h2 className="text-2xl font-bold ml-5 mt-4">Restaurants</h2>
      <SearchBar onSearch={handleSearch} />

      <div className="flex flex-wrap">
        {searchText.map((res) => (
          <Card key={res.info.id} resData={res.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
