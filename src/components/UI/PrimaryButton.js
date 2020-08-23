import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import { Colors } from '../../constants';

export default function PrimaryButton({ title, onPress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    backgroundColor: Colors.primary,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    fontFamily: 'Roboto-Bold',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

PrimaryButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};
