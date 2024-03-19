import React from "react";
function ListRendering() {
  const fruits = ["apple", "orange", "grapes"];
  return (
    <div>
      <ul>
        {fruits.map((fruit, index) => {
          return <li key={index}>{fruit}</li>;
        })}
      </ul>
    </div>
  );
}
export default ListRendering;
