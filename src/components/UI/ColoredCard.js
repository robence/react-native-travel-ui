import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ColoredCard({ color, backgroundColor, label, Icon }) {
  return (
    <View style={[styles.center, { backgroundColor }]}>
      <View style={styles.img}>
        <Icon />
      </View>
      <View>
        <Text style={[styles.text, { color: color }]}>{label}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    flexGrow: 1,
    maxWidth: '30%',
    borderRadius: 16,
  },
  img: {
    marginBottom: 10,
  },
  text: {
    fontSize: 14,
    fontFamily: 'Montserrat-Bold',
    fontWeight: 'bold',
  },
});
