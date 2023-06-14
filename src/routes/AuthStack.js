import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Onbording from '../screens/authentication/Onbording';
import Signup from '../screens/authentication/Signup';
import Login from '../screens/authentication/Login';


const StackNavigator = createStackNavigator();

const AuthStack = () => {
  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen name="Onboarding" component={Onbording} />
      <StackNavigator.Screen name="Signup" component={Signup} />
      <StackNavigator.Screen name="Login" component={Login} />
    </StackNavigator.Navigator>
  );
};

export default AuthStack;