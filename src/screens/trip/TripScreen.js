import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';

import { Header } from '../../components/header';
import {
  CardContainer,
  NumberPicker,
  Label,
  PrimaryButton,
  Dropdown,
  ColoredCard,
  Spacer,
} from '../../components/UI';
import { Colors } from '../../constants';
import { Budget, MidClass, Luxury } from '../../components/svg';

const countries = [{ title: 'Croatia' }, { title: 'Unites States' }];
const currencies = [
  { title: 'Croatian kuna (HRK)' },
  { title: 'Dollar (USD)' },
];

export default function TripScreen() {
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
        <Header />
        <ScrollView style={styles.container}>
          <Spacer>
            <Dropdown
              label="Destination country"
              options={countries}
              value={selectedCountry}
              setValue={setSelectedCountry}
            />
          </Spacer>
          <View style={styles.pickerContainer}>
            <NumberPicker
              label="Travellers"
              value={travellers}
              setValue={setTravellers}
            />
            <NumberPicker label="Nights" value={nights} setValue={setNights} />
          </View>
          <Spacer>
            <Label>Travel style</Label>
            <View style={styles.inlineCards}>
              <ColoredCard
                label="Budget"
                color={Colors.red}
                backgroundColor={Colors.lightRed}
                Icon={Budget}
              />
              <ColoredCard
                label="Mid-class"
                color={Colors.yellow}
                backgroundColor={Colors.lightYellow}
                Icon={MidClass}
              />
              <ColoredCard
                label="Luxury"
                color={Colors.primary}
                backgroundColor={Colors.lightBlue}
                Icon={Luxury}
              />
            </View>
          </Spacer>
          <Spacer>
            <Dropdown
              label="Preferred currency"
              options={currencies}
              value={selectedCurrency}
              setValue={setSelectedCurrency}
            />
          </Spacer>
          <Spacer>
            <PrimaryButton title="Calculate" onPress={onCalculate} />
          </Spacer>
        </ScrollView>
      </CardContainer>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  keyboard: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  pickerContainer: {
    flexDirection: 'row',
    width: '100%',
    paddingVertical: 10,
    justifyContent: 'space-between',
  },
  inlineCards: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
