// console.log("Apollo Level 2");
// console.log("React =>", React);
// console.log("ReactDOM =>", ReactDOM);

const App = React.createElement(
  "h1",
  { style: { color: "red" } },
  "Hello world"
);

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);

root.render(App);
