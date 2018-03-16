import React, { Component } from 'react';

import Content from './containers/Content';
import Welcome from './containers/Welcome';
import Cursor from './components/Cursor';

class App extends Component {
  state = {
    loaded: false 
  }

  componentDidMount() {
    setTimeout(() => this.setState({ loaded: true }), 2000)
  }

  render() {
    return (
      <React.Fragment>
        {
          this.state.loaded 
            ? <Content />
            : <Welcome />
        }
        <Cursor />
      </React.Fragment>
    );
  }
}

export default App;
