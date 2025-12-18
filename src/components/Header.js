import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [btnName, setBtnName] = useState("Login")
    const onlineStatus = useOnlineStatus();

    return (
        <div className="bg-[#F6F0D7] flex h-24 justify-between items-center">
            <img className="w-24 h-24" src={LOGO_URL}/>
                <ul className="flex">
                    <li className="px-4">
                        Online Status : {onlineStatus ? (<span className="inline-block w-5 h-5 rounded-full bg-green-500"></span>) : (<span className="inline-block w-5 h-5 rounded-full bg-red-500"></span>)}
                    </li>
                    <li className="px-4 hover:underline"><Link to="/">Home</Link></li>
                    <li className="px-4 hover:underline"><Link to="/about">About Us</Link></li>
                    <li className="px-4 hover:underline"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4 hover:underline"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4 hover:underline"><Link to="/cart">Cart</Link></li>
                    <button className={`px-4 font-medium ${
                        btnName === "Login" ? "text-green-500" : "text-red-500"
                    }`}
                    onClick={() => {
                        btnName === "Login"
                        ? setBtnName("Logout")
                        : setBtnName("Login");
                    }}
                    >
                        {btnName}
                    </button>
                </ul>
        </div>
    );
};

export default Header;