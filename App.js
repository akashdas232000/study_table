import React from 'react';
import {View,Text} from 'react-native';

import OTPScreen from './screens/OTPScreen';
import EnterOTP from './screens/EnterOTP';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const App=()=>{

  const Stack = createNativeStackNavigator();


  return( 
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{
        headerShown: false
      }}
      >
        <Stack.Screen name="OTPScreen" component={OTPScreen} />
        <Stack.Screen name="EnterOTP" component={EnterOTP} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;