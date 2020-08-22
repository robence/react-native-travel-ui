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
} from '../../components/UI';

export default function TripScreen({ navigation }) {
  const [travellers, setTravellers] = useState(2);
  const [nights, setNights] = useState(3);

  const onCalculate = () => {};

  return (
    <KeyboardAvoidingView
      style={styles.keyboard}
      behavior="padding"
      keyboardVerticalOffset={100}
    >
      <ScrollView contentContainerStyle={styles.keyboard}>
        <CardContainer>
          <View style={{ flexDirection: 'row' }}>
            <HamburgerMenu navigation={navigation} />
          </View>
          <View style={{ marginVertical: 10 }}>
            <Label>Destination country</Label>
          </View>
          <Text>Dropdown here</Text>
          <View style={styles.pickerContainer}>
            <NumberPicker
              label="Travellers"
              value={travellers}
              setValue={setTravellers}
            />
            <NumberPicker label="Nights" value={nights} setValue={setNights} />
          </View>
          <Label>Travel style</Label>
          <View style={{ marginBottom: 30 }}>
            <Text>Styles</Text>
          </View>
          <View style={{ paddingVertical: 20 }}>
            <Label>Preferred country</Label>
            <Text />
          </View>
          <PrimaryButton title="Calculate" onPress={onCalculate} />
        </CardContainer>
      </ScrollView>
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
