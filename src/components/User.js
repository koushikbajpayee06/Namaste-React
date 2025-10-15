import { useState } from "react";

useState
const User = ({name,location})=>{
    const [count] = useState(0);
    const [count2] = useState(1);
    return (
        <div className="user-card">
            <h1>Count:{count}</h1>
            <h1>Count2:{count2}</h1>
            <h2>{name}</h2>
            <h3>{location}</h3>
            <h3>Contact:@koushik6</h3>
        </div>
    )
}

export default User;