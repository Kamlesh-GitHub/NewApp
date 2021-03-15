import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const {width, height} = Dimensions.get('window');

const ContactScreen = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#FFF',
      }}>
      <ScrollView>
        <View style={styles.Container}>
          <StatusBar backgroundColor="#FFF" barStyle="dark-content" />

          <Text style={styles.GetaQuoteText}> Get a quote</Text>

          <Text style={styles.DropusText}>
            {
              'Drop us a mail or use our online chat feature\nand we will answer your queries'
            }
          </Text>

          <Image
            style={styles.emailUsimage}
            resizeMode="contain"
            source={require('../src/components/image/emailusimage.png')}
          />

          <TouchableOpacity style={styles.SendemailButton}>
            <Text style={styles.SendemailText}>Send e-mail</Text>
          </TouchableOpacity>
          <View style={{marginTop: height * 0.03}}>
            <Image
              style={styles.ContactUsimage}
              resizeMode="contain"
              source={require('../src/components/image/ContactUs.png')}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default ContactScreen;
const styles = StyleSheet.create({
  Container: {
    height: height,
    width: width,
    paddingHorizontal: width * 0.06,
    // backgroundColor: 'skyblue',
  },
  GetaQuoteText: {
    fontWeight: 'bold',
    fontSize: width * 0.05,
  },
  DropusText: {
    fontWeight: '900',
    fontSize: width * 0.038,
    marginTop: '4%',
  },

  SendemailButton: {
    backgroundColor: '#32BDB7',
    borderRadius: width * 0.03,
    width: '100%',
    height: height * 0.06,
    alignItems: 'center',
    justifyContent: 'center',
  },

  SendemailText: {
    fontWeight: 'bold',
    fontSize: width * 0.047,
    color: '#fff',
  },
  ContactUsimage: {
    width: width * 0.7,
    height: height * 0.2,
    alignSelf: 'center',
    // backgroundColor: 'yellow',
  },
  emailUsimage: {
    width: '100%',
    height: height * 0.45,
    // backgroundColor: 'red',
    marginVertical: height * 0.02,
  },
});
