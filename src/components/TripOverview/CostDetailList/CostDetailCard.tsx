import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import { Sizes } from '../../../constants';

export default function CostDetailCard({
  color,
  backgroundColor,
  label,
  text,
  Icon,
}) {
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <View style={styles.center}>
        <View style={styles.img}>
          <Icon />
        </View>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={[styles.detailsText, styles.label, { color: color }]}>
          {label}
        </Text>
        <Text style={[styles.detailsText, styles.text, { color: color }]}>
          {text}
        </Text>
      </View>
    </View>
  );
}

CostDetailCard.propTypes = {
  color: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  Icon: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    maxWidth: '48%',
    height: 'auto',
    borderRadius: 16,
  },
  center: {
    alignItems: 'flex-end',
  },
  touachable: {
    alignItems: 'center',
  },
  img: {
    marginBottom: 10,
    paddingRight: 5,
    paddingTop: 5,
  },
  detailsContainer: {
    flex: 1,
  },
  detailsText: {
    fontSize: 14,
    fontFamily: 'Montserrat-Bold',
    fontWeight: 'bold',
    textAlign: 'left',
    width: '100%',
    marginLeft: '20%',
  },
  label: {
    marginTop: -30,
  },
  text: {
    paddingBottom: Sizes.small ? Sizes.width / 20 : Sizes.width / 15,
    fontSize: 25,
  },
});
