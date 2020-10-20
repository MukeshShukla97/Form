import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Keyboard} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';

import TextInput from '../CutomTextInput';

const option = [
  {label: 'sdfsdf', value: 'dfsdfsdf'},
  {label: 'sdfsdf', value: 'dfsdfsdf'},
  {label: 'sdfsdf', value: 'dfsdfsdf'},
  {label: 'sdfsdf', value: 'dfsdfsdf'},
];

const CustomDropDown = ({options = option, placeholder, onSelect}) => {
  const [showOption, setShowOption] = useState(false);
  const [selectedOption, setSelected] = useState('');

  const OptionView = ({el}) => {
    return (
      <Animatable.View animation={'fadeInRight'}>
        <TouchableOpacity
          onPress={() => {
            setSelected(el.value);
            if (onSelect) {
              onSelect(el.value);
            }
            setShowOption(false);
          }}>
          <View style={styles.optionContainer}>
            <Text style={styles.optionLabel}>{el.label}</Text>
          </View>
        </TouchableOpacity>
      </Animatable.View>
    );
  };

  return (
    <View>
      <TextInput
        value={selectedOption}
        placeholder={placeholder}
        onFocus={() => {
          setShowOption(true);
          Keyboard.dismiss();
        }}
        autoFocus={false}        
      />
      {options && showOption ? (
        <View style={{marginTop: 5}}>
          {options.map((el, idx) => (
            <OptionView key={idx} el={el} />
          ))}
        </View>
      ) : null}
    </View>
  );
};

export default CustomDropDown;

const styles = StyleSheet.create({
  optionContainer: {
    backgroundColor: '#4da398',
    marginVertical: 5,
    padding: 10,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#000000',
  },
  optionLabel: {
    fontSize: 19,
    fontWeight: '500',
  },
});
