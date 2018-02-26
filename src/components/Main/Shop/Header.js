import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Dimensions,Image,TextInput,StyleSheet } from 'react-native';

import icLogo from '../../../media/appIcon/ic_logo.png';
import icMenu from '../../../media/appIcon/ic_menu.png';

const { height } = Dimensions.get('window');

export default class Header extends Component {
    render() {
        const {wapper,row1,TextInputSearch,iconStyle,titleStyle} = styles;
        return (
            <View  style={wapper}>
                <View  style={row1}>
                    <TouchableOpacity  onPress={ this.props.onOpen }>
                        <Image source={icMenu} style={iconStyle}/>
                    </TouchableOpacity>
                    <Text style={titleStyle}>App bán hàng</Text>
                    <Image source={icLogo} style={iconStyle}/>
                </View>
                <TextInput style={TextInputSearch} placeholder="Bạn muốn mua gì?"/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wapper: { backgroundColor: '#34B089',height:height/8,padding: 10,justifyContent:'space-around',},
    row1:{flexDirection:'row',justifyContent:'space-between', backgroundColor: '#34B089',},
    titleStyle:{color:'#FFF',fontSize: 20,fontFamily: 'Avenir',},
    TextInputSearch:{ height:30,backgroundColor:'#FFF',paddingLeft: 10,fontSize: 14,paddingTop: 0,paddingBottom: 2,},
    iconStyle:{height:25,width:25}
});