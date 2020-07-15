import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from './HeaderButton';

export default function HamburgerMenu({ navigation }) {
  return (
    <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item
        title="Menu"
        iconName="md-menu"
        onPress={() => navigation.openDrawer()}
        iconSize={30}
      />
    </HeaderButtons>
  );
}
