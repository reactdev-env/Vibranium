import { useEffect, useState } from "react";
import Card from "./Card";

const Body = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/comments");
  const json = await data.json();

  console.log(json);

  setComments(json);
};



  return (
    <div>
      <h2 className="text-2xl font-bold ml-5 mt-4">User Comments</h2>
      <div className="flex flex-wrap">
        {comments.map((data) => (
          <Card key={data.id} resData={data}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;