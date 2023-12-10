// ?   Single element creation
//    const ele = React.createElement("h1",{id:"heading"},"hello world from react");
//    const root = ReactDOM.createRoot(document.getElementById("root"));
//    root.render(ele);

// ?____________________________________________________________________

// *  Nested Element creation

{
  /* this is example of nested element creation  
<div id="parent">
            <div id="child">
                <h1>I am H1 tag</h1>
            </div>
        </div> */
}
// Above code can be written in react as given below

//* const parent = React.createElement(
// *  "div",
//*   { id: "parent" },
// *  React.createElement(
//*     "div",
// *    { id: "child" },
//*     React.createElement("h1", {}, "I am H1 element")
//*   )
//* );
//* const root = ReactDOM.createRoot(document.getElementById("root"));
//* root.render(parent);

// *_____________________________________________________________________

// ?Nested elements with sibling
{
  /* this is example of nested element with sibling  creation  
<div id="parent">
            <div id="child">
                <h1>I am H1 tag</h1>
                <h2>I am H2 Tag </h2>
            </div>
        </div> */
}
// Above code can be written in react as given below

//? const parent = React.createElement(
//?   "div",
//?   { id: "parent" },
//?   React.createElement("div", { id: "child" }, [
//?     React.createElement("h1", {}, "I am H1 element"),
//?     React.createElement("h2", {}, "I am H2 element"),
// ?  ])
//? );

//?  const root = ReactDOM.createRoot(document.getElementById("root"));
// ? root.render(parent);
//? ______________________________________

//  More complex Nested
{
  /*<div id="parent">
 <div id="child1">
     <h1>I am H1 tag</h1>
     <h2>I am H2 Tag </h2>
 </div>
 <div id="child2">
    <h1>I am H1 tag</h1>
    <h2>I am H2 Tag </h2>
    </div>
</div> 
 */
}
// Above code can be written in react as given below

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am H1 element"),
    React.createElement("h2", {}, "I am H2 element"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am H1 element"),
    React.createElement("h2", {}, "I am H2 element"),
  ]),
]);

// const root = ReactDOM.createRoot(document.getElementById("root"));
const root = ReactDOM.createRoot(document.getElementById("header"));
root.render(parent);
