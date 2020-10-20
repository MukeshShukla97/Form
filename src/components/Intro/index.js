import React from 'react';
import {StyleSheet, Text, ImageBackground, View} from 'react-native';
import * as Animatable from 'react-native-animatable';

import CustomButton from '../Button';

const IntroComponent = ({toggleIntro}) => {
  return (
    <Animatable.Text animation="slideInDown">
      <View style={{flex: 1, marginTop: 110}}>
        <ImageBackground
          source={{
            uri:
              'https://images.typeform.com/images/J732wcevQAqJ/background/large',
          }}
          style={styles.introContainer}>
          <Text style={styles.primaryTxt}>Personal information form</Text>
          <Text style={styles.secondaryTxt}>
            Don't worry, we'll keep all of your data on our secure servers and
            will never disclose it to any third parties.{' '}
          </Text>
          <CustomButton label="Start" onPress={() => toggleIntro(false)} />
        </ImageBackground>
      </View>
    </Animatable.Text>
  );
};

const styles = StyleSheet.create({
  introContainer: {
    flex: 0.8,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  primaryTxt: {
    fontSize: 30,
  },
  secondaryTxt: {
    color: 'rgba(0, 0, 0, 0.56)',
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 20,
  },
});

export default IntroComponent;
