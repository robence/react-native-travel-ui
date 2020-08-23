import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function CardContainer({ children, style }) {
  return <View style={{ ...styles.card, ...style }}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    paddingTop: 20,
    paddingBottom: 10,
    paddingBottom: 10,
    marginBottom: 10,
    marginHorizontal: 5,
    marginTop: 5,
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
