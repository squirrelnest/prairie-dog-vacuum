import React, { Component } from "react"
import PropTypes from "prop-types"
import { CustomPIXIComponent, Graphics } from "react-pixi-fiber"
import * as PIXI from "pixi.js"

const TYPE = "Tube"

export const behavior = {
  customDisplayObject: props => new PIXI.Graphics(),
  customApplyProps: function(instance, oldProps, newProps) {
    const { x, y, width, height, visible } = newProps
    instance.clear()
    instance.x = width/2*-1
    instance.y = 0
    instance.visible = true
    instance.beginFill(0xffffff, 1)
    instance.drawRect(x, y, width, -height)
  }
}
export default CustomPIXIComponent(behavior, TYPE)
