
import React from "react";
import './../styles/App.css';
import Tooltip from "./Tooltip";

const App = () => {
  return (
    <div>
       <div>
       <Tooltip text = "This is a tooltip">Hover over me</Tooltip>
       </div><br></br>

       <div>
        <Tooltip text = "This is another tooltip">Hover over me to see another tooltip</Tooltip>
       </div>
    </div>
  )
}

export default App
