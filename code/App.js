const heading1 = React.createElement("h1",{key:"1", id:"heading1"},"Namaste React");
const heading2 = React.createElement("h2",{key:"2", id:"heading2"},"Namaste React");
const content = React.createElement("div",{id:"content"},[heading1,heading2]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(content);