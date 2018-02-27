import React, { Component } from 'react';
import { View,Text,ImageBackground,StyleSheet,Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';
import littleIcon from '../../../media/temp/little.jpg';
import maxiIcon from '../../../media/temp/maxi.jpg';
import partyIcon from '../../../media/temp/party.jpg';

const {width,height} = Dimensions.get('window');

export default class Category extends Component {
    render() {
        const {wrapper,textStyle,imageStyle,cateTitle} =styles;
        return (
            <View style={wrapper}>
                <View style={{flex:1,justifyContent:'center',}}>
                    <Text style={textStyle} >Collection</Text>
                </View>
                <View  style={{flex:4,justifyContent:'center',}}>
                    <Swiper width={imageWidth} height={imageHeight}>
                        <View style={styles.slide1}>
                            <ImageBackground source={littleIcon} style={imageStyle} >
                                <Text style={cateTitle}>Little </Text>
                            </ImageBackground>
                        </View>
                        <View style={styles.slide2}>
                            <ImageBackground source={maxiIcon} style={imageStyle} >
                                <Text style={cateTitle}> Maxi </Text>
                            </ImageBackground>
                        </View>
                        <View style={styles.slide3}>
                            <ImageBackground source={partyIcon} style={imageStyle} >
                                <Text style={cateTitle}> Party</Text>
                            </ImageBackground>
                        </View>
                    </Swiper>
                </View>
            </View>
        );
    }
}
// kích thước ảnh banner: 933 x465
const imageWidth = width-40;
const imageHeight = (imageWidth / 933) * 465
const styles= StyleSheet.create({
    wrapper:{
        height:height*0.325,
        backgroundColor:'#FFF',
        padding:10,
        margin: 10,
        shadowColor: '#2E272B',
        shadowOpacity: 0.2,
        shadowOffset: {width:0,height:3},
        paddingTop: 0,
    },
    textStyle:{
        fontSize: 20,
        color:'#AFAEAF',  
    },
    imageStyle:{
        height: imageHeight, 
        width:imageWidth,
        justifyContent:'center',
        alignItems: 'center',
    },
    cateTitle:{
        fontSize: 18,
        fontFamily: 'Avenir',
        color:'#A9A9A9',
    }
});