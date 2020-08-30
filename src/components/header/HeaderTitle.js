import React from 'react';
import { Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

export default function HeaderTitle({ title }) {
  return <Text style={styles.title}>{title}</Text>;
}

HeaderTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

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
