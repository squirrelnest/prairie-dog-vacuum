import React, { Component } from "react";
import PropTypes from "prop-types";
import { CustomPIXIComponent, Sprite } from "react-pixi-fiber";
import * as PIXI from "pixi.js";

const centerAnchor = new PIXI.Point(0.5, 1);
const tube = "/black-white-stripes.png";

class Tube extends Component {

  constructor(props) {
    super(props)
    this.state={
      mouseX: 0,
      mouseY: 0
    }
  }

  componentDidMount() {
    const handleMouse = (event) => {
      event.stopPropagation()
      event.preventDefault()
      this.setState({
        mouseX: event.clientX,
        mouseY: event.clientY
      })
    }
    window.document.addEventListener("mousemove", handleMouse)
  }

  render() {
    return (
      <Sprite
        {...this.props}
        fill={0xffffff}
        x={this.state.mouseX}
        y={this.state.mouseY}
        width={50}
        height={this.state.mouseY}
        anchor={centerAnchor}
        texture={PIXI.Texture.fromImage(tube)}
      />
    )
  }

}

Tube.contextTypes = {
  app: PropTypes.object
}

export default Tube
