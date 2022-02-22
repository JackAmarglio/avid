import React from 'react';
import {Icon} from 'native-base';
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
          // tabBarIcon: ({color}) => <Icon as={MaterialIcons} name="introduce" size="6" color={color} />,
        }}
        component={Introduce}
      />
      <Tab.Screen
        name="Verify"
        options={{
          tabBarLabel: 'Verify',
          // tabBarIcon: ({color}) => <Icon as={MaterialIcons} name="verify" size="6" color={color} />,
        }}
        component={Verify}
      />
      <Tab.Screen
        name="Description"
        options={{
          tabBarLabel: 'Description',
          // tabBarIcon: ({color}) => <Icon as={MaterialIcons} name="description" size="6" color={color} />,
        }}
        component={Description}
      />
    </Tab.Navigator>
  );
};
