import React, {useState} from 'react';
import {StyleSheet, View, Button, Text} from 'react-native';
import * as Animatable from 'react-native-animatable';

import CustomInput from '../CutomTextInput';
import CustomButton from '../Button';

const Form = ({step, setSteps, setToggleIntro}) => {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [address, setAddress] = useState('');
  const [phn, setPhn] = useState('');
  const [mm, setMM] = useState('');
  const [dd, setDD] = useState('');
  const [yyyy, setYYYY] = useState('');
  const [showError, setError] = useState('');
  const [submitted, setSubmit] = useState(false);

  const checkDate = () => {
    if (mm > 0 && mm < 13 && dd > 0 && dd < 32 && yyyy) {
      return true;
    } else {
      setError(true);
      return false;
    }
  };

  const formValidator = () => {
    setError(false)
    if (
      (step === 1 && fname) ||
      (step === 2 && lname) ||
      (step === 3 && checkDate()) ||
      (step === 4 && phn) ||
      (step === 5 && address)
    ) {
      setError(false);
      return true;
    } else {
      setError(true);
      return false;
    }
  };

  const goNext = () => {
    if (formValidator()) {
      if (step === 5) {
        setSubmit(true);
        setSteps(step + 1);
      } else {
        setSteps(step + 1);
      }
    }
  };

  return (
    <>
      <View style={styles.btnContainer}>
        {step > 1 && step < 6 ? (
          <Button
            title="back"
            onPress={() => {
              setSteps(step - 1);
              setError(false)
            }}
            color="#000000"
          />
        ) : (
          <View></View>
        )}
        <Text style={styles.stepper}>
          {`${step -1} of 5 answered`}
        </Text>
        {step < 6 ? (
          <Button
            title={step === 5 ? 'submit' : 'next'}
            onPress={goNext}
            color="#000000"
          />
        ) : null}
      </View>      
      <View style={styles.main}>      
        {step === 1 && (
          <CustomInput
            shake={showError}
            label="first name"
            step={step}
            value={fname}
            onChange={() => setError(false)}
            onChangeText={(txt) => setFname(txt)}
            onSubmitEditing={goNext}
          />
        )}

        {step === 2 && (
          <CustomInput
            shake={showError}
            label="last name"
            step={step}
            value={lname}
            onChange={() => setError(false)}
            onChangeText={(txt) => setLname(txt)}
            onSubmitEditing={goNext}
          />
        )}

        {step === 3 && (
          <CustomInput
            shake={showError}
            label="DOB"
            mm={mm}
            dd={dd}
            yyyy={yyyy}
            onChange={() => setError(false)}
            onChangeMM={(mm) => setMM(mm)}
            onChangeDD={(dd) => setDD(dd)}
            onChangeYYYY={(yyyy) => setYYYY(yyyy)}
            step={step}
            isDate={true}
            onSubmitEditing={goNext}
          />
        )}

        {step === 4 && (
          <CustomInput
            shake={showError}
            step={step}
            value={phn}
            onChange={() => setError(false)}
            onChangeText={(txt) => setPhn(txt)}
            label="phone number"
            placeholder="(201) 555-1234"
            onSubmitEditing={goNext}
          />
        )}

        {step === 5 && (
          <CustomInput
            shake={showError}
            step={step}
            value={address}
            onChange={() => setError(false)}
            onChangeText={(txt) => setAddress(txt)}
            prefixQ={`Lastly, ${fname || 'blabla'},
what is your`}
            label="Address"
            multiline={true}
            onSubmitEditing={goNext}
            returnKeyType="done"
          />
        )}
        {showError ? (
          <Text style={styles.error}>
            {step === 3 ? 'Please enter valid date' : 'Please fill this in'}
          </Text>
        ) : null}

        {submitted ? (
          <Animatable.View animation="flipInX">
            <View style={styles.center}>
              <Text style={styles.thank}>Thanks for your responses.</Text>
              <CustomButton
                label="Start again"
                onPress={() => {
                  setToggleIntro(true);
                  setSteps(1);
                }}                
              />
            </View>
          </Animatable.View>
        ) : null}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
  },
  main: {
    paddingTop: 150,
  },
  error: {
    color: 'rgb(187, 60, 80)',
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: '#fff',
    marginTop: 10,
    padding: 5,
  },
  thank: {
    marginTop: 110,
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  center: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  stepper: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export default Form;
