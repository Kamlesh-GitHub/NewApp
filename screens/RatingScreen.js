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
  TextInput,
  useWindowDimensions,
} from 'react-native';
import {Rating} from 'react-native-ratings';

const RatingScreen = () => {
  const Width = useWindowDimensions().width;
  const Height = useWindowDimensions().height;
  return (
    <ScrollView>
      <View
        style={{
          padding: 20,
          height: Height,
          width: Width,
          backgroundColor: '#fff',
        }}>
        <Text style={styles.ExperienceText}>
          {'How was you experience \n with Mr. John Doe ?'}
        </Text>
        <Image
          style={styles.Ratingimage}
          resizeMode="contain"
          source={require('../src/components/image/Ratingimage.png')}
        />
        <Rating type="star" />
        <Text style={styles.FareText}>Fare - $12.89</Text>
        <Text style={styles.WritecommentText}>Write a comment:</Text>
        <TextInput
          textAlignVertical="top"
          style={styles.commentbox}
          placeholder=""></TextInput>
        <TouchableOpacity style={styles.SubmitButton}>
          <Text style={styles.SubmitText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
export default RatingScreen;

const styles = StyleSheet.create({
  ExperienceText: {
    fontWeight: '900',
    fontSize: 25,
    textAlign: 'center',
    marginTop: '15%',
  },
  Ratingimage: {
    width: '45%',
    height: '25%',
    alignSelf: 'center',
  },
  FareText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: '5%',
  },
  WritecommentText: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: '15%',
  },
  commentbox: {
    height: '15%',
    borderWidth: 0.5,
    marginTop: 10,
    borderRadius: 10,
  },
  SubmitButton: {
    backgroundColor: '#32BDB7',
    borderRadius: 10,
    width: '100%',
    height: '7.5%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '15%',
  },
  SubmitText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#fff',
  },
});
