import React, { Component } from "react"
import PropTypes from "prop-types"
import { CustomPIXIComponent, Graphics } from "react-pixi-fiber"
import * as PIXI from "pixi.js"

const TYPE = "Bulge"

export const behavior = {
  customDisplayObject: props => new PIXI.Graphics(),
  customApplyProps: function(instance, oldProps, newProps) {
    const { x, y, width, height, visible, hide, count } = newProps
    instance.clear()
    instance.x = x
    instance.y = y
    instance.visible = visible
    instance.beginFill(0xffffff, 1)
    instance.drawCircle(0, -60, 60)

    if (visible === true && hide === false ) {
      instance.y = y - count * 100
    }
    if (hide === true ) {
        instance.visible = false
    }
  }
}

export default CustomPIXIComponent(behavior, TYPE)
