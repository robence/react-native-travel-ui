import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import { Sizes } from '../../constants';

export default function CardContainer({ children, style, fullScreen = false }) {
  const fullScreenStyle = fullScreen
    ? {
        marginTop: 0,
        marginHorizontal: 0,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
      }
    : {};

  return (
    <View style={{ ...styles.card, ...fullScreenStyle, ...style }}>
      {children}
    </View>
  );
}

CardContainer.defaultProps = {
  fullScreen: false,
};

CardContainer.propTypes = {
  fullScreen: PropTypes.bool,
};

const styles = StyleSheet.create({
  card: {
    paddingTop: 20,
    marginBottom: 10,
    paddingBottom: 10,
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
