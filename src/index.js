import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import HomePage from './HomePage/HomePage';

class App extends Component {
  render() {
    return (<HomePage />);
  }
}

App.propTypes = {};


App.defaultProps = {};

ReactDOM.render(<App />, document.getElementById('root'));
