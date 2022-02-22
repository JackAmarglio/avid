import React, { useState, useEffect } from 'react';
import { NavigationContainer, DefaultTheme, NavigatorScreenParams } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from 'screens/Splash';
import Landing from 'screens/Landing';
import Introduce from "screens/Introduce";
import Verify from 'screens/Verify';
import Description from 'screens/Description';
import {TabStack, TabStackParamList} from './TabStack';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};

const Stack = createStackNavigator<RootStackParamList>();


export type RootStackParamList = {
  Landing: undefined;
  TabStack: NavigatorScreenParams<TabStackParamList>;
};


const Navigation = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const bootstrap = async () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    };

    bootstrap();
  }, []);

  if (isLoading) {
    // We haven't finished checking for the token yet
    return <Splash />;
  }

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="Introduce" component={Introduce} />
        <Stack.Screen name="Verify" component={Verify} />
        <Stack.Screen name="Description" component={Description} /> */}
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="TabStack" component={TabStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
