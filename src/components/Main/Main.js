import React, { Component } from 'react';
import { ScrollView,Text, TouchableOpacity } from 'react-native';

import Header from './Shop/Header';
import Collection from './Shop/Collection';
import Category from './Shop/Category';
import TopProduct from './Shop/TopProduct';

export default class Main extends React.Component {
  gotoAuthentication()
    {
      const {navigation}=this.props;
      navigation.navigate('DrawerOpen');
    }
    // componentDidMount() {
    //   this.props.navigation.navigate('DrawerOpen');
    // }
  render() {
    const {navigate}=this.props.navigation;
    return (
      <ScrollView style={{flex:1}}>
        <Header onOpen={this.gotoAuthentication.bind(this) }/>
        <Collection />
        <Category />
        <TopProduct />
      </ScrollView>
    );
  }
}