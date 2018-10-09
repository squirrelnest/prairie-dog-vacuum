import React, { Component, Fragment } from "react"
import ReactDOM from "react-dom"
import * as PIXI from "pixi.js"
import PrairieDog from "./PrairieDog"

export default class PrairieDogs extends Component {

  constructor(props) {
    super(props)
    this.state={
      mouseX: 0,
      mouseY: 0
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.numberOfGophers === 0) {
      return true
    } else {
      return false
    }
  }

  removeGopher = () => {
    this.props.removeGopher()
  }

  render() {

    const { screenWidth, screenHeight, numberOfGophers } = this.props

    return Array(numberOfGophers).fill().map((element, index) =>
      <PrairieDog
        x={Math.random() * Math.floor(screenWidth)}
        y={Math.random() * Math.floor(screenHeight)}
        key={index}
        scale={0.3}
        removeGopher={this.removeGopher} />
    )
  }
}
