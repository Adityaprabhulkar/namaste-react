import React from "react";
import ReactDOM from "react-dom/client";


//Creating Food Application Using React

/** 
* Header
* - Logo
* - Nav Items
* - Body
* - Search
* - RestaurantContainer
* - RestaurantCard
* - Footer
* - Copyrights
* - Links
* - Address
* - Contact
*/

const Header = () => {
  return(
    <div className="header">
      <div className="Logo-container">
        <img className="Logo" src="https://thumbs.dreamstime.com/b/tasty-food-sign-logo-icon-design-omelette-character-template-fast-express-cafe-vector-color-emblem-121200628.jpg"></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>

    </div>
  )
};

const Body = () => {
  return (
  <div className="body">
    <div className="search">Search</div>
    <div className="res-container">
      
    </div>
  </div>
  );
};


const AppLayout = () => {
  return ( <div className="app">
    <Header/>
  </div>)
  ;
};





const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);
