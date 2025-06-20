import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./Components/Body";

const App=()=>{
    return(
        <div>
        <Body/>
        <h1>I am App</h1>
        </div>
        
    )
};

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)