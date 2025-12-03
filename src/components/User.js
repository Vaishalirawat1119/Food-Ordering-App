import { useState } from "react";

const User = ({name}) => {
    const [first, setFirst] = useState(0);
    const [second] = useState(1);
    return (
        <div className="user-card">
            <h1><u>It is a functional component</u></h1>
            <h1>Count = {first}</h1>
            <button onClick={() => setFirst(first + 1)}>Click Me</button>
            {/* <h1>Count = {second}</h1> */}
            <h2>Name : {name}</h2>
            <h3>Location : Delhi</h3>
            <h4>Email : rawatvaishali254@gmail.com</h4>
        </div>
    );
};
export default User;