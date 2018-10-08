import React, { Component } from "react";
import PropTypes from "prop-types";
import Gopher from "./Gopher";
import Hole from "./Hole";

class PrairieDogging extends Component {

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
PrairieDogging.contextTypes = {
  app: PropTypes.object
};

export default PrairieDogging
