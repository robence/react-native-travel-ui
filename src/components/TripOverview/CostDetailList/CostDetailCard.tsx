import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Sizes } from '../../../constants';

type CostDetailCardProps = {
  color: string;
  backgroundColor: string;
  label: string;
  text: string;
  Icon: React.ElementType;
};

export default function CostDetailCard(props: CostDetailCardProps) {
  const { color, backgroundColor, label, text, Icon } = props;

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
