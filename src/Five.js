import React, { useState } from 'react'

function Five() {
    const [isToggled,setIsToggles] = useState(false)

    const handleToggle = () =>{
        setIsToggles(!isToggled);
    }
  return (
    <div>
    <label>
        <input type="checkbox" onChange={handleToggle}/>
        <p>{isToggled ? "On" : "Off"}</p>
    </label>
    </div>
  )
}

export default Five