import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function Container({ children, style }) {
  return <View style={{ ...styles.card, ...style }}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    padding: 36,
    margin: 1,
    flex: 1,
    shadowColor: 'black',
    shadowOpacity: 0.15,
    shadowOffset: { width: 4, height: 4 },
    shadowRadius: 16,
    elevation: 5,
    borderRadius: 30,
    backgroundColor: 'white',
  },
});
