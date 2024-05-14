import { useState } from "react";
function MySlider(props) {
   const [value,setValue]=useState(0);
   const handleChange =(e)=>{
    setValue(e.target.value)
   };
    return (
        <div>
            <span>{props.color}</span>
            <input 
            type="range" 
            width="200" 
            min="0" 
            max="255" 
            value={value} 
            onChange={handleChange}/>
            <span>{value}</span>
        </div>
           
    );
}


export default MySlider;