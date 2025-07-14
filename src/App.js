import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

//import Header from "./Components/Header";
import Body from "./Components/Body";
import Header from "./Components/Header";
//import AboutPage from "./Components/AboutPage";
//import ContactUs from "./Components/ContactUs";
import Error from "./Components/Error";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
//import RestaurantMenu from "./Components/RestaurantMenu";
import React, { lazy, Suspense } from "react";
import UserContext from "./utils/UserContext";

//import Grocery from "./Components/Grocery";


const Grocery = lazy(() => import("./Components/Grocery"));
const AboutPage = lazy(() => import("./Components/AboutPage"));
const ContactUs = lazy(() => import("./Components/ContactUs"));
const RestaurantMenu = lazy(() => import("./Components/RestaurantMenu"));

const App=()=>{
    const[userName, setUserName] = useState();

    useEffect(()=>{
        const data = {
            name:"Pavan Sai",
        }
        setUserName(data.name);
    },[])
    return(
        <UserContext.Provider value={{loggedInUser: userName}}>
        <div className="app">
        <Header/>
        <Outlet/>
         </div>
        </UserContext.Provider>
       
        
    )
};

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
        
        {
        path:"/",
        element:<Body/>,  
        
        },
        
        {
        path:"/about",
        element:<Suspense fallback={<div>About page is loading</div>}><AboutPage/></Suspense>,  
        },
        
        {
        path:"/ContactUs",
        element:<Suspense fallback={<div>ContactUs is loading.......</div>}><ContactUs/></Suspense>,  
        },
        {
        path:"/res/:resId",
        element:<Suspense fallback={<div> is loading</div>}><RestaurantMenu/></Suspense>,  
        },
        {
        path:"/grocery",
        element:<Suspense fallback={<div>Your Grocery Component is Loading.....</div>}><Grocery/></Suspense>,  
        },
        ],
        errorElement:<Error/>
    },
    
]);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)