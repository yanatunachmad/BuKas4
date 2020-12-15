import React, {Component} from 'react';
import {Image} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {DashboardScreen, BuKasScreen, ProfilScreen, ChatScreen} from './BottomScreen';
const Tab = createBottomTabNavigator();
const ButtomTabBuKas = ()=>{  
    return (
        <Tab.Navigator 
        tabBarOptions={{
          activeTintColor: '#000000',
        }}
        >
          <Tab.Screen 
            name="Dashboard" 
            component={DashboardScreen}
            options={{
              tabBarIcon: ({size}) => (
                <Image
                source={require('../assetimage/house.png')}
                  style={{
                    width: size,
                    height: size,
                  }}/>),
              }}
              />
          <Tab.Screen 
            name="BuKas" 
            component={BuKasScreen}
            options={{
              tabBarIcon: ({size}) => (
                <Image
                source={require('../assetimage/booktab.png')}
                  style={{
                    width: size,
                    height: size,
                  }}/>),
              }}
              />   
          <Tab.Screen 
            name="Chat" 
            component={ChatScreen}
            options={{
              tabBarIcon: ({size}) => (
                <Image
                source={require('../assetimage/chat.png')}
                  style={{
                    width: size,
                    height: size,
                  }}/>),
              }}
              />
          <Tab.Screen 
            name="Profil" 
            component={ProfilScreen}
            options={{
              tabBarIcon: ({size}) => (
                <Image
                source={require('../assetimage/usertab.png')}
                  style={{
                    width: size,
                    height: size,
                  }}/>),
              }}
              />
        </Tab.Navigator>
    );
  }
    
export default ButtomTabBuKas;