import 'react-native-gesture-handler';

import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

import TravelNavigator from './src/navigation';

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    Montserrat: require('./assets/fonts/Montserrat-Medium.ttf'),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState();

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => {
          setFontLoaded(true);
        }}
      />
    );
  }

  return (
    <NavigationContainer>
      <StatusBar hidden />
      <TravelNavigator />
    </NavigationContainer>
  );
}
