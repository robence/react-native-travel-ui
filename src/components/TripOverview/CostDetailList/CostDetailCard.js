import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function CostDetailCard({
  color,
  backgroundColor,
  label,
  text,
  Icon,
}) {
  return (
    <View style={[styles.center, { backgroundColor }]}>
      <TouchableOpacity style={styles.touachable} onPress={() => {}}>
        <View style={styles.img}>
          <Icon />
        </View>
        <View>
          <Text style={[styles.text, { color: color }]}>{label}</Text>
        </View>
      </TouchableOpacity>
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
  center: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    flexGrow: 1,
    maxWidth: '48%',
    borderRadius: 16,
  },
  touachable: {
    alignItems: 'center',
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
