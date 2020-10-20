import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, TextInput, View, Animated} from 'react-native';
import * as Animatable from 'react-native-animatable';

const CustomTextInput = ({
  label,
  isDate,
  step,
  prefixQ,
  onChangeMM,
  onChangeDD,
  onChangeYYYY,
  shake,
  mm,
  dd,
  yyyy,
  ...rest
}) => {
  const [borderColor, setBoarderColor] = useState('rgba(0, 0, 0, 0.56)');
  const shakeAnimation = new Animated.Value(0);

  const startShake = () => {
    Animated.sequence([
      Animated.timing(shakeAnimation, {
        toValue: 10,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: -10,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: 10,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  useEffect(() => {
    // if(shake){
      startShake();
    // }
  }, [shake]);

  return (
    <Animatable.View
      animation={step % 2 === 0 ? 'fadeInDownBig' : 'fadeInRightBig'}>
      <Animated.View style={{transform: [{translateX: shakeAnimation}]}}>
        <Text onPress={() => startShake()} style={styles.label}>
          {prefixQ || 'What is your'}
        </Text>
        <Text style={styles.mainLabel}>
          <Text style={styles.mainLabel}>{label}</Text>? *
        </Text>
        {isDate ? (
          <View style={styles.dateInput}>
            <TextInput
              placeholder="MM"
              value={mm}
              onChangeText={onChangeMM}
              style={{...styles.textInput, borderColor}}
              onFocus={() => setBoarderColor('#000000')}
              onBlur={() => setBoarderColor('rgba(0, 0, 0, 0.56)')}
              autoFocus={true}
              returnKeyType="next"
              maxLength={2}
              {...rest}
            />
            <Text style={styles.dateInputTxt}>/</Text>
            <TextInput
              placeholder="DD"
              value={dd}
              onChangeText={onChangeDD}
              style={{...styles.textInput, borderColor}}
              onFocus={() => setBoarderColor('#000000')}
              onBlur={() => setBoarderColor('rgba(0, 0, 0, 0.56)')}
              returnKeyType="next"
              maxLength={2}
              {...rest}
            />
            <Text style={styles.dateInputTxt}>/</Text>
            <TextInput
              placeholder="YYYY"
              value={yyyy}
              onChangeText={onChangeYYYY}
              style={{...styles.textInput, borderColor}}
              onFocus={() => setBoarderColor('#000000')}
              onBlur={() => setBoarderColor('rgba(0, 0, 0, 0.56)')}
              returnKeyType="next"
              maxLength={4}
              {...rest}
            />
          </View>
        ) : (
          <TextInput
            placeholder="Type your answer here..."
            style={styles.textInput}
            style={{...styles.textInput, borderColor}}
            onFocus={() => setBoarderColor('#000000')}
            autoFocus={true}
            returnKeyType="next"
            {...rest}
          />
        )}
      </Animated.View>
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  secondaryTxt: {
    color: 'rgba(0, 0, 0, 0.56)',
  },
  label: {
    fontSize: 40,
  },
  mainLabel: {
    fontSize: 60,
  },
  textInput: {
    fontSize: 30,
    marginTop: 15,
    borderBottomWidth: 2,
    paddingBottom: 10,
  },
  dateInput: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateInputTxt: {
    fontSize: 30,
    marginHorizontal: 10,
  },
});

export default CustomTextInput;
