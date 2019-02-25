import React, { Component } from 'react';
import Header from './header';
import Main from './main';

class Layout extends Component {

  render() {
    return (
      <div className="wrapper">
        <Header></Header>
        <Main></Main>
      </div>
    );
  }
}

export default Layout;
