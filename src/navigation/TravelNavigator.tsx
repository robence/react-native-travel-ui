import React from 'react';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerNavigationProp,
} from '@react-navigation/drawer';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import { TripScreen, TripOverviewScreen } from '../screens/trip';
import { CompositeNavigationProp } from '@react-navigation/native';

export type RootStackParamList = {
  TripScreen: undefined;
  TripOverviewScreen: undefined;
};

export type RootDrawerParamList = {
  Trip: undefined;
};

export type HeaderNavigationProp = CompositeNavigationProp<
  StackNavigationProp<RootStackParamList>,
  DrawerNavigationProp<RootDrawerParamList>
>;

const Stack = createStackNavigator<RootStackParamList>();

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primary : '',
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
  headerTitleStyle: {
    fontFamily: 'open-sans-bold',
  },
  headerBackTitleStyle: {
    fontFamily: 'open-sans',
  },
};

function TripNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="TripScreen"
      screenOptions={defaultNavOptions}
      headerMode="none"
    >
      <Stack.Screen name="TripScreen" component={TripScreen} />
      <Stack.Screen name="TripOverviewScreen" component={TripOverviewScreen} />
    </Stack.Navigator>
  );
}

const Drawer = createDrawerNavigator<RootDrawerParamList>();

const MyDrawerIcon = (iconName: string) => (drawerConfig: any) => (
  <Ionicons
    name={Platform.OS === 'android' ? `md-${iconName}` : `ios-${iconName}`}
    size={23}
    color={drawerConfig.color}
  />
);

export default function TravelNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Trip"
      drawerContentOptions={{
        activeTintColor: Colors.primary,
      }}
    >
      <Drawer.Screen
        name="Trip"
        component={TripNavigator}
        options={{
          drawerIcon: MyDrawerIcon('cart'),
        }}
      />
    </Drawer.Navigator>
  );
}
