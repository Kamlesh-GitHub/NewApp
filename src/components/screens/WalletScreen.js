import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const {width, height} = Dimensions.get('window');

const WalletScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
      <ScrollView>
        <View
          style={{
            width: width,
            height: height,
            paddingHorizontal: width * 0.04,
          }}>
          <StatusBar backgroundColor="#fff" barStyle="dark-content" />

          <Image
            style={styles.WalletImage}
            source={require('../src/components/image/WalletImage.png')}
          />
          <TouchableOpacity style={styles.addCardDetail}>
            <MaterialIcon
              name="plus-circle-outline"
              size={25}
              color="#5CCCD0"
            />
            <Text style={styles.addCardText}>Add card Details</Text>
          </TouchableOpacity>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginTop: height * 0.03,
            }}>
            <View style={styles.AvailablebalanceView}>
              <View style={{justifyContent: 'center'}}>
                <MaterialIcon
                  style={{marginHorizontal: width * 0.03}}
                  name="wallet"
                  size={20}
                  color="#FFF"
                />
              </View>
              <View>
                <Text style={styles.AvailableBalanceText}>
                  Available balance :
                </Text>
                <Text style={styles.AvailableAmountText}>$ 6589.57</Text>
              </View>
            </View>

            <View style={styles.TodaybalanceView}>
              <View style={{justifyContent: 'center'}}>
                <MaterialIcon
                  style={{marginHorizontal: width * 0.03}}
                  name="wallet"
                  size={20}
                  color="#FFF"
                />
              </View>

              <View>
                <Text style={styles.TodayText}>Today:</Text>
                <Text style={styles.TodayAmountText}>$ 100.57</Text>
              </View>
            </View>
          </View>

          <View style={styles.DebitCardView}>
            <Image
              style={{margin: width * 0.02}}
              source={require('../src/components/image/cardlogo.png')}></Image>
            <Text style={styles.Debitcardtext}> Debit Card</Text>
            <Text style={styles.Debitcardamounttext}>$ 25.56</Text>
          </View>

          <View style={styles.AmountContainer}>
            <MaterialIcon
              style={{marginHorizontal: width * 0.02}}
              name="cash-multiple"
              size={20}
              color="#5CCCD0"
            />
            <Text> Cash</Text>
            <Text style={{marginLeft: width * 0.5}}>$ 785.58</Text>
          </View>
          <View style={styles.AmountContainer}>
            <MaterialIcon
              style={{marginHorizontal: width * 0.02}}
              name="credit-card-outline"
              size={20}
              color="#5CCCD0"
            />
            <Text>Card Balance</Text>
            <Text style={{marginLeft: width * 0.38}}>$ 1254.35</Text>
          </View>
          <View style={styles.AmountContainer}>
            <MaterialIcon
              style={{marginHorizontal: width * 0.02}}
              name="cash-usd-outline"
              size={20}
              color="#5CCCD0"
            />
            <Text>Net Worth</Text>
            <Text style={{marginLeft: width * 0.43}}>$ 5265.58</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default WalletScreen;

const styles = StyleSheet.create({
  WalletImage: {
    width: width * 0.5,
    alignSelf: 'center',
    marginTop: height * 0.02,
  },
  addCardDetail: {
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: height * 0.02,
  },
  addCardText: {
    alignSelf: 'center',
    fontSize: width * 0.035,
    marginLeft: width * 0.02,
    fontWeight: 'bold',
  },

  AvailablebalanceView: {
    width: width * 0.4,
    height: height * 0.08,
    backgroundColor: '#5CCCD0',
    borderRadius: width * 0.02,
    flexDirection: 'row',
    alignItems: 'center',
  },
  TodaybalanceView: {
    width: width * 0.4,
    height: '100%',
    backgroundColor: '#31A4A9',
    borderRadius: width * 0.02,
    flexDirection: 'row',
    alignItems: 'center',
  },

  AvailableBalanceText: {
    fontSize: width * 0.025,
    color: 'white',
    fontWeight: 'bold',
  },
  AvailableAmountText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: width * 0.04,
  },
  TodayText: {
    fontSize: width * 0.025,
    color: 'white',
    fontWeight: 'bold',
  },
  TodayAmountText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: width * 0.04,
  },
  DebitCardView: {
    flexDirection: 'row',
    marginTop: height * 0.025,
    backgroundColor: '#F1F1F1',
    width: '100%',
    height: height * 0.07,
    alignItems: 'center',
    borderRadius: width * 0.02,
    paddingHorizontal: width * 0.02,
  },
  Debitcardtext: {
    color: 'grey',
    fontSize: width * 0.03,
  },

  Debitcardamounttext: {
    color: 'black',
    fontSize: width * 0.03,
    marginLeft: width * 0.4,
  },

  AmountContainer: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    marginVertical: height * 0.02,
    height: height * 0.065,
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'yellow',
  },
});
