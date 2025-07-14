import react from "react";
import { CDN_URL } from "../utils/Constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Card = (props) => {

  const{resData}=props;

  const{name, areaName,avgRating,cuisines,cloudinaryImageId,sla}=resData;
  const {loggedInUser} = useContext(UserContext);
  

  return (
    <div className="res-card h-100 w-75 bg-gray-300 border-1 mt-5 ml-5 hover:border-2 cursor-pointer gap-1.5 overflow-hidden text-wrap p-4 rounded-md">
      
      <img src={CDN_URL + cloudinaryImageId}
        className="h-40 rounded-2xl p-1 w-full object-cover"
alt="restaurant"
      />
      
      <h1 className="text-xl font-bold">{name}</h1>
      <h2 className="text-sm text-gray-700">Area name : {areaName}</h2>
      <h2 className="text-sm text-gray-700">Cuisines : {cuisines.join(",")}</h2>
      <h2 className="text-sm text-gray-700">Delivery Time: {sla.deliveryTime} mins</h2>
      <p className="mt-2">Rating : {avgRating} Stars</p>
      <p className="mt-2">User : {loggedInUser} </p>
      
    </div>
  );
};

//Higher Order Component 




//input - rescard => rescardPromoted

export const promotedLabel = (Card) =>{
  return (props) => {
    return(
      <div>
        <label>Promoted</label>
        <Card {...props}/>
      </div>
    )
  }
}

export default Card;