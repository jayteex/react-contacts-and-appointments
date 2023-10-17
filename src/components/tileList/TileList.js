import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = (props) => {
  console.log('This is the TileList component')

  return (
    <div>
      {props.items.map((item, index) => (
        <Tile
          key={index}
          name={item.name}
          description={{ ...item, name: undefined}}
          className="tile-container"
        />
      ))}
    </div>
  );
};
