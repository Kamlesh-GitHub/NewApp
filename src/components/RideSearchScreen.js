import React, {useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
  StatusBar,
} from 'react-native';

import Geolocation from '@react-native-community/geolocation';

const {width, height} = Dimensions.get('window');

import MapView, {Marker} from 'react-native-maps';
import Icons from 'react-native-vector-icons/MaterialIcons';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';

class RideSearchScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
        <View style={{flex: 1, justifyContent: 'center'}}>
          <MapView
            showsUserLocation={true}
            showsMyLocationButton={true}
            style={styles.MapContainer}></MapView>
          <TouchableOpacity style={{position: 'absolute', right: '8%'}}>
            <Icons name="my-location" size={40} color="black" />
          </TouchableOpacity>

          <View style={styles.usercontainer}>
            <Text style={{fontSize: width * 0.025}}>250+ Rides</Text>

            <View
              style={{
                flexDirection: 'row',
                marginTop: height * 0.015,
              }}>
              <Image
                style={styles.userimage}
                resizeMode="contain"
                source={require('../assets/userprofile.png')}
              />
              <View
                style={{
                  flexDirection: 'column',
                  marginLeft: '3%',
                }}>
                <Text style={{fontSize: width * 0.038}}>Miss. Ahana Edson</Text>
                <Text style={{fontSize: width * 0.03, color: '#32BDB7'}}>
                  My past trips
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'center',
                  marginLeft: width * 0.25,
                }}>
                <Text style={{fontSize: 7}}>Total Earned</Text>
                <Text style={{fontSize: 15}}>$599.56</Text>
              </View>
            </View>

            <View style={styles.UserRideDetailview}>
              <View style={{flexDirection: 'column', alignItems: 'center'}}>
                <Material name="clock-outline" size={24} color="#FFF" />

                <Text style={{fontSize: width * 0.05, color: '#fff'}}>
                  10.2
                </Text>
                <Text style={{fontSize: width * 0.03, color: '#fff'}}>
                  Hours Online
                </Text>
              </View>
              <View style={{flexDirection: 'column', alignItems: 'center'}}>
                <Material name="speedometer" size={24} color="#FFF" />

                <Text style={{fontSize: width * 0.05, color: '#fff'}}>4.7</Text>
                <Text style={{fontSize: width * 0.03, color: '#fff'}}>
                  Total Distance
                </Text>
              </View>
              <View style={{flexDirection: 'column', alignItems: 'center'}}>
                <Material name="form-select" size={24} color="#FFF" />

                <Text style={{fontSize: width * 0.05, color: '#fff'}}>15%</Text>
                <Text style={{fontSize: width * 0.03, color: '#fff'}}>
                  Total Jobs
                </Text>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
export default RideSearchScreen;

const styles = StyleSheet.create({
  UserRideDetailview: {
    backgroundColor: '#32BDB7',
    width: '100%',
    height: '45%',
    borderRadius: 10,
    marginTop: height * 0.07,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: height * 0.02,
  },
  usercontainer: {
    position: 'absolute',
    height: height / 3,
    width: width * 0.93,
    backgroundColor: '#fff',
    alignSelf: 'center',
    borderRadius: width * 0.04,
    bottom: height * 0.05,
    padding: width * 0.025,
  },
  MapContainer: {
    height: height,
    width: width,
  },
});
