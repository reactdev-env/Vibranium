import { useEffect, useState } from "react";
import Card from "./Card";

const Body = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
  const data = await fetch("https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=17.518468&lng=78.3038449&carousel=true&third_party_vendor=1");
  const json = await data.json();

  console.log(json);

  setComments(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
};



  return (
    <div>
      <h2 className="text-2xl font-bold ml-5 mt-4">Restaurants</h2>
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