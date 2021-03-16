import 'react-native-gesture-handler';
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

import AsyncStorage from '@react-native-community/async-storage';

import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

const {width, height} = Dimensions.get('window');

const Signup = ({navigation}) => {
  const [secureEntry, setSecureEntry] = useState(false);
  const [name, setName] = useState('');
  const SignUp = () => {
    AsyncStorage.setItem('setFullName', name);
    navigation.navigate('OtpScreen');
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />

        <View
          style={{
            height: height * 0.65,
            width: width,
            paddingHorizontal: '5%',
            paddingVertical: '3%',
          }}>
          <Text style={styles.signUpText}>Sign Up</Text>
          <Image
            style={styles.Logo}
            resizeMode="contain"
            source={require('../assets/Logo.png')}
          />

          <Text style={styles.welcomeText}>Welcome to Equip Taxi Driver</Text>
          <View>
            <View style={styles.TextInputView}>
              <View style={styles.lableview}>
                <Text style={styles.namelabletext}>Full name</Text>
              </View>
              <TextInput
                onChangeText={(text) => {
                  setName(text);
                }}
                style={styles.InputBox}
              />
            </View>

            <View>
              <View style={styles.lableview}>
                <Text style={styles.mobilelabletext}>Mobile no.</Text>
              </View>
              <TextInput style={styles.InputBox} />
            </View>

            <View>
              <View style={styles.lableview}>
                <Text style={styles.Emaillabletext}>E - mail</Text>
              </View>
              <TextInput
                onChangeText={(text) => {
                  setEmail(text);
                }}
                style={styles.InputBox}
              />
            </View>
          </View>
          <View>
            <View style={styles.lableview}>
              <Text style={styles.passwordlabletext}>Password</Text>
            </View>
            <View style={styles.passwordview}>
              <TextInput
                style={{
                  fontSize: width * 0.04,

                  width: width * 0.8,
                }}
                secureTextEntry={secureEntry}
              />
              <Icons
                onPress={() => setSecureEntry(!secureEntry)}
                style={{alignSelf: 'center', right: '20%'}}
                name={secureEntry === false ? 'eye-outline' : 'eye-off-outline'}
                size={25}
                color="gray"
              />
            </View>
          </View>
        </View>

        <View
          style={{
            height: height * 0.35,
            width: width,
            paddingHorizontal: '5%',
            paddingVertical: '3%',
            // backgroundColor: 'yellow',
          }}>
          <TouchableOpacity onPress={SignUp} style={styles.SignupButton}>
            <Text style={styles.SignupButtonText}>Sign Up</Text>
          </TouchableOpacity>
          <Image
            resizeMode="contain"
            style={styles.carImage}
            source={require('../assets/car.png')}
          />

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text style={styles.Alreadytext}> I'm already a member, </Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
              <Text style={styles.signtext}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  signUpText: {
    fontSize: width * 0.06,
    fontWeight: 'bold',
    color: '#53C5C9',
    marginTop: height * 0.02,
  },
  Logo: {
    height: height * 0.13,
    alignSelf: 'center',
  },

  welcomeText: {
    fontSize: width * 0.04,
    fontWeight: '800',
    alignSelf: 'center',
    marginTop: '3%',
  },

  TextInputView: {
    marginTop: '2%',
  },

  lableview: {
    position: 'absolute',
    backgroundColor: '#FFF',
    top: -5,
    left: 25,
    padding: 5,
    zIndex: 50,
  },

  namelabletext: {
    color: 'grey',
  },

  mobilelabletext: {
    color: 'grey',
  },

  InputBox: {
    borderWidth: 1,
    borderRadius: width * 0.03,
    borderColor: '#4DD7DC',
    marginVertical: '2.5%',
    fontSize: width * 0.04,
  },

  Emaillabletext: {
    color: 'grey',
  },

  passwordlabletext: {
    color: 'grey',
  },

  SignupButton: {
    backgroundColor: '#53C5C9',
    justifyContent: 'center',
    height: height * 0.065,
    width: '100%',
    borderRadius: width * 0.03,
  },
  SignupButtonText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff',
    fontSize: width * 0.05,
  },
  carImage: {
    opacity: 0.4,
    width: width * 0.4,
    alignSelf: 'center',
    marginTop: height * 0.005,
  },
  Alreadytext: {
    fontSize: width * 0.04,
    fontWeight: '800',
    alignSelf: 'center',
  },
  signtext: {
    fontSize: width * 0.045,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: '#51B5B9',
  },
  passwordview: {
    borderWidth: 1,
    borderRadius: width * 0.03,
    borderColor: '#4DD7DC',
    marginVertical: '2.5%',
    fontSize: width * 0.03,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Signup;
