import React from 'react';
import { Text, View,Image,TouchableOpacity } from 'react-native';

import { TabNavigator, TabBarBottom,StackNavigator } from 'react-navigation'; // 1.0.0-beta.27

import Route from './Route';
import Authentication from './Authentication/Authentication';
import ChangeInfo from './ChangeInfo/ChangeInfo';
import OrderHistory from './OrderHistory/OrderHistory';

import homeIconS from '../media/appIcon/home.png';
import homeIcon from '../media/appIcon/home0.png';
import cartIconS from '../media/appIcon/cart.png';
import cartIcon from '../media/appIcon/cart0.png';
import searchIconS from '../media/appIcon/search.png';
import searchIcon from '../media/appIcon/search0.png';
import contactIconS from '../media/appIcon/contact.png';
import contactIcon from '../media/appIcon/contact0.png';

export const AuthenticationStack = StackNavigator(
    {
        Authentication: {
            screen: Authentication,
            navigationOptions:
                {
                    title: 'Login',
                    headerStyle: {
                        backgroundColor: '#f4511e',
                    },
                    headerTitleStyle: {
                        fontWeight: '500',
                        fontSize: 24,
                        marginTop: 5,
                        alignSelf: 'center'
                    },
                    headerTintColor: '#fff'
                }
        }
    },
    {
        initialRouteName: 'Authentication',
    }
);
export const ChangeInfoStack = StackNavigator(
    {
        ChangeInfo: {
            screen: ChangeInfo,
            navigationOptions:
                {
                    title: 'Thay đổi thông tin',
                    headerStyle: {
                        backgroundColor: '#f4511e',
                    },
                    headerTitleStyle: {
                        fontWeight: '500',
                        fontSize: 24,
                        marginTop: 5,
                        alignSelf: 'center'
                    },
                    headerTintColor: '#fff'
                }
        }
    }
);
export const OrderHistoryStack = StackNavigator(
    {
        OrderHistory: {
            screen: OrderHistory,
            navigationOptions:
                {
                    title: 'Danh sách đơn hàng',
                    headerStyle: {
                        backgroundColor: '#f4511e',
                        height: 30
                    },
                    headerTitleStyle: {
                        fontWeight: '500',
                        fontSize: 14,
                        marginTop: 5,
                        alignSelf: 'center',
                        height: 30
                    },
                    headerTintColor: '#fff'
                }
        },
    }
);
export default TabNavigator(
  {
    Home: { screen: Route ,
        navigationOptions: () => ({
            tabBarLabel:'Main',
            tabBarIcon:({ focused, tintColor }) => {
                return <Image
                    source={focused ? homeIconS: homeIcon }
                    style={{ height: 20, width: 20 }}
                />;
            }
        }),
    },
    Login: { screen: AuthenticationStack,
        navigationOptions: () => ({
            tabBarLabel:'Login',
            tabBarIcon:({ focused, tintColor }) => {
                return <View>
                        <Image source={focused ? searchIconS: searchIcon } style={{ height: 20, width: 20 }} />
                    </View>;
            }
        }),
    },
    Order: { screen: OrderHistoryStack,
        navigationOptions: () => ({
            tabBarLabel:'Order',
            tabBarIcon:({ focused, tintColor }) => {
                return <View >
                            <Image
                                source={focused ? cartIconS: cartIcon }
                                style={{ height: 20, width: 20 }}
                            />
                            <View style={{ position: 'absolute', right: -5, top: -3, alignItems: 'center', justifyContent: 'center', width: 12, height: 12, borderRadius: 8, backgroundColor: 'red' }} >
                                    <Text style={{ color: 'white',fontSize:10 }}>2</Text>
                            </View>
                        </View>;
            }
        }),
      },
    Contact: { screen: ChangeInfoStack,
        navigationOptions: () => ({
            tabBarLabel:'Contact',
            tabBarIcon:({ focused, tintColor }) => {
                return <Image
                    source={focused ? contactIconS: contactIcon }
                    style={{ height: 20, width: 20 }}
                />;
            }
        }),
    },
  },
  {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
    animationEnabled: false,
    swipeEnabled: false,
  }
);
