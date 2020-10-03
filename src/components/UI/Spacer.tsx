import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

export default function Spacer({ vertical = 15, children }) {
  const propStyles = { marginVertical: vertical };

  return <View style={propStyles}>{children}</View>;
}

Spacer.defaultProps = {
  vertical: 15,
};

Spacer.propTypes = {
  vertical: PropTypes.number,
  children: PropTypes.node.isRequired,
};
