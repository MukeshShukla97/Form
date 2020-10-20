import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';

import CustomTextInput2 from './components/TextInput';
import Button from './components/Button';

const Form2 = () => {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [address, setAddress] = useState('');
  const [dob, setDob] = useState('');
  const [phn, setPhn] = useState('');
  const [focus, setfocus] = useState(1);
  const [formErr, setFromErr] = useState({});
  const handlePhnChange = (e) => {
    if (phn.length === 1 && phn[0] !== '(') {
      setPhn(`(${e}`);
    } else if (phn.length === 3 && phn[3] !== ' ' && phn[2] !== ')') {
      setPhn(`${e}) `);
    } else if (phn.length === 8 && phn[7] !== '-') {
      setPhn(`${e}-`);
    } else {
      setPhn(e);
    }
  };

  const goNext = () => {
      setfocus(focus+1)
  }

  const handleSubmit = () => {

  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={60}
      enabled
      style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
      <ScrollView>
        <Text style={styles.heading}>Personal Information</Text>
        <CustomTextInput2 
        label="First name *" 
        onSubmitEditing={goNext}
        returnKeyType="next"
        error={fnameErr}
        />
        <CustomTextInput2 
        label="Last name *" 
        autoFocus={focus === 2}
        onSubmitEditing={goNext}
        returnKeyType="next"
        />
        <CustomTextInput2
          label="DOB *"
          isDate={true}
          autoFocus={focus === 3}
          placeholder={'dd/mm/yyyy'}
          setDob={setDob}
          value={dob}
          goNext={goNext}
          returnKeyType="next"
        />
        <CustomTextInput2
          label="Phone Number *"
          autoFocus={focus === 4}
          value={phn}
          placeholder="(555) 555-5555"
          maxLength={14}
          onChangeText={handlePhnChange}
          returnKeyType="next"
          keyboardType='phone-pad'
        />
        <CustomTextInput2 label="Address *" />
        <Button label="Submit" style={{marginTop: 30}} onPress={handleSubmit} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Form2;

const styles = StyleSheet.create({
  heading: {
    fontSize: 25,
    textAlign: 'center',
    marginTop: 10,
    borderColor: 'rgb(31, 127, 255)',
    borderBottomWidth: 3,
  },
});
