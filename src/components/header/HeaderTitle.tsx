import React from 'react';
import { Text, StyleSheet } from 'react-native';

type HeaderTitleProps = {
  title: string;
};
export default function HeaderTitle({ title }: HeaderTitleProps) {
  return <Text style={styles.title}>{title}</Text>;
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    fontFamily: 'Montserrat-Bold',
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: 29,
  },
});
