import {LOGO_URL} from "../utils/constants";
import { useState } from "react";

const Header = () => {

const [btnNameReact, setBtnNameReact] = useState("Login")

  return(
    <div className="header">
      <div className="Logo-container">
        <img className="Logo" src={LOGO_URL}/>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
           <button 
           className="login"
           onClick={() => {
            setBtnNameReact("Logout")
           }}
            >
              {btnNameReact}
            </button>
        </ul>
      </div>
    </div>
  )
};


export default Header;