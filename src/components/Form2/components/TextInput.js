import React, {useEffect, useRef, useState} from 'react';
import {TextInput, Text, StyleSheet, View} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as Animatable from 'react-native-animatable';

const CustomTextInput2 = ({label, placeholder, isDate, setDob, error, ...rest}) => {
  const [newdate, setDate] = useState(new Date(1598051730000));
  const [border, setBorder] = useState('rgba(31, 127, 255, 0.3)');
  const [show, setShow] = useState(false);
  const animationViewRef = useRef(null);

  useEffect(() => {
    if(error){
      setBorder('rgb(187, 60, 80)');
      animationViewRef.current.shake()
    }else{
      setBorder('rgba(31, 127, 255, 0.3)');      
    }    
  },[error])

  const onChange = (event, selectedDate) => {
    let dd = selectedDate.getDate();
    let mm = selectedDate.getMonth() + 1;
    const yyyy = selectedDate.getFullYear();
    setDob(`${dd}/${mm}/${yyyy}`);
    setShow(false);
  };  

  return (
    <Animatable.View
      ref={animationViewRef}
      animation={'fadeInRightBig'}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>{label}</Text>
        <TextInput          
          placeholder={placeholder || 'Type your answer here...'}
          placeholderTextColor="rgba(31, 127, 255, 0.3)"
          onFocus={() => {
            setBorder('rgb(31, 127, 255)');
            if (isDate) {
              setShow(true);
            }
          }}
          onBlur={() => setBorder('rgba(31, 127, 255, 0.3)')}
          style={{
            ...styles.inputText,
            borderColor: border,
            borderBottomWidth: 3,
          }}
          {...rest}
        />
        {show && (
          <DateTimePicker
            value={newdate}
            mode={'date'}
            display="inline"
            dateFormat="shortdate"
            onChange={onChange}
          />
        )}
        {
          error && (
            <Text style={styles.error}>Please fill this in</Text>
          )
        }        
      </View>
    </Animatable.View>
  );
};

export default CustomTextInput2;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 30,
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  inputText: {
    fontSize: 25,
    fontWeight: '600',
    paddingBottom: 5,
    color: 'rgb(31, 127, 255)',
  },
  error: {
    color: 'rgb(187, 60, 80)',
    fontSize: 15,
    fontWeight: 'bold',    
    marginTop: 5,    
  }
});
