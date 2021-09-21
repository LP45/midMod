import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const App = () => {
  const defaultList = [
    { name: "ItemOne" },
    { name: "ItemTwo" },
    { name: "ItemThree" }
  ];

  const [list, updateList] = useState(defaultList);

  const handleRemoveItem = (e) => {
   const name = e.target.getAttribute("name")
    updateList(list.filter(item => item.name !== name));
  };

  return (
    <div>
      {list.map(item => {
        return (
          <>
            <span name={item.name} onClick={handleRemoveItem}>
              x
            </span>
            <span>{item.name}</span>
          </>
        );
      })}
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);