import { useEffect, useState } from "react";
import Card from "./Card";

const Body = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
  const data = await fetch(
    "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=12.9352403&lng=77.624532&carousel=true&third_party_vendor=1"
  );
  const json = await data.json();

  const restaurants =
    json.data?.cards.find(
      (c) =>
        c.card?.card?.gridElements?.infoWithStyle?.restaurants !== undefined
    )?.card.card.gridElements.infoWithStyle.restaurants || [];

  setComments(restaurants);
};



  return (
    <div>
      <h2 className="text-2xl font-bold ml-5 mt-4">User Comments</h2>
      <div className="flex flex-wrap">
        {comments.map((res) => (
          <Card key={res.info.id} resData={res.info}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
