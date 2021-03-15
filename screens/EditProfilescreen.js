import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Image,
  StatusBar,
} from 'react-native';

import ImagePicker from 'react-native-image-crop-picker';

import {Title} from 'react-native-paper';

import {BottomSheet} from 'react-native-btr';
import Icons from 'react-native-vector-icons/FontAwesome';

const {width, height} = Dimensions.get('window');

const EditProfileScreen = () => {
  const [visible, setVisible] = useState(false);
  const [image, setImage] = useState(image);

  const photoFromGallary = () => {
    ImagePicker.openPicker({
      height: 100,
      width: 100,
      cropping: true,
    }).then((image) => {
      console.log(image);
      setImage(image.path);
    });
  };
  const photoFromCamera = () => {
    ImagePicker.openCamera({
      height: 100,
      width: 100,
      cropping: true,
    }).then((image) => {
      console.log(image);
      setImage(image.path);
    });
  };

  const toggleBottomNavigationView = () => {
    setVisible(!visible);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="dark-content" />
      <View
        style={{
          flex: 1,
          backgroundColor: '#FFF',
          paddingHorizontal: width * 0.07,
          paddingTop: 15,
        }}>
        <BottomSheet
          visible={visible}
          onBackButtonPress={toggleBottomNavigationView}
          onBackdropPress={toggleBottomNavigationView}>
          <View style={styles.bottomNavigationView}>
            <View
              style={{
                flex: 1,
              }}>
              <Text style={styles.bottomsheetheader}>
                Select your media Source
              </Text>
              <Text style={styles.imageformattext}>
                File should be in jpg, png
              </Text>
              <View style={{marginTop: 25}}>
                <TouchableOpacity onPress={photoFromCamera}>
                  <View style={styles.cameraview}>
                    <Icons name="camera" color="#53C5C9" size={20} />
                    <Text style={styles.cameratext}> Camera</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={photoFromGallary}>
                  <View style={styles.Galleryview}>
                    <Icons name="image" color="#53C5C9" size={20} />

                    <Text style={styles.Gallerytext}> Gallery</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </BottomSheet>

        <TouchableOpacity
          onPress={() => setVisible(!visible)}
          activeOpacity={0.7}
          style={{alignSelf: 'center'}}>
          <Image
            source={{
              uri: image,
            }}
            style={{
              height: 100,
              width: 100,
              backgroundColor: 'gray',
              borderRadius: 20,
            }}
          />
        </TouchableOpacity>

        <Title style={{alignSelf: 'center'}}>Jhon Doe</Title>
        <Text style={styles.usernametext}>Username:</Text>
        <TextInput
          textAlignVertical="bottom"
          fontSize={13}
          placeholder=""
          style={styles.Textinput}></TextInput>
        <Text style={styles.Emailtext}>Email:</Text>
        <TextInput
          textAlignVertical="bottom"
          fontSize={13}
          placeholder=""
          style={styles.Textinput}></TextInput>
        <Text style={styles.Passwordtext}>Password:</Text>
        <TextInput
          maxLength={10}
          secureTextEntry={true}
          textAlignVertical="bottom"
          fontSize={13}
          placeholder=""
          style={styles.Textinput}></TextInput>
      </View>
    </SafeAreaView>
  );
};
export default EditProfileScreen;
const styles = StyleSheet.create({
  bottomNavigationView: {
    backgroundColor: '#fff',
    width: '100%',
    height: height * 0.25,
    borderTopLeftRadius: width * 0.07,
    borderTopRightRadius: width * 0.07,
    paddingHorizontal: width * 0.04,
  },
  Textinput: {
    borderBottomWidth: 1,
    width: '100%',
    height: 35,
    borderBottomColor: '#d3d3d3',
  },
  usernametext: {
    fontSize: 11,
    color: '#ABAAAA',
    fontWeight: 'bold',
    marginTop: '10%',
  },
  Emailtext: {
    fontSize: 11,
    color: '#ABAAAA',
    marginTop: 50,
    fontWeight: 'bold',
  },
  Passwordtext: {
    fontSize: 11,
    color: '#ABAAAA',
    marginTop: 50,
    fontWeight: 'bold',
  },
  bottomsheetheader: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
  imageformattext: {
    textAlign: 'center',
    marginTop: 5,
    fontSize: 12,
    fontWeight: 'bold',
  },
  cameratext: {
    fontSize: 18,
    color: '#53C5C9',
    fontWeight: '900',
  },
  cameraview: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: '100%',
    borderBottomWidth: 0.3,
    flexDirection: 'row',
  },
  Gallerytext: {
    fontSize: 18,
    color: '#53C5C9',
    fontWeight: '900',
  },
  Galleryview: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  navigationContainer: {
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: 'center',
  },
});
