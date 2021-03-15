import 'react-native-gesture-handler';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';

import {
  HomeStackNavigator,
  WalletStackNavigator,
  HistoryStackNavigator,
  MoreStackNavigator,
} from './StackNavigator';

const Tab = createBottomTabNavigator();

function HomeTabNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        tabStyle: {width: 'auto'},
        activeTintColor: '#32BDB7',
        labelStyle: {fontWeight: 'bold', fontSize: 11},
        keyboardHidesTabBar: true,
      }}>
      <Tab.Screen
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Material name="home" color={color} size={size} />
          ),
        }}
        name="Home"
        component={HomeStackNavigator}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Wallet',
          tabBarIcon: ({color, size}) => (
            <Ionicon name="wallet-outline" color={color} size={size} />
          ),
        }}
        name="Wallet"
        component={WalletStackNavigator}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'History',
          tabBarIcon: ({color, size}) => (
            <Material name="history" color={color} size={size} />
          ),
        }}
        name="History"
        component={HistoryStackNavigator}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'More',
          tabBarIcon: ({color, size}) => (
            <Material name="view-grid-outline" color={color} size={size} />
          ),
        }}
        name="More"
        component={MoreStackNavigator}
      />
    </Tab.Navigator>
  );
}
export {HomeTabNavigator};
