import React, { Component } from "react"
import PropTypes from "prop-types"
import { Sprite, Container, Graphics } from "react-pixi-fiber"
import * as PIXI from "pixi.js"
import Bulge from "./Bulge"
import Hose from "./Hose"

const centerAnchor = new PIXI.Point(0.5, 1)
const tube = "/black-white-stripes.png"

class Tube extends Component {

  constructor(props) {
    super(props)
    this.state={
      mouseX: 0,
      mouseY: 0,
      count: 0,
      hide: false
    }
  }

  componentDidMount() {
    // listen for mouse movements
    window.document.addEventListener("mousemove", this.handleMouse)
  }

  componentWillReceiveProps(nextProps) {
    // start timer for gulp animation
    if (nextProps.bulgeVisible === true ) {
      this.context.app.ticker.add(this.startTimer)
    }
    if (nextProps.numberOfGophers == 0) {
      // setTimeout(function(){this.context.app.ticker.remove(this.startTimer)}, 1000)
      this.context.app.ticker.remove(this.startTimer)
      this.setState({ hide: true })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // reset count when gulp animation ends
    if (prevState.count >= prevState.mouseY/100) {
      this.props.endBulge()
      this.resetCount()
      this.context.app.ticker.remove(this.startTimer)
    }
  }

  handleMouse = (event) => {
    event.stopPropagation()
    event.preventDefault()
    this.setState({
      mouseX: event.clientX,
      mouseY: event.clientY
    })
  }

  startTimer = (delta) => {
    this.setState({
      count: this.state.count + delta * 0.1
    })
  }

  resetCount = () => {
    this.setState({
      count: 0
    })
  }

  render() {
    return (
      <Container>
        <Hose
          {...this.props}
          fill={0xffffff}
          x={this.state.mouseX}
          y={this.state.mouseY}
          width={50}
          height={this.state.mouseY}
        />
        <Sprite
          {...this.props}
          name='vacuumHead'
          fill={0xffffff}
          x={this.state.mouseX}
          y={this.state.mouseY}
          width={80}
          height={25}
          anchor={centerAnchor}
          texture={PIXI.Texture.fromImage(tube)}
        />
        <Bulge
          x={this.state.mouseX}
          y={this.state.mouseY}
          visible={this.props.bulgeVisible}
          hide={this.state.hide}
          count={this.state.count}
        />
      </Container>
    )
  }

}

Tube.contextTypes = {
  app: PropTypes.object
}

export default Tube
