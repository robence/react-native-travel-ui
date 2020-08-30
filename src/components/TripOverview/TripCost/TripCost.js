import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Colors, Sizes } from '../../../constants';

export default function TripCost() {
  return (
    <View style={styles.container}>
      <View style={styles.inline}>
        <Text style={styles.label}>Total cost: </Text>
        <Text style={styles.cost}>1550 kn</Text>
      </View>
      <View style={styles.inline}>
        <Text style={styles.label}>Daily cost/person: </Text>
        <Text style={styles.cost}>310 kn</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 16,
    backgroundColor: Colors.lightBlue,
    borderRadius: 12,
  },
  inline: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 2,
  },
  label: {
    fontFamily: 'Montserrat',
    fontWeight: '500',
    fontSize: 16,
    fontStyle: 'normal',
  },
  cost: {
    fontSize: Sizes.small ? 24 : 32,
    fontFamily: 'Roboto-Bold',
    fontWeight: 'bold',
    color: Colors.primary,
    fontStyle: 'normal',
  },
});
