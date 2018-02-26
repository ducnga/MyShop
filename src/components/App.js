import React, { Component } from 'react';
import {StatusBar} from 'react-native';
import {SideMenu} from './SideMenu';
StatusBar.setHidden(true);

export default class App extends Component {
  render() {
    return (
      <SideMenu />
    );
  }
}
