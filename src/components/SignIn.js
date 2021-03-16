import 'react-native-gesture-handler';
import React from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  Dimensions,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Text,
} from 'react-native';
const {width, height} = Dimensions.get('window');
export default function App({navigation}) {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
      <ScrollView>
        <View
          style={{
            width: width,
            height: height * 0.6,
            paddingHorizontal: width * 0.03,
          }}>
          <Text style={styles.SignInText}>Sign In</Text>
          <Image
            resizeMode="contain"
            style={styles.Logo}
            source={require('../assets/Signinlogo.png')}
          />
          <Text style={styles.welcomeText}>Welcome to Equip Taxi Driver </Text>
          <View>
            <View style={styles.mobilelableview}>
              <Text style={styles.mobilelabletext}>Mobile no.</Text>
            </View>
            <TextInput style={styles.mobileNoInput} />

            <TouchableOpacity>
              <Text style={styles.remembermetext}> Remember me</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('OtpScreen')}
              style={styles.SigninButton}>
              <Text style={styles.SigninButtonText}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            width: width,
            height: height * 0.4,
            paddingHorizontal: width * 0.03,
          }}>
          <Image
            resizeMode="contain"
            style={styles.carImage}
            source={require('../assets/car.png')}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: height * 0.1,
            }}>
            <Text style={styles.Newusertext}> I'm a new user, </Text>
            <TouchableOpacity onPress={() => navigation.push('Signup')}>
              <Text style={styles.SignUptext}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  SignInText: {
    fontSize: width * 0.065,
    fontWeight: 'bold',
    marginTop: height * 0.02,
    color: '#53C5C9',
  },

  Logo: {
    width: width * 0.3,
    height: height * 0.15,
    alignSelf: 'center',
    backgroundColor: 'white',
  },
  welcomeText: {
    fontSize: width * 0.04,
    fontWeight: '900',
    alignSelf: 'center',
  },
  mobileNoInput: {
    borderWidth: width * 0.002,
    borderRadius: width * 0.03,
    borderColor: '#808080',
    marginTop: height * 0.055,
    fontSize: width * 0.04,
  },
  mobilelableview: {
    position: 'absolute',
    backgroundColor: '#FFF',
    top: 25,
    left: 25,
    padding: 5,
    zIndex: 50,
  },

  mobilelabletext: {
    color: 'grey',
  },
  SigninButton: {
    backgroundColor: '#53C5C9',
    justifyContent: 'center',
    height: height * 0.07,
    width: '100%',
    borderRadius: width * 0.04,
    marginTop: height * 0.05,
  },
  SigninButtonText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff',
    fontSize: width * 0.05,
  },
  carImage: {
    opacity: 0.4,
    width: width * 0.5,
    alignSelf: 'center',
    marginTop: height * 0.04,
  },
  newusertext: {
    fontSize: 16,
    fontWeight: '800',
    alignSelf: 'center',
  },
  remembermetext: {
    alignSelf: 'flex-end',
    fontSize: width * 0.04,
    marginTop: width * 0.03,
  },
  Newusertext: {
    fontSize: width * 0.045,
    fontWeight: '500',
    color: '#000',
  },
  SignUptext: {
    fontSize: width * 0.045,
    fontWeight: '900',
    color: '#51B5B9',
  },
});
