import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';

import { Colors, Sizes } from '../../constants';
import Label from './Label';

type NumberOperandProps = {
  text: '+' | '–';
  onPress: () => void;
  disabled?: boolean;
};

const NumberOperand = (props: NumberOperandProps) => {
  const { text, onPress, disabled = false } = props;
  const disabledStyle = disabled ? { opacity: 0.2 } : {};

  return (
    <TouchableOpacity
      style={[styles.block, disabledStyle]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.blockText}>{text}</Text>
    </TouchableOpacity>
  );
};

type NumberPickerProps = {
  label: string;
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
};

export default function NumberPicker(props: NumberPickerProps) {
  const { label, value, setValue } = props;

  const increment = () => setValue((currValue) => currValue + 1);
  const decrement = () => setValue((currValue) => currValue - 1);

  return (
    <View>
      <Label>{label}</Label>
      <View style={styles.inline}>
        <NumberOperand text="–" onPress={decrement} disabled={value === 0} />
        <View style={styles.block}>
          <Text style={styles.blockText}>{value}</Text>
        </View>
        <NumberOperand text="+" onPress={increment} />
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
