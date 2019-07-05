import React, { Component } from 'react';
import DragAndDropImg from './../components/DragAndDropImg/DragAndDropImg';

class HomePage extends Component {
  render() {
    return (
      <div>
        <DragAndDropImg />
      </div>
    );
  }
}

HomePage.propTypes = {};


HomePage.defaultProps = {};

export default HomePage;