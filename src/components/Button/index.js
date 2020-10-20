import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

const CustomButton = ({label, onPress}) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.btn}>
      <Text style={styles.btnLabel}>{label}</Text>
    </View>
  </TouchableOpacity>
);

export default CustomButton;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#000000',
    paddingHorizontal: 8,
    paddingVertical: 18,
    borderRadius: 5,
  },
  btnLabel: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center'
  },
});
