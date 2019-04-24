import React, {Component} from 'react';

export default class SecondComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
        <div className="topslider">
        <div className="sp-container">
        <div className="sp-content">
          <div className="sp-globe"></div>
          <h2 className="frame-1">REACT.JS</h2>
          <h2 className="frame-2">SETS WEB DEVELOPMENT</h2>
          <h2 className="frame-3">FREE TO INNOVATE</h2>
          <h2 className="frame-4">VIA SPAs</h2>
          <h2 className="frame-5">
            <span>TEST, </span>
            <span>RENDER, </span>
            <span>COMPILE.</span>
          </h2>
          <a className="sp-circle-link" href="#">by Syd</a>
        </div>
      </div>
      </div>
    );
  }
}

