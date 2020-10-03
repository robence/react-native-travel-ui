import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

type ColoredCardProps = {
  color: string;
  backgroundColor: string;
  label: string;
  Icon: React.ElementType;
};

export default function ColoredCard(props: ColoredCardProps) {
  const { color, backgroundColor, label, Icon } = props;

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

const styles = StyleSheet.create({
  center: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    flexGrow: 1,
    maxWidth: '30%',
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
