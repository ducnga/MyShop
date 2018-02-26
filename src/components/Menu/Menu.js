import React, { Component } from 'react';
import {Text,View,TouchableOpacity} from 'react-native';

export default class Menu extends Component {
  render() {
    return (
      <View style={{backgroundColor: '#dedede', flex: 1,justifyContent:'center',alignItems:'center'}}>
        <Text style={{color:'#fff'}}>
          Menu
        </Text>
        <TouchableOpacity style={{backgroundColor:'green'}}
            onPress={()=>{this.props.navigation.navigate('Authentication')}}
        >
          <Text style={{color:'#fff',fontSize:20,padding:10}}>Go to Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:'green'}}
            onPress={()=>{this.props.navigation.navigate('ChangeInfo')}}
        >
          <Text style={{color:'#fff',fontSize:20,padding:10}}>Go to ChangeInfo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:'green'}}
            onPress={()=>{this.props.navigation.navigate('OrderHistory')}}
        >
          <Text style={{color:'#fff',fontSize:20,padding:10}}>Go to OrderHistory</Text>
        </TouchableOpacity>
      </View>
    );
  }
}