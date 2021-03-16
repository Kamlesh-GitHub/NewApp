import React from 'react';
import {TouchableOpacity} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import SignIn from '../src/components/SignIn';
import Signup from '../src/components/Signup';
import OtpScreen from '../src/components/OtpScreen';
import RideSearchScreen from '../src/components/RideSearchScreen';
import WalletScreen from '../src/components/WalletScreen';
import MyProfileScreen from '../src/components/MyProfileScreen';
import HistoryScreen from '../src/components/HistoryScreen';
import NotificationScreen from '../src/components/NotificationScreen';
import ContactUs from '../src/components/ContactUs';
import VehicleManagement from '../src/components/VehicleManagement';
import EditProfilescreen from '../src/components/EditProfilescreen';
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
