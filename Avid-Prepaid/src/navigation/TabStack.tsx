import React from 'react';
import {Icon, Image} from 'native-base';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Introduce from 'screens/Introduce';
import Verify from 'screens/Verify';
import Description from 'screens/Description';

export type TabStackParamList = {
  Introduce: undefined;
  Verify: undefined;
  Description: undefined;
};

const Tab = createBottomTabNavigator<TabStackParamList>();

export const TabStack = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Introduce"
        options={{
          tabBarLabel: 'Introduce',
          tabBarIcon: () => <Image source={require('assets/introduce.jpg')} size='6' />,
        }}
        component={Introduce}
      />
      <Tab.Screen
        name="Verify"
        options={{
          tabBarLabel: 'Verify',
          tabBarIcon: () => <Image source={require('assets/verify_blog.jpg')} size='8' mt="0.5" />,
        }}
        component={Verify}
      />
      <Tab.Screen
        name="Description"
        options={{
          tabBarLabel: 'Description',
          tabBarIcon: () => <Image source={require('assets/description.jpg')} size='6' />,
        }}
        component={Description}
      />
    </Tab.Navigator>
  );
};
