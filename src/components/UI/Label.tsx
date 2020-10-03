import { View, StyleSheet, Text } from 'react-native';
import React from 'react';

type LabelProps = {
  children: React.ReactNode;
};

export default function Label(props: LabelProps) {
  const { children } = props;

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
