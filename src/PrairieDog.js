import React, { Component } from "react"
import PropTypes from "prop-types"
import Gopher from "./Gopher"
import Hole from "./Hole"

export default class PrairieDog extends Component {

  constructor(props) {
    super(props)
    this.state={
      visible: true
    }
  }

  handleMouseover = () => {
    this.setState({
      visible: false
    })
    this.props.removeGopher()
  }

  render() {
    return (
      <Gopher
        {...this.props}
        visible={this.state.visible}
        mouseover={this.handleMouseover}
      />
    )
  }
}
PrairieDog.contextTypes = {
  app: PropTypes.object
}
