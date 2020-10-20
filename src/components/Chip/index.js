import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const Chip = ({selected, label, onSelect}) => {
  return (
    <TouchableOpacity
      onPress={onSelect}
      style={{
        ...styles.chipContainer,
        borderWidth: selected ? 1 : 0.5,
        borderColor: selected ? '#0b423b' : '#1d9687',
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={styles.chipLabel}>{label}</Text>
        {selected ? <Icon name="check" size={30} color="#097a6b" /> : null}
      </View>
    </TouchableOpacity>
  );
};

export default Chip;

const styles = StyleSheet.create({
  chipContainer: {
    width: '40%',
    backgroundColor: '#55cfbf',
    padding: 10,
    borderRadius: 6,
  },
  chipLabel: {
    fontSize: 19,
    fontWeight: '500',
  },
});
