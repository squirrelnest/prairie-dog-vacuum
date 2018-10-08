import React, { Component } from "react"
import PropTypes from "prop-types"
import { CustomPIXIComponent, Sprite } from "react-pixi-fiber"
import * as PIXI from "pixi.js"

const tube = "/black-white-stripes.png"

const TYPE = "Tube"

let ropeLength = 2
let points = []
for (let i = 0 i < 20 i++) {
  points.push(new PIXI.Point(i * ropeLength, 0))
}

export const behavior = {
  customDisplayObject: props => new PIXI.mesh.Rope(PIXI.Texture.fromImage(tube), points),
  customApplyProps: function(instance, oldProps, newProps) {
    const { fill, x, y, width, height, visible, scaleX, scaleY, rotation, skewX, skewY, pivotX, pivotY } = newProps
    instance.setTransform (x, y, scaleX, height)
  }
}

export default CustomPIXIComponent(behavior, TYPE)
