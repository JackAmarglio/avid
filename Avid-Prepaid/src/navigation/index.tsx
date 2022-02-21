import React, { useState, useEffect } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Splash from 'screens/Splash';
import Landing from 'screens/Landing';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};

export type RootStackParamList = {
  Landing: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

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
        <Stack.Screen name="Landing" component={Landing} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
