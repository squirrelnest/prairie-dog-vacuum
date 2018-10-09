import React, { Component, Fragment } from "react"
import ReactDOM from "react-dom"
import { Stage, Text } from "react-pixi-fiber"
import PrairieDogs from "./PrairieDogs"
import Tube from "./Tube"
import * as PIXI from "pixi.js"

const height = window.innerHeight
const width = window.innerWidth
const options = {
  backgroundColor: 0xf46242
}

class App extends Component {

  constructor(props) {
    super(props)
      this.state={
        mouseX: 0,
        mouseY: 0,
        numberOfGophers: Math.round((height*width) / 100000),
        bulgeVisible: false
    }
  }

  endBulge = () => {
    this.setState(state => ({
      ...state,
      bulgeVisible: false
    }))
  }

  removeGopher = () => {
    this.setState(state => ({
      ...state,
      numberOfGophers: this.state.numberOfGophers - 1,
      bulgeVisible: this.state.numberOfGophers > 0 ? true : false
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
          <PrairieDogs
          removeGopher={this.removeGopher}
          numberOfGophers={this.state.numberOfGophers}
          screenWidth={width}
          screenHeight={height}/>
          <Tube
            bulgeVisible={this.state.bulgeVisible}
            endBulge={this.endBulge}
            numberOfGophers={this.state.numberOfGophers}/>
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
