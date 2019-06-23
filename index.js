import React, { Component } from 'react';
import { render } from 'react-dom';
import Index from './Container/index'
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
       <Index />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
