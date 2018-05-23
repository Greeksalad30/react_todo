import React, { Component } from 'react';
import PropTypes from 'prop-types'

const propTypes = {
  name: PropTypes.string.isRequired,
  onClicked: PropTypes.func,
  title: PropTypes.any
}

const defaultProps = {
  name: 'Default name of App'
}

class MyComponent extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log(this.props, this.state, nextProps, nextState)
  }
  componentDidUpdate(prevProps, nextProps) {
    console.log(this.props, this.state, prevProps, nextProps)
  }
  componentWillMount() {
    console.log("component will mount")
  }
  componentDidMount() {
    console.log("component did mount")
  }

  render() {
    const { title, name, onClick } = this.props
    return (
      <div className="component">
        <h1>Title: {title}</h1>
        <h2>Name: {name}</h2>
        <div onClick={onClick}>Click Me</div>
      </div>
    )
  }
}

MyComponent.propTypes = propTypes
MyComponent.defaultProps = defaultProps
export default MyComponent;
