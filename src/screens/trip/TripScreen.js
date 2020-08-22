import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';

import {
  CardContainer,
  HamburgerMenu,
  NumberPicker,
  Label,
  PrimaryButton,
  Dropdown,
} from '../../components/UI';
const countries = [{ title: 'Croatia' }, { title: 'Unites States' }];
const currencies = [
  { title: 'Croatian kuna (HRK)' },
  { title: 'Dollar (USD)' },
];

export default function TripScreen({ navigation }) {
  const [travellers, setTravellers] = useState(2);
  const [nights, setNights] = useState(3);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);

  const onCalculate = () => {};

  return (
    <KeyboardAvoidingView
      style={styles.keyboard}
      behavior="padding"
      keyboardVerticalOffset={100}
    >
      <CardContainer>
        <ScrollView contentContainerStyle={styles.keyboard}>
          <View style={{ flexDirection: 'row' }}>
            <HamburgerMenu navigation={navigation} />
          </View>
          <View style={{ marginVertical: 10 }}>
            <Dropdown
              label="Destination country"
              options={countries}
              value={selectedCountry}
              setValue={setSelectedCountry}
            />
          </View>
          <View style={styles.pickerContainer}>
            <NumberPicker
              label="Travellers"
              value={travellers}
              setValue={setTravellers}
            />
            <NumberPicker label="Nights" value={nights} setValue={setNights} />
          </View>
          <Label>Travel style</Label>
          <View style={{ marginBottom: 10 }}>
            <Text>Styles</Text>
          </View>
          <View style={{ marginBottom: 20 }}>
            <Dropdown
              label="Preferred currency"
              options={currencies}
              value={selectedCurrency}
              setValue={setSelectedCurrency}
            />
          </View>
          <PrimaryButton title="Calculate" onPress={onCalculate} />
        </ScrollView>
      </CardContainer>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  keyboard: {
    flex: 1,
  },
  pickerContainer: {
    flexDirection: 'row',
    width: '100%',
    paddingVertical: 10,
    justifyContent: 'space-between',
  },
});
