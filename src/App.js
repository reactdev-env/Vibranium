import React from "react";
import ReactDOM from "react-dom/client";

//import Header from "./Components/Header";
import Body from "./Components/Body";

const App=()=>{
    return(
        <div>
        
        <Body/>
        
        </div>
       
        
    )
};

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)