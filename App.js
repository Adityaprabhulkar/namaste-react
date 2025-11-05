
// <div id="parent">
//     <div id="child">
//         <h1>I am h1 Tag</h1>
//         <h2>I'am h2 tag</h2>
//     </div>
// </div>
// <div id="parent2">
//     <div id="child">
//         <h1>I am h1 Tag</h1>
//         <h2>I'am h2 tag</h2>
//     </div>
// </div>

const parent = React.createElement("div", {id: "parent" },
    [        React.createElement("div", {id: "child" }, [
                React.createElement("h1",{}, "I'am h1 tag" ),
                React.createElement("h2",{}, "I'am h2 tag" )]
    ),       React.createElement("div", {id: "child2" }, [
                React.createElement("h1",{}, "I'am h1 tag" ),
                React.createElement("h2",{}, "I'am h2 tag" )]
    )]

 );

 //JSX


console.log(parent);  //object


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);