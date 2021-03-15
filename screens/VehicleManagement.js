import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Dimensions,
} from 'react-native';
const {width, height} = Dimensions.get('window');

import DropDownPicker from 'react-native-dropdown-picker';

const VehicleManagement = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#FFF',
      }}>
      <ScrollView>
        <View
          style={{
            width: width,
            height: height,
            paddingHorizontal: width * 0.03,
          }}>
          <StatusBar backgroundColor="#fff" barStyle="dark-content" />
          <Text style={styles.TextContainer}>Vehicle Number :</Text>
          <TextInput style={styles.VehicleNotextbox} placeholder=""></TextInput>
          <Text style={styles.TextContainer}>Vehicle Brand :</Text>

          <DropDownPicker
            zIndex={30}
            items={[
              {label: 'Audi', value: 'Audi'},
              {label: 'BMW', value: 'BMW'},
            ]}
            defaultNull
            placeholder="Toyota"
            defaultIndex={0}
            containerStyle={{height: height * 0.08}}
            onChangeItem={(item) => console.log(item.label, item.value)}
          />

          <Text style={styles.TextContainer}>Model :</Text>
          <DropDownPicker
            zIndex={40}
            items={[
              {label: 'Item 1', value: 'item1'},
              {label: 'Item 2', value: 'item2'},
            ]}
            placeholder="Etios"
            defaultIndex={0}
            containerStyle={{height: height * 0.08}}
            onChangeItem={(item) => console.log(item.label, item.value)}
          />

          <Text style={styles.TextContainer}>Year :</Text>
          <DropDownPicker
            zIndex={30}
            items={[
              {label: '2014', value: 'item1'},
              {label: '2015', value: 'item2'},
              {label: '2016', value: 'item2'},
              {label: '2017', value: 'item2'},
              {label: '2018', value: 'item2'},
              {label: '2019', value: 'item2'},
            ]}
            placeholder="2018"
            defaultIndex={0}
            containerStyle={{height: height * 0.08}}
            onChangeItem={(item) => console.log(item.label, item.value)}
          />

          <Text style={styles.TextContainer}>Color :</Text>
          <DropDownPicker
            zIndex={20}
            items={[
              {label: 'Black', value: 'black'},
              {label: 'Neon', value: 'neon'},
            ]}
            placeholder="Silver-grey"
            defaultIndex={0}
            containerStyle={{height: height * 0.08}}
            onChangeItem={(item) => console.log(item.label, item.value)}
          />

          <Text style={styles.TextContainer}>Booking Type :</Text>
          <DropDownPicker
            zIndex={10}
            items={[
              {label: 'Item 1', value: 'item1'},
              {label: 'Item 2', value: 'item2'},
            ]}
            placeholder="Taxi - Economy 6 seat"
            defaultIndex={0}
            containerStyle={{height: height * 0.08}}
            onChangeItem={(item) => console.log(item.label, item.value)}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default VehicleManagement;

const styles = StyleSheet.create({
  TextContainer: {
    fontSize: width * 0.03,
    fontWeight: 'bold',
    color: '#B3B3B3',
    marginTop: height * 0.035,
  },
  VehicleNotextbox: {
    borderRadius: width * 0.015,
    borderWidth: 1,
    width: '100%',
    fontSize: width * 0.045,
    marginTop: height * 0.01,
    fontWeight: 'bold',
    height: height * 0.07,
  },
});
