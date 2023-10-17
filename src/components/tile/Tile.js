import React from "react";

export const Tile = (props) => {

  console.log('This is the Tile component');
  console.log('props.name:', props.name);
  console.log('props.description:', props.description);

  return (
    <div className="tile-container">
      <p className="tile-title">{props.name}</p>
      {Object.values(props.description).map((item, index) => {
        return (
        <p className="tile" key={index}>{item}</p>
        );
      })}
    </div>
  );
};
