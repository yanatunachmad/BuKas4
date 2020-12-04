import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from './SplashScreen';
import LoginScreen from './LoginScreen';
import RegistrationScreen from './RegistrasiScreen';
import OnBoardingSatu from './OnBoardingSatu';
import OnBoardingKedua from './OnBoardingKedua'

const Stack = createStackNavigator();
const StackLayout = () => {
    return(
      <Stack.Navigator>
          <Stack.Screen 
            name="SplashScreen"
            component={SplashScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen 
            name="LoginScreen"
            component={LoginScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen 
            name= "RegistrationScreen"
            component = {RegistrationScreen}
            options ={{headerShown: false}}
          />
          <Stack.Screen 
            name= "OnBoardingSatu"
            component = {OnBoardingSatu}
            options ={{headerShown: false}}
          />
          <Stack.Screen 
            name= "OnBoardingKedua"
            component = {OnBoardingKedua}
            options ={{headerShown: false}}
          />
      </Stack.Navigator>
    );
}

export {StackLayout};