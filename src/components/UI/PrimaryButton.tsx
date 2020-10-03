import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

import { Colors } from '../../constants';

type PrimaryButtonProps = {
  title: string;
  onPress: () => void;
};

export default function PrimaryButton(props: PrimaryButtonProps) {
  const { title, onPress } = props;

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
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
