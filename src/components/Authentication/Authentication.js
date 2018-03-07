import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Platform } from 'react-native';
import isBack from '../../media/appIcon/back_white.png';
import icLogo from '../../media/appIcon/ic_logo.png';

export default class Authentication extends Component {
  constructor(props) {
    super(props);
    this.state = { isSignIn: true };
  }
  signIn() {
    this.setState({ isSignIn: true });
  }
  signUp() {
    this.setState({ isSignIn: false });
  }
  render() {
    const {
      bigButton,
      buttonText,
      inputStyle,
      row1,
      iconStyle,
      titleStyle,
      container,
      controlStyle,
      signInStyle,
      signUpStyle,
      isActiveStyle,
      activeStyle
    } = styles;
    const signInJSX = (
      <View >
        <TextInput
          style={inputStyle}
          placeholder="Vui lòng nhập Email"
          underlineColorAndroid='transparent'
        />
        <TextInput
          style={inputStyle}
          placeholder="Vui lòng nhập Password"
          underlineColorAndroid='transparent'
        />
        <TouchableOpacity style={bigButton} >
          <Text style={buttonText} >Đăng nhập</Text>
        </TouchableOpacity>
      </View>
    );
    const signUpJSX = (
      <View >
        <TextInput
          style={inputStyle}
          placeholder="Vui lòng nhập Tên"
          underlineColorAndroid='transparent'
        />
        <TextInput
          style={inputStyle}
          placeholder="Vui lòng nhập Email"
          underlineColorAndroid='transparent'
        />
        <TextInput
          style={inputStyle}
          placeholder="Vui lòng nhập Password"
          underlineColorAndroid='transparent'
        />
        <TextInput
          style={inputStyle}
          placeholder="Vui lòng nhập lại Password"
          underlineColorAndroid='transparent'
        />
        <TouchableOpacity style={bigButton} >
          <Text style={buttonText} >Đăng ký</Text>
        </TouchableOpacity>
      </View>

    );
    const mainJSX = this.state.isSignIn ? signInJSX : signUpJSX;
    return (
      <View style={container}>
        <View style={row1}>
          <TouchableOpacity onPress={() => { this.props.navigation.goBack() }} >
            <Image source={isBack} style={iconStyle} />
          </TouchableOpacity>
          <Text style={titleStyle}>Đăng nhập hệ thống</Text>
          <Image source={icLogo} style={iconStyle} />
        </View>
        {mainJSX}
        <View style={controlStyle}>
          <TouchableOpacity style={signInStyle} onPress={this.signIn.bind(this)} >
            <Text style={this.state.isSignIn ? isActiveStyle : activeStyle} >Đăng nhập</Text>
          </TouchableOpacity>
          <TouchableOpacity style={signUpStyle} onPress={this.signUp.bind(this)} >
            <Text style={this.state.isSignIn ? activeStyle : isActiveStyle} >Đăng ký</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34B089',
    padding: Platform.OS === 'ios' ? 20 : 15,
    justifyContent: 'space-between',
  },
  row1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#34B089',
  },
  titleStyle: {
    color: '#FFF',
    fontSize: Platform.OS === 'ios' ? 30 : 20,
    fontFamily: 'Avenir',
  },
  iconStyle: {
    height: Platform.OS === 'ios' ? 30 : 25,
    width: Platform.OS === 'ios' ? 30 : 25,
  },
  controlStyle: {
    flexDirection: 'row',
    alignSelf: 'stretch',
  },
  signInStyle: {
    backgroundColor: '#FFF',
    alignItems: 'center',
    paddingVertical: 10,
    flex: 1,
    marginRight: 2,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
  },
  signUpStyle: {
    backgroundColor: '#FFF',
    alignItems: 'center',
    paddingVertical: 10,
    flex: 1,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  isActiveStyle: {
    color: '#34B089',
  },
  activeStyle: {
    color: '#dedede',
  },
  inputStyle: {
    height: Platform.OS === 'ios' ? 50 : 40,
    backgroundColor: '#FFF',
    marginBottom: 10,
    borderRadius: 20,
    paddingLeft: 20,
  },
  bigButton: {
    height: Platform.OS === 'ios' ? 50 : 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: 'Avenir',
    color: '#FFF',
    fontWeight: '400',
  },
});
