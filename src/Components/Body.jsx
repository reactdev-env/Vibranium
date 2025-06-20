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
    console.log(json)
    setComments(json); // set fetched data
  };

  return (
    <div>
      <h2 className="text-2xl font-bold ml-5 mt-4">User Comments</h2>
      <div className="flex flex-wrap">
        {comments.slice(0, 499).map((comment) => (
          <Card
            key={comment.id}
            name={comment.name}
            email={comment.email}
            body={comment.body}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
