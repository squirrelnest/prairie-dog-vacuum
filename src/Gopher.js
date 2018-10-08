import React from "react";
import { Sprite } from "react-pixi-fiber";
import * as PIXI from "pixi.js";
import Hole from "./Hole";

const gopher = "/gopher-front.png";
const centerAnchor = new PIXI.Point(0.5, 0.5);

function Gopher(props) {
  return (
      [<Hole
        fill={0x000000}
        width={50}
        height={15}
        {...props}
      />,
      <Sprite
        interactive={true}
        anchor={centerAnchor}
        texture={PIXI.Texture.fromImage(gopher)}
        {...props}/>
    ]
  )
}

export default Gopher;
