import React, {Component} from 'react';
import {Image} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {DashboardScreen, BuKasScreen, ProfilScreen} from './BottomScreen';

const Tab = createBottomTabNavigator();
const ButtomTabBuKas = ()=>{  
    return (
        <Tab.Navigator>
          <Tab.Screen name="Dashboard" component={DashboardScreen}/>
          <Tab.Screen name="BuKas" component={BuKasScreen} />
          <Tab.Screen name="Profil" component={ProfilScreen}/>
        </Tab.Navigator>
    );
  }
    
export default ButtomTabBuKas;