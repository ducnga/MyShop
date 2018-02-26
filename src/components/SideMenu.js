import React from 'react';
import { Dimensions } from 'react-native';
import {StackNavigator , TabNavigator ,TabBarBottom,DrawerNavigator} from 'react-navigation';

import Tabbar from './Tabbar';
import Menu from './Menu/Menu';

const { width } = Dimensions.get('screen');
export const SideMenu = DrawerNavigator(
    {
        SideBar:
        {
            screen:Tabbar
        }
    },
    {
        drawerWidth :width*7/10,
        drawerPosition :'left',
        contentComponent: props => <Menu {...props} />
    }
);