import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import * as PIXI from "pixi.js";
import PrairieDogging from "./PrairieDogging";

const height = window.innerHeight
const width = window.innerWidth
const numberOfGophers = Math.round((height*width) / 100000)
const options = {
  backgroundColor: 0xf46242
}

export default class PrairieDogs extends Component {

  constructor(props) {
    super(props)
      this.state={
        mouseX: 0,
        mouseY: 0,
        numberOfGophers: numberOfGophers
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.numberOfGophers === 0) {
      return true
    } else {
      return false
    }
  }

  removeGopher = () => {
    this.props.removeGopher()
  }

  render() {

    const PrairieDogs = Array(numberOfGophers).fill().map((element, index) =>
      <PrairieDogging
        x={Math.random() * Math.floor(width)}
        y={Math.random() * Math.floor(height)}
        key={index}
        scale={0.3}
        removeGopher={this.removeGopher} />
    )

    return (
      <Fragment>
        {PrairieDogs}
      </Fragment>
    )
  }
}
