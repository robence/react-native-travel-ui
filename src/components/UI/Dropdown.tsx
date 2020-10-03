import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Picker } from '@react-native-community/picker';
import { Ionicons } from '@expo/vector-icons';

import Label from './Label';
import { Colors, Sizes } from '../../constants';

export default function Dropdown({ label, options, value, setValue }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((currState) => !currState);
  };

  const DropDownOptions = () => {
    if (!isOpen) {
      return null;
    }

    return (
      <Picker
        selectedValue={value}
        onValueChange={(itemValue) => {
          setValue(itemValue);
          setIsOpen(false);
        }}
      >
        <Picker.Item label="Options" />
        {options.map((item) => (
          <Picker.Item key={item.title} label={item.title} value={item} />
        ))}
      </Picker>
    );
  };

  return (
    <View>
      <Label>{label}</Label>
      <TouchableWithoutFeedback onPress={toggleDropdown}>
        <View style={styles.inline}>
          <View>
            <Text style={styles.text}>{value.title}</Text>
          </View>
          <View>
            <Text style={styles.text}>
              <Ionicons
                name={isOpen ? 'ios-arrow-up' : 'ios-arrow-down'}
                size={24}
                color={Colors.primary}
              />
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
      <DropDownOptions />
    </View>
  );
}

const styles = StyleSheet.create({
  inline: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    borderRadius: 8,
    backgroundColor: Colors.lightBlue,
  },
  text: {
    color: Colors.primary,
    fontSize: Sizes.width / 20,
    fontFamily: 'Roboto-Bold',
    fontWeight: 'bold',
  },
});
