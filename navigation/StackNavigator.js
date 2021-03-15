import React from 'react';
import {TouchableOpacity} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import SignIn from '../screens/SignIn';
import Signup from '../screens/Signup';
import OtpScreen from '../screens/OtpScreen';
import RideSearchScreen from '../screens/RideSearchScreen';
import WalletScreen from '../screens/WalletScreen';
import MyProfileScreen from '../screens/MyProfileScreen';
import HistoryScreen from '../screens/HistoryScreen';
import NotificationScreen from '../screens/NotificationScreen';
import ContactUs from '../screens/ContactUs';
import VehicleManagement from '../screens/VehicleManagement';
import EditProfilescreen from '../screens/EditProfilescreen';
import {HomeTabNavigator} from '../navigation/TabNavigator';

import Icons from 'react-native-vector-icons/MaterialIcons';

const HeaderRight = (
  <TouchableOpacity style={{marginRight: 20, alignItems: 'center'}}>
    <Icons name="save" size={25} />
  </TouchableOpacity>
);

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Signup">
      <Stack.Screen
        options={{headerShown: false}}
        name="SignIn"
        component={SignIn}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Signup"
        component={Signup}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="OtpScreen"
        component={OtpScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Home"
        component={HomeTabNavigator}
      />
      <Stack.Screen
        options={{headerTitleAlign: 'center'}}
        name="Contact Us"
        component={ContactUs}
      />
    </Stack.Navigator>
  );
};
const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerTitleAlign: 'center',
          headerTitle: 'Online',
          headerTransparent: true,
        }}
        name="Home"
        component={RideSearchScreen}
      />
    </Stack.Navigator>
  );
};
const WalletStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: '100',
            fontSize: 21,
          },
        }}
        name="Wallet"
        component={WalletScreen}
      />
    </Stack.Navigator>
  );
};
const MoreStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="More"
        component={MyProfileScreen}
      />
      <Stack.Screen
        options={{headerShown: true, headerTitleAlign: 'center'}}
        name="Notifications"
        component={NotificationScreen}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerTitle: 'Vehicle Management',
        }}
        name="Vehicle"
        component={VehicleManagement}
      />

      <Stack.Screen
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerRight: () => HeaderRight,
        }}
        name="Edit Profile"
        component={EditProfilescreen}
      />
    </Stack.Navigator>
  );
};
const HistoryStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: true, headerTitleAlign: 'center'}}
        name="History"
        component={HistoryScreen}
      />
    </Stack.Navigator>
  );
};
export {
  MainStackNavigator,
  WalletStackNavigator,
  HomeStackNavigator,
  HistoryStackNavigator,
  MoreStackNavigator,
};
