import React from 'react';
import { StackNavigator, TabNavigator, TabBarBottom, Image, StyleSheet } from 'react-navigation';
import Authentication from './Authentication/Authentication';
import ChangeInfo from './ChangeInfo/ChangeInfo';
//import Main from './Main/Main';
import OrderHistory from './OrderHistory/OrderHistory';
import Route from './Route';

//import homeIconS from '../media/appIcon/home.png';
// import homeIcon from '../media/appIcon/home0.png';
// import cartIconS from '../media/appIcon/cart.png';
// import cartIcon from '../media/appIcon/cart0.png';
// import searchIconS from '../media/appIcon/search.png';
// import searchIcon from '../media/appIcon/search0.png';
// import contactIconS from '../media/appIcon/contact.png';
// import contactIcon from '../media/appIcon/contact0.png';



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
        Home:
            {
                screen: Route,
                navigationOptions: () => ({
                    tabBarIcon:
                      <Image
                        source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/cat.gif' }}
                        style={{ height: 140, width: 200 }}
                      />
                      }),
            },
        Login:
            {
                screen: Authentication,
                navigationOptions: () => ({
                    tabBarIcon:
                      <Image
                        source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/cat.gif' }}
                        style={{ height: 140, width: 200 }}
                      />
                      }),
            },
        Order:
            {
                screen: OrderHistory,
                navigationOptions: () => ({
                    tabBarIcon:
                      <Image
                        source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/cat.gif' }}
                        style={{ height: 140, width: 200 }}
                      />
                      }),
            },
        Contact:
            {
                screen: ChangeInfo,
                navigationOptions: () => ({
                    tabBarIcon:
                      <Image
                        source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/cat.gif' }}
                        style={{ height: 140, width: 200 }}
                      />
                      }),
            }
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
