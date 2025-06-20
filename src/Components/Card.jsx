const Card = (props) => {

  const{resData}=props;

  const{name, areaName,avgRating}=resData;

  return (
    <div className="res-card h-100 w-75 bg-gray-300 border-1 mt-5 ml-5 hover:border-2 cursor-pointer gap-1.5 overflow-hidden text-wrap p-4 rounded-md">
      <h1 className="text-xl font-bold">{name}</h1>
      <h2 className="text-sm text-gray-700">{areaName}</h2>
      <p className="mt-2">{avgRating}</p>
    </div>
  );
};

export default Card;
