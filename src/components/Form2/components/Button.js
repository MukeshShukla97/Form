import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';

const CustomButton = ({label, onPress, style = {}}) => (
  <Animatable.View animation={'fadeInDownBig'}>
    <TouchableOpacity onPress={onPress} style={style}>
      <View style={styles.btn}>
        <Text style={styles.btnLabel}>{label}</Text>
      </View>
    </TouchableOpacity>
  </Animatable.View>
);

export default CustomButton;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: 'rgb(14, 112, 237)',
    paddingHorizontal: 8,
    paddingVertical: 18,
    borderRadius: 5,
  },
  btnLabel: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
});
