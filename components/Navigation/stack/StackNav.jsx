import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import ScreenA from './screens/ScreenA';
import ScreenB from './screens/ScreenB';

const Stack = createStackNavigator();

const StackNav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ScreenA"
          component={ScreenA}
          options={{
            title: 'Screen A',
            headerStyle: {
              backgroundColor: 'blue',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontSize: 20,
            },
            headerBackTitleStyle: {
              fontSize: 20,
            },
            headerBackTitle: 'Back',
          }}
        />
        <Stack.Screen
          name="ScreenB"
          component={ScreenB}
          options={{ title: 'Screen B', headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNav;

const styles = StyleSheet.create({});

//* stack navigator
// add screens
//moving b/w screen using navigation
//passing data b/w screens
