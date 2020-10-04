import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

import { Colors } from '../../constants';

type PrimaryButtonProps = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
};

export default function PrimaryButton(props: PrimaryButtonProps) {
  const { title, onPress, disabled } = props;

  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <View style={[styles.container, disabled ? styles.disabled : {}]}>
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
  disabled: {
    opacity: 0.5,
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
