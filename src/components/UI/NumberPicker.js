import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

import { Colors, Sizes } from '../../constants';
import Label from './Label';

export default function NumberPicker({ label, value, setValue }) {
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

NumberPicker.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  setValue: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  inline: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: Colors.lightBlue,
  },
  block: {
    padding: 10,
    backgroundColor: Colors.lightBlue,
    minWidth: Sizes.width / 9,
  },
  blockText: {
    color: Colors.primary,
    fontSize: Sizes.width / 15,
    fontFamily: 'Roboto-Bold',
    fontWeight: 'bold',
  },
});
