import React, { useState } from "react";

function Two(){
    const[count,setCount] = useState(0);
    return(
        <div>
            <button onClick={()=>{if(count<20){setCount(count+1)}}}>+</button>
            <span>{count}</span>
            <button onClick={()=>{if(count>0){setCount(count-1)}}} >-</button>
        </div>
    )
}

export default Two