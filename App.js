import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  Dimensions,
  Text,
} from 'react-native';

import Form from './src/components/Form';
import Form2 from './src/components/Form2';
import IntroComponent from './src/components/Intro';

let ScreenHeight = Dimensions.get('window').height;

const App = () => {
  const [step, setSteps] = useState(8);
  const [toggleIntro, setToggleIntro] = useState(true);
  const [demo, switchDemo] = useState(true);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View
            style={{
              ...styles.container,
              backgroundColor: demo ? 'rgb(125, 222, 210)' : '#ffffff',
            }}>
            {toggleIntro ? (
              <Text style={styles.switch} onPress={() => switchDemo(!demo)}>
                Switch demo
              </Text>
            ) : null}

            {demo ? (
              <>
                {toggleIntro ? (
                  <IntroComponent toggleIntro={setToggleIntro} />
                ) : (
                  <Form
                    step={step}
                    setSteps={setSteps}
                    setToggleIntro={setToggleIntro}
                  />
                )}
              </>
            ) : (
              <Form2 />
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: ScreenHeight,
    borderColor: '#000000',
    padding: 30,
  },
  switch: {
    fontSize: 18,
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
});

export default App;
