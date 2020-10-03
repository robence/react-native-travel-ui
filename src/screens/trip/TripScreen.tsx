import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';

import { Header } from '../../components/header';
import { ColoredCardList } from '../../components/Trip';
import {
  CardContainer,
  NumberPicker,
  PrimaryButton,
  Dropdown,
  Spacer,
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

  const onCalculate = () => {
    navigation.navigate('TripOverviewScreen');
  };

  return (
    <KeyboardAvoidingView
      style={styles.keyboard}
      behavior="padding"
      keyboardVerticalOffset={100}
    >
      <CardContainer>
        <Header />
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.scrollContainer}
        >
          <Spacer>
            <Dropdown
              label="Destination country"
              options={countries}
              value={selectedCountry}
              setValue={setSelectedCountry}
            />
          </Spacer>
          <Spacer>
            <View style={styles.pickerContainer}>
              <NumberPicker
                label="Travellers"
                value={travellers}
                setValue={setTravellers}
              />
              <NumberPicker
                label="Nights"
                value={nights}
                setValue={setNights}
              />
            </View>
          </Spacer>
          <Spacer>
            <ColoredCardList />
          </Spacer>
          <Spacer>
            <Dropdown
              label="Preferred currencyy"
              options={currencies}
              value={selectedCurrency}
              setValue={setSelectedCurrency}
            />
          </Spacer>
          <View style={styles.bottom}>
            <Spacer>
              <PrimaryButton title="Calculate" onPress={onCalculate} />
            </Spacer>
          </View>
        </ScrollView>
      </CardContainer>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  keyboard: {
    flex: 1,
  },
  scroll: {
    flex: 1,
    paddingHorizontal: 20,
  },
  scrollContainer: {
    minHeight: '90%',
    justifyContent: 'flex-start',
  },
  pickerContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  bottom: {
    marginTop: 'auto',
  },
});
