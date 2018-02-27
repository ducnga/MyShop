import React from 'react';
import { StackNavigator } from 'react-navigation';

import Authentication from './Authentication/Authentication';
import ChangeInfo from './ChangeInfo/ChangeInfo';
import Main from './Main/Main';
import OrderHistory from './OrderHistory/OrderHistory';

export default StackNavigator(
    {
        Main: {
            screen: Main,
            navigationOptions:
                {
                    title: 'Trang chủ',
                    headerStyle: {
                        backgroundColor: '#f4511e',
                        height: 0
                    },
                }
        },
        Authentication: {
            screen: Authentication,
            navigationOptions:
                {
                    title: 'Login',
                    headerStyle: {
                        backgroundColor: '#f4511e',
                        height: 0,
                    }
                }
        },
        ChangeInfo: {
            screen: ChangeInfo,
            navigationOptions:
                {
                    title: 'Thay đổi thông tin',
                    headerStyle: {
                        backgroundColor: '#f4511e',
                        height: 0
                    },
                }
        },
        OrderHistory: {
            screen: OrderHistory,
            navigationOptions:
                {
                    title: 'Danh sách đơn hàng',
                    headerStyle: {
                        backgroundColor: '#f4511e',
                        height: 0
                    },
                }
        },
    },
    {
        initialRouteName: 'Authentication',
    }
);