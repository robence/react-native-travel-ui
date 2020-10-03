import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';

import { Colors, Sizes } from '../../constants';
import Label from './Label';

type NumberPickerProps = {
  label: string;
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
};

export default function NumberPicker(props: NumberPickerProps) {
  const { label, value, setValue } = props;

  const increment = () => setValue((currValue) => currValue + 1);
  const decrement = () => setValue((currValue) => currValue - 1);

  const decrementDisabled = value === 0;
  const decrementStyle = {
    ...styles.block,
    ...(decrementDisabled ? { opacity: 0.2 } : {}),
  };

  return (
    <View>
      <Label>{label}</Label>
      <View style={styles.inline}>
        <TouchableOpacity
          style={decrementStyle}
          disabled={decrementDisabled}
          onPress={decrement}
        >
          <Text style={styles.blockText}>–</Text>
        </TouchableOpacity>
        <View style={styles.block}>
          <Text style={styles.blockText}>{value}</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.block} onPress={increment}>
            <Text style={styles.blockText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inline: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: Colors.lightBlue,
  },
  block: {
    padding: 10,
    minWidth: Sizes.width / 8,
  },
  blockText: {
    color: Colors.primary,
    fontSize: Sizes.width / 15,
    fontFamily: 'Roboto-Bold',
    fontWeight: 'bold',
  },
});
