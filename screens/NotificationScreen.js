import 'react-native-gesture-handler';
import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import Icons from 'react-native-vector-icons/MaterialIcons';

const {width, height} = Dimensions.get('window');

const App = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView>
        <View style={styles.Container}>
          <StatusBar barStyle="dark-content" backgroundColor="#fff"></StatusBar>

          <Text style={styles.markreadtext}>Mark all as read</Text>
          <View style={styles.MessageContainer}>
            <Icons
              style={styles.Icons}
              name="notification-important"
              size={30}
              color="#2CCFDD"
            />
            <Text style={styles.ReadNotificationText}>
              Reward Received{'\n'}Reward Credited in your account
              successfully...
            </Text>
            <Text style={styles.NotificationTimeText}>57 min ago</Text>
          </View>
          <View style={styles.MessageContainer}>
            <Icons
              style={styles.Icons}
              name="notification-important"
              size={30}
              color="#2CCFDD"
            />
            <Text style={styles.ReadNotificationText}>
              Invite Friends{'\n'}Reward Credited in your account
              successfully...
            </Text>
            <Text style={styles.NotificationTimeText}>1day ago</Text>
          </View>
          <View style={styles.MessageContainer}>
            <Icons
              style={styles.Icons}
              name="notification-important"
              size={30}
              color="#A5DCE5"
            />
            <View>
              <Text style={styles.UnreadNotificationText}>
                Promotions{'\n'}Reward Credited in your account successfully...
              </Text>
            </View>
            <Text style={styles.NotificationTimeText}>2days ago</Text>
          </View>
          <View style={styles.MessageContainer}>
            <Icons
              style={styles.Icons}
              name="notification-important"
              size={30}
              color="#A5DCE5"
            />

            <View>
              <Text style={styles.UnreadNotificationText}>
                Reward Received{'\n'}Reward Credited in your account
                successfully...
              </Text>
            </View>
            <Text style={styles.NotificationTimeText}>5days ago</Text>
          </View>
          <View style={styles.MessageContainer}>
            <Icons
              style={styles.Icons}
              name="notification-important"
              size={30}
              color="#2CCFDD"
            />

            <View>
              <Text style={styles.ReadNotificationText}>
                Reward Received{'\n'}Reward Credited in your account
                successfully...
              </Text>
            </View>
            <Text style={styles.NotificationTimeText}>1week ago</Text>
          </View>
          <View style={styles.MessageContainer}>
            <Icons
              style={styles.Icons}
              name="notification-important"
              size={30}
              color="#A5DCE5"
            />

            <View>
              <Text style={styles.UnreadNotificationText}>
                Cashback Offers 20%{'\n'}Reward Credited in your account
                successfully...
              </Text>
            </View>
            <Text style={styles.NotificationTimeText}>2weeks ago</Text>
          </View>
          <View style={styles.MessageContainer}>
            <Icons
              name="notification-important"
              size={30}
              color="#A5DCE5"
              style={styles.Icons}
            />

            <View>
              <Text style={styles.UnreadNotificationText}>
                Reward Received{'\n'}Reward Credited in your account
                successfully...
              </Text>
            </View>
            <Text style={styles.NotificationTimeText}>1month ago</Text>
          </View>
          <Image
            style={styles.signimage}
            source={require('../src/components/image/notificationimage.png')}
            resizeMode="contain"
            style={styles.NotificationImage}></Image>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default App;

const styles = StyleSheet.create({
  Container: {
    width: width,
    height: height,
    paddingHorizontal: width * 0.03,
  },
  markreadtext: {
    fontSize: width * 0.03,
    color: '#2CCFDD',
    marginTop: height * 0.02,
    alignSelf: 'flex-end',
    fontWeight: 'bold',
  },
  Icons: {
    marginRight: width * 0.02,
    alignSelf: 'center',
  },
  MessageContainer: {
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    marginTop: height * 0.01,
    height: height * 0.07,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    paddingHorizontal: width * 0.02,
  },
  UnreadNotificationText: {
    fontSize: width * 0.035,
    color: 'grey',
  },
  ReadNotificationText: {
    fontSize: width * 0.035,
    color: 'black',
  },
  NotificationTimeText: {
    fontSize: width * 0.02,
    color: 'grey',
    fontWeight: 'bold',
  },
  NotificationImage: {
    width: '35%',
    height: '25%',
    alignSelf: 'center',
    opacity: 0.4,
  },
});
