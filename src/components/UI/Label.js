import { View, StyleSheet, Text } from 'react-native';
import React from 'react';

export default function Label({ children }) {
  return (
    <View style={styles.label}>
      <Text>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 18,
    fontWeight: '500',
    marginVertical: 10,
  },
});
