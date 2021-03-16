import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {Title, Caption} from 'react-native-paper';
import Icons from 'react-native-vector-icons/Ionicons';
import AntIcons from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-community/async-storage';

const {width, height} = Dimensions.get('window');

const MyProfileScreen = ({navigation}) => {
  const [name, setName] = useState('');

  useEffect(() => {
    getData();
  });

  const getData = async () => {
    const username = await AsyncStorage.getItem('setFullName');
    setName(username);
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
      <StatusBar barStyle="dark-content" />
      <ScrollView>
        <View style={styles.FirstContainer}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <View style={styles.SettingContainer}>
              <Icons name="settings" size={width * 0.08} color="#FFF" />
            </View>

            <View
              style={{
                flexDirection: 'column',
                marginLeft: 15,
                justifyContent: 'center',
              }}>
              <TouchableOpacity activeOpacity={0.3}>
                <Text style={{fontSize: width * 0.04}}>Settings</Text>
                <Text style={{fontSize: width * 0.03}}>
                  Edit and manage your controls
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{flexDirection: 'row', marginTop: height * 0.03}}>
            <View style={styles.ProfilePicture}></View>

            <View style={{marginLeft: width * 0.03}}>
              <Title style={{fontSize: width * 0.05}}>{name}</Title>
              <Caption>johndoeqwe@gmail.com</Caption>
              <TouchableOpacity
                onPress={() => navigation.navigate('Edit Profile')}
                activeOpacity={0.4}
                style={styles.editprofilebutton}>
                <Text style={{fontSize: 10}}>Edit profile</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.managementcontainer}>
            <TouchableOpacity activeOpacity={0.5}>
              <View style={styles.offlineView}>
                <Text style={styles.offlineText}>Offline mode</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Vehicle')}
              activeOpacity={0.5}>
              <View style={styles.VehicleView}>
                <Text style={styles.VehicleText}>Vehicle management</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5}>
              <View style={styles.languageView}>
                <Text style={styles.languageText}>Language</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Notifications')}
              activeOpacity={0.5}>
              <View style={{height: height * 0.06, justifyContent: 'center'}}>
                <Text style={styles.NotificationText}>Notifications</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.SecondContainer}>
          <View style={{flexDirection: 'row', marginTop: 15}}>
            <View style={styles.SettingContainer}>
              <AntIcons name="question" size={width * 0.08} color="#FFF" />
            </View>

            <View
              style={{
                flexDirection: 'column',
                marginLeft: 15,
                justifyContent: 'center',
              }}>
              <TouchableOpacity activeOpacity={0.4}>
                <Text style={styles.helpfeedbacktext}>Help and Feedback</Text>
              </TouchableOpacity>
              <Text style={{fontSize: width * 0.03}}>
                Reach us with your feedback and questions
              </Text>
            </View>
          </View>
          <View style={styles.faQandContactcontainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate('FaQ')}
              activeOpacity={0.5}>
              <View style={styles.FaQView}>
                <Text style={styles.FaQtext}>FAQ and Videos</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Contact Us')}
              activeOpacity={0.5}>
              <View
                style={{
                  height: height * 0.06,
                  justifyContent: 'center',
                }}>
                <Text style={styles.contactustext}>Contact Us</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default MyProfileScreen;
const styles = StyleSheet.create({
  FirstContainer: {
    width: width * 1,
    height: height * 0.5,
    // backgroundColor: 'lavender',
    paddingHorizontal: width * 0.04,
    padding: '2%',
  },
  SecondContainer: {
    // backgroundColor: 'skyblue',
    paddingHorizontal: width * 0.04,
    height: height * 0.45,
    width: width * 1,
    padding: '2%',
  },

  SettingContainer: {
    width: width * 0.11,
    height: height * 0.06,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#42CCC6',
    borderRadius: width * 0.02,
  },
  editprofilebutton: {
    backgroundColor: '#F4F4F4',
    borderRadius: width * 0.04,
    width: 85,
    height: 18,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.6,
    marginTop: 10,
  },
  ProfilePicture: {
    backgroundColor: '#C2C8C7',
    width: width * 0.2,
    borderRadius: 100,
  },
  managementcontainer: {
    backgroundColor: '#F2F2F2',
    marginTop: height * 0.035,
    paddingVertical: '2%',
    paddingHorizontal: '4%',
    borderRadius: width * 0.04,
  },
  offlineView: {
    borderBottomWidth: 0.5,
    borderBottomColor: 'black',
    height: height * 0.06,
    justifyContent: 'center',
  },
  offlineText: {
    fontSize: width * 0.04,
    color: '#000',
    fontWeight: 'bold',
  },
  VehicleView: {
    borderBottomWidth: 0.5,
    borderBottomColor: 'grey',
    height: height * 0.06,
    justifyContent: 'center',
  },
  VehicleText: {
    fontSize: width * 0.04,
    color: '#000',
    fontWeight: 'bold',
  },
  languageView: {
    borderBottomWidth: 0.5,
    borderBottomColor: 'black',
    height: height * 0.06,
    justifyContent: 'center',
  },
  languageText: {
    fontSize: width * 0.04,
    color: '#000',
    fontWeight: 'bold',
  },
  NotificationText: {
    fontSize: width * 0.04,
    color: '#000',
    fontWeight: 'bold',
  },
  faQandContactcontainer: {
    backgroundColor: '#f2f2f2',
    marginTop: height * 0.03,
    paddingVertical: '2%',
    paddingHorizontal: '4%',
    borderRadius: width * 0.04,
  },
  FaQView: {
    borderBottomWidth: 0.5,
    borderBottomColor: 'black',
    height: height * 0.06,
    justifyContent: 'center',
  },
  FaQtext: {
    fontSize: width * 0.04,
    color: '#000',
    fontWeight: 'bold',
  },
  contactustext: {
    fontSize: width * 0.04,
    color: '#000',
    fontWeight: 'bold',
  },
  helpfeedbacktext: {
    fontSize: width * 0.04,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});
