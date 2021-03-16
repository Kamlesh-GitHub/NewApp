import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from 'react-native';
const {width, height} = Dimensions.get('window');

const HistoryScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
      <View
        style={{
          width: width,
          height: height,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 25,
          }}>
          This is Driver History Screen
        </Text>
      </View>
    </SafeAreaView>
  );
};
export default HistoryScreen;
