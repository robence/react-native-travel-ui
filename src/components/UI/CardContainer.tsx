import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

type CardContainerProps = {
  fullScreen?: boolean;
  style?: ViewStyle;
  children: React.ReactNode;
};

export default function CardContainer(props: CardContainerProps) {
  const { children, style, fullScreen = false } = props;

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
