import React from "react";
import ReactDOM from "react-dom/client";

//import Header from "./Components/Header";
import Body from "./Components/Body";
import Header from "./Components/Header";
import AboutPage from "./Components/AboutPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const App=()=>{
    return(
        <div>
        <Header/>
        <Body/>
        
        
        </div>
       
        
    )
};

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
    },
    {
        path:"/about",
        element:<AboutPage/>,  
    }
]);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)