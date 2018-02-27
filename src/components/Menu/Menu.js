import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';

import profileIcon from '../../media/temp/profile.png';

export default class Menu extends Component {
  constructor(props){
    super(props);
    this.state={isLogedIn:false};
  }
  render() {
    const { container, profile, btnLogin, textStyle, btnLogout, textStyleSignout,loginContainer } = styles;
    const logoutJSX = (
        <View style={{ flex: 1}}>
          <TouchableOpacity style={btnLogin} onPress={()=>{this.props.navigation.navigate('Authentication')}} >
            <Text style={textStyle}>Đăng nhập</Text>
          </TouchableOpacity>
        </View>
    );
    const loginJSX=(
        <View style={loginContainer}>
          <Text style={{color:'#FFF', fontFamily: 'Avenir', fontSize: 20,}}>Nguyễn Đức Nga</Text>
          <View>
            <TouchableOpacity style={btnLogout} onPress={()=>{this.props.navigation.navigate('OrderHistory')}} >
              <Text style={textStyleSignout}>Order History</Text>
            </TouchableOpacity>
            <TouchableOpacity style={btnLogout}  onPress={()=>{this.props.navigation.navigate('ChangeInfo')}} >
              <Text style={textStyleSignout}>Change Info</Text>
            </TouchableOpacity>
            <TouchableOpacity style={btnLogout}>
              <Text style={textStyleSignout}>Đăng Xuất</Text>
            </TouchableOpacity>
          </View>
          <View />
        </View>
    );
    const mainJSX=this.state.isLogedIn ? loginJSX : logoutJSX;
    return (
      <View style={container}>
        <Image source={profileIcon} style={profile} />
        {mainJSX}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#34B089',
    flex: 1,
    borderRightWidth: 3,
    borderColor: '#FFF',
    alignItems: 'center',
  },
  profile: {
    height: 150,
    width: 150,
    borderRadius: 75,
    marginBottom: 30,
  },
  btnLogin: {
    height: 50,
    paddingHorizontal: 70,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    color: '#34B089',
    fontSize: 20,
  },
  btnLogout: {
    height: 50,
    paddingHorizontal: 30,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    marginBottom: 10,
  },
  textStyleSignout: {
    color: '#34B089',
    fontSize: 15,
  },
  loginContainer:{ 
    flex: 1, 
    justifyContent:'space-between',
    alignItems:'center'
  },
});