import React, { Component } from 'react';
import { View, Text, Image, StyleSheet,Dimensions } from 'react-native';

import sp1 from '../../../media/temp/sp1.jpeg';
import sp2 from '../../../media/temp/sp2.jpeg';
import sp3 from '../../../media/temp/sp3.jpeg';
import sp4 from '../../../media/temp/sp4.jpeg';

export default class  extends Component {
    render() {
        const {container,titleContainer,title,body,productContainer,productImage,productPrice,productName} = styles;
        return (
            <View style={container}>
                <View style={titleContainer}>
                    <Text style={title}>
                    TopProduct
                    </Text>
                </View>
                <View style={body}>
                    <View style={productContainer}>
                        <Image source={sp1} style={productImage} />
                        <Text style={productName}>Product Name</Text>
                        <Text style={productPrice}>250 $</Text>
                    </View>
                    <View style={productContainer}>
                        <Image source={sp2} style={productImage} />
                        <Text style={productName}>Product Name</Text>
                        <Text style={productPrice}>300 $</Text>
                    </View>
                    <View style={{height:10,width}}></View>
                    <View style={productContainer}>
                        <Image source={sp3} style={productImage} />
                        <Text style={productName}>Product Name</Text>
                        <Text style={productPrice}>400 $</Text>
                    </View>
                    <View style={productContainer}>
                        <Image source={sp4} style={productImage} />
                        <Text style={productName}>Product Name</Text>
                        <Text style={productPrice}>900$</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const {width} = Dimensions.get('window');
const productWidth= (width - 60) / 2;
const productImageHeight = (productWidth/361 )* 452 ;

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#FFF',
        margin: 10,
        shadowColor: '#2E272B',
        shadowOpacity: 0.2,
        shadowOffset: {width:0,height:3},
    },
    titleContainer:{
        height:50,
        justifyContent: 'center',
        paddingLeft: 10,
        
    },
    title:{
        color:'#D3D3CF',
        fontSize: 20,
    },
    body:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        paddingBottom: 10,
    },
    productContainer:{
        width:productWidth,
        borderColor: '#dedede',
        borderWidth: 1,
        padding: 1,
    },
    productImage:{
        width:productWidth-4,
        height:productImageHeight,
    },
    productName:{
        marginVertical: 5,
        paddingLeft: 10,
        fontFamily: 'Avenir',
        color:'#D3D3CF',
        fontWeight: '500',
    },
    productPrice:{
        marginVertical: 5,        
        paddingLeft: 10,
        fontFamily: 'Avenir',
        color:'#662F90',
    },
});