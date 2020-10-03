import { View, StyleSheet, Text } from 'react-native';
import React from 'react';

export default function Label({ children }) {
  return (
    <View style={styles.label}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    marginVertical: 10,
  },
  text: {
    fontFamily: 'Montserrat',
    fontWeight: '500',
    fontSize: 16,
  },
});
