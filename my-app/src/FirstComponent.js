import React, {Component} from 'react';

export default class FirstComponent extends Component {
// eslint-disable-next-line
constructor(props) {
    super(props)
  }

render() {
    const element = (<div>React Demo, 2019</div>)
    return (
    <footer className="footer">
    <h3>Component Title</h3>
      {this.props.displaytext}
      {element}
    </footer>
    );
  }
}
