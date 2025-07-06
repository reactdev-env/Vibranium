import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) =>{

    const[resInfo, setResInfo] = useState(null);
    
useEffect(()=>{
 fetchData();
},[]);


  const fetchData = async () =>{
    const data = await fetch("https://swiggy-api-4c740.web.app/swiggy-api.json")
    const json = await data.json()
    setResInfo(json.data);
  }

    
    return resInfo;
}

export default useRestaurantMenu;