import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./Components/Body";
//import Header from "./Components/Header";
//import Card from "./Components/Card";

const App=()=>{
    return(
        <div>
        <Body/>
        
        </div>
       
        
    )
};

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)