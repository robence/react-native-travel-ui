/* eslint-disable no-shadow */
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';

import { Header } from '../../components/header';
import { SelectHandler } from '../../components/headless';
import { ColoredCardList } from '../../components/Trip';
import {
  CardContainer,
  NumberPicker,
  PrimaryButton,
  Dropdown,
  Spacer,
} from '../../components/UI';
import { RootStackParamList } from '../../navigation/TravelNavigator';

const countries = [{ title: 'Croatia' }, { title: 'Unites States' }];
const currencies = [
  { title: 'Croatian kuna (HRK)' },
  { title: 'Dollar (USD)' },
];

type FormData = {
  travellers: number;
  nights: number;
};

type TripScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'TripScreen'
>;

type TripScreenProps = {
  navigation: TripScreenNavigationProp;
};

export default function TripScreen({ navigation }: TripScreenProps) {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);

  const onCalculate = (data: FormData) => {
    console.log(data);
    navigation.navigate('TripOverviewScreen');
  };

  const { control, handleSubmit } = useForm<FormData>();

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
              <Controller
                control={control}
                render={({ onChange, value }) => (
                  <NumberPicker
                    label="Travellers"
                    value={value}
                    setValue={(value) => onChange(value)}
                  />
                )}
                name="travellers"
                defaultValue={2}
              />

              <Controller
                control={control}
                render={({ onChange, value }) => (
                  <NumberPicker
                    label="Nights"
                    value={value}
                    setValue={(value) => onChange(value)}
                  />
                )}
                name="nights"
                defaultValue={3}
              />
            </View>
          </Spacer>
          <Spacer>
            <SelectHandler>
              {({ selected, setSelected }) => (
                <ColoredCardList
                  selected={selected}
                  setSelected={setSelected}
                />
              )}
            </SelectHandler>
          </Spacer>
          <Spacer>
            <Dropdown
              label="Preferred currency"
              options={currencies}
              value={selectedCurrency}
              setValue={setSelectedCurrency}
            />
          </Spacer>
          <View style={styles.bottom}>
            <Spacer>
              <PrimaryButton
                title="Calculate"
                onPress={handleSubmit(onCalculate)}
              />
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
