import { View, Text, Image } from 'react-native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Screens/Home';
import Chats from './Screens/Chats';
import Settings from './Screens/Settings';
import HelpSupport from './Screens/HelpSupport';

const Drawer = createDrawerNavigator();
const DrawerNav = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerActiveBackgroundColor: '#f2f2f2',
          drawerStyle: {
            backgroundColor: 'orange',
          },
        }}
      >
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            drawerIcon: ({ size, focused }) => {
              return (
                <Image
                  source={require('../../../assets/home.png')}
                  style={{
                    width: size,
                    height: size,
                    tintColor: focused ? 'blue' : 'black',
                  }}
                ></Image>
              );
            },
            drawerLabel: ({ size, focused }) => {
              return (
                <Text
                  style={{ color: focused ? 'blue' : 'black', fontSize: 20 }}
                >
                  {'Home'}
                </Text>
              );
            },
          }}
        />
        <Drawer.Screen
          name="Chats"
          component={Chats}
          options={{
            drawerIcon: ({ size, focused }) => {
              return (
                <Image
                  source={require('../../../assets/Chat.png')}
                  style={{
                    width: size,
                    height: size,
                    tintColor: focused ? 'blue' : 'black',
                  }}
                ></Image>
              );
            },
            drawerLabel: ({ size, focused }) => {
              return (
                <Text
                  style={{ color: focused ? 'blue' : 'black', fontSize: 20 }}
                >
                  {'Home'}
                </Text>
              );
            },
          }}
        />
        <Drawer.Screen
          name="Settings"
          component={Settings}
          options={{
            drawerIcon: ({ size, focused }) => {
              return (
                <Image
                  source={require('../../../assets/setting.png')}
                  style={{
                    width: size,
                    height: size,
                    tintColor: focused ? 'blue' : 'black',
                  }}
                ></Image>
              );
            },
            drawerLabel: ({ size, focused }) => {
              return (
                <Text
                  style={{ color: focused ? 'blue' : 'black', fontSize: 20 }}
                >
                  {'Home'}
                </Text>
              );
            },
          }}
        />
        <Drawer.Screen
          name="HelpSupport"
          component={HelpSupport}
          options={{
            drawerIcon: ({ size, focused }) => {
              return (
                <Image
                  source={require('../../../assets/Help.png')}
                  style={{
                    width: size,
                    height: size,
                    tintColor: focused ? 'blue' : 'black',
                  }}
                ></Image>
              );
            },
            drawerLabel: ({ size, focused }) => {
              return (
                <Text
                  style={{ color: focused ? 'blue' : 'black', fontSize: 20 }}
                >
                  {'Home'}
                </Text>
              );
            },
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNav;
