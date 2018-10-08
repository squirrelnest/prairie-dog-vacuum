import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { Stage, Text } from "react-pixi-fiber";
import PrairieDogging from "./PrairieDogging";
import PrairieDogs from "./PrairieDogs";
import Hole from "./Hole";
import Vacuum from "./Vacuum";
import Tube from "./Tube";
import * as PIXI from "pixi.js";

const height = window.innerHeight
const width = window.innerWidth
const numberOfGophers = Math.round((height*width) / 100000)
const options = {
  backgroundColor: 0xf46242
}

class App extends Component {

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
    this.setState(state => ({
      ...state,
      numberOfGophers: this.state.numberOfGophers - 1
    }))
  }

  render() {

    const message = new PIXI.Text('Area Cleared', {fontFamily : 'Arial', fontSize: 24, fill : 0xff1010, align : 'center'});

    return (
      <Fragment>
        <Stage
          options={options}
          width={width}
          height={height}>
          <PrairieDogs removeGopher={this.removeGopher} />
          <Tube />
          { this.state.numberOfGophers == 0 &&
            <Text
              text="Area cleared!"
              style={{fontFamily: 'Arial', fontSize: '800%', fill: 0xffffff, align: 'center'}}
              anchor={[0.5,0.5]}
              x={width/2}
              y={height/2}
            />
          }
        </Stage>
      </Fragment>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
)
