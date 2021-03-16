import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Dimensions,
} from 'react-native';

const {width, height} = Dimensions.get('window');

const OtpScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <ScrollView>
        <View
          style={{
            width: width,
            height: height,
            paddingHorizontal: 20,
            backgroundColor: '#fff',
          }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backbuttontouch}>
            <Image
              resizeMode="contain"
              style={styles.backbutton}
              source={require('../assets/backbutton.png')}
            />
          </TouchableOpacity>

          <Image
            resizeMode="contain"
            style={styles.mobilelogo}
            source={require('../assets/mobilelogo.png')}
          />

          <Text style={styles.passcodetext}>Passcode verification</Text>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginTop: height * 0.015,
            }}>
            <Text style={styles.enterpasscodetext}>
              Enter the passcode sent to :
            </Text>
            <TouchableOpacity>
              <Text style={styles.numbertext}>+91 9856252521</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity>
            <Text style={styles.changenumbertext}>
              Change Verification number
            </Text>
          </TouchableOpacity>

          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <TextInput
              maxLength={1}
              placeholderTextColor="#53C5C9"
              placeholder="-"
              style={styles.OtpInput}
            />
            <TextInput
              maxLength={1}
              placeholderTextColor="#53C5C9"
              placeholder="-"
              style={styles.OtpInput}
            />
            <TextInput
              maxLength={1}
              placeholderTextColor="#53C5C9"
              placeholder="-"
              style={styles.OtpInput}
            />
            <TextInput
              maxLength={1}
              placeholderTextColor="#53C5C9"
              placeholder="-"
              style={styles.OtpInput}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text style={styles.Dontreceivesodetext}>
              Don't receive the code ?
            </Text>
            <TouchableOpacity>
              <Text style={styles.ResendCodetext}> Resend Code</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={styles.VerifyandproceedButton}>
            <Text style={styles.Verifyandproceedtext}>Verify & Proceed</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({
  backbuttontouch: {
    width: 20,
    height: 20,
    backgroundColor: '#fff',
    marginTop: 20,
  },
  backbutton: {
    height: 20,
    width: 20,
  },
  mobilelogo: {
    alignSelf: 'center',
    width: '52%',
    height: '35%',
  },

  passcodetext: {
    alignSelf: 'center',
    fontSize: width * 0.045,
    fontWeight: 'bold',
  },
  enterpasscodetext: {
    fontSize: width * 0.035,
    color: 'grey',
  },
  numbertext: {
    fontSize: width * 0.037,

    fontWeight: 'bold',
  },

  changenumbertext: {
    color: '#53C5C9',
    alignSelf: 'center',
    fontWeight: '900',
    fontSize: width * 0.038,
    marginTop: height * 0.03,
  },
  OtpInput: {
    borderRadius: width * 0.02,
    borderWidth: 1,
    width: width * 0.12,
    marginTop: height * 0.05,
    textAlign: 'center',
  },

  Dontreceivesodetext: {
    color: 'grey',
    marginTop: height * 0.05,
  },
  ResendCodetext: {
    fontSize: 15,
    fontWeight: '900',
    color: '#53C5C9',
    marginTop: height * 0.05,
  },
  VerifyandproceedButton: {
    borderRadius: 10,
    backgroundColor: '#53C5C9',
    width: '100%',
    height: 50,
    justifyContent: 'center',
    marginTop: height * 0.07,
  },

  Verifyandproceedtext: {
    fontWeight: 'bold',
    color: '#fff',
    alignSelf: 'center',
    fontSize: width * 0.04,
  },
});
