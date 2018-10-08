import React, { Component } from "react"
import PropTypes from "prop-types"
import { CustomPIXIComponent, Sprite } from "react-pixi-fiber"
import * as PIXI from "pixi.js"

const vacuum = "/yellow-vacuum.png"
const centerAnchor = new PIXI.Point(0.5, 1)

class Vacuum extends Component {

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
        x={this.state.mouseX}
        y={this.state.mouseY}
        width={200}
        height={200}
        interactive={true}
        anchor={centerAnchor}
        texture={PIXI.Texture.fromImage(vacuum)}
      />
    )
  }

}

Vacuum.contextTypes = {
  app: PropTypes.object
}

export default Vacuum
