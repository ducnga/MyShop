import React, { Component } from 'react';
import { View,Text, TouchableOpacity } from 'react-native';
import Header from './Shop/Header';
import Shop from './Shop/Shop';
export default class Main extends React.Component {
  gotoAuthentication()
    {
      const {navigation}=this.props;
      navigation.navigate('DrawerOpen');
    }
  render() {
    const {navigate}=this.props.navigation;
    return (
      <View style={{flex:1}}>
        <Header onOpen={this.gotoAuthentication.bind(this) }/>
        <Shop />
        <View>
          <TouchableOpacity style={{ backgroundColor: 'green', height: 100 }}
            onPress={this.gotoAuthentication.bind(this) }
          >
            <Text style={{ color: '#fff', fontSize: 20, padding: 10 }}>Go to Menu</Text>
          </TouchableOpacity>
        </View>
        <View style={{ backgroundColor: 'blue', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          
          <Text style={{ color: '#fff' }}>
            Main Component
          </Text>
          <TouchableOpacity style={{ backgroundColor: 'green' }}
            onPress={() => navigate('Authentication') }
          >
            <Text style={{ color: '#fff', fontSize: 20, padding: 10 }}>Go to Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ backgroundColor: 'green' }}
            onPress={() => { this.props.navigation.navigate('DrawerOpen'); }}
          >
            <Text style={{ color: '#fff', fontSize: 20, padding: 10 }}>Go to Menu</Text>
          </TouchableOpacity>
        </View>
        </View>
    );
  }
}