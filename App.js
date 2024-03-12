


const parent = React.createElement("div",{id:"parent"},
[[React.createElement("h1",{},"I'm H1 tag"),
React.createElement("h2",{},"I'm H2 tag")],
[React.createElement("h1",{},"I'm H1 tag"),
React.createElement("h2",{},"I'm H2 tag")]]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(parent);
