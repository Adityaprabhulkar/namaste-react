import React from "react";
import ReactDOM from "react-dom/client";


// React Element => Object => HTMLElement(render)

const elem = <span>Hello Jee</span>



// React Function Component

// Component Composition

const Title = ()=> (
  <h1 className="head" tabIndex="5">
     
    Namaste React using JSX🚀
  </h1>
  );

const HeadingComponent = () => (
  <div id="container">
    {Title()}
    <Title/>
    <Title></Title>
    <h1 className="heading">Namaste React Function Component🚀</h1>
  </div>
);



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);
