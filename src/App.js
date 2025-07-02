import React from "react";
import ReactDOM from "react-dom/client";

//import Header from "./Components/Header";
import Body from "./Components/Body";
import Header from "./Components/Header";
import AboutPage from "./Components/AboutPage";
import ContactUs from "./Components/ContactUs";
import Error from "./Components/Error";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";


const App=()=>{
    return(
        <div>
        <Header/>
        <Outlet/>
        
        
        </div>
       
        
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
        element:<AboutPage/>,  
        },
        
        {
        path:"/ContactUs",
        element:<ContactUs/>,  
        },
        ],
        errorElement:<Error/>
    },
    
]);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)