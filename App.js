import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import TransactionsNavigator from './TransactionsScreen/TransactionsNavigator';
import Summary from './SummaryScreen/Summary';
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name="Transactions" 
          component={TransactionsNavigator}
          options={{
            headerShown: false,
            tabBarIcon: ({color,size}) => (
              <Ionicons name="newspaper-outline" size={32} color="#2CA87B"/>
            )}}
        />
        <Tab.Screen 
          name="Summary" 
          component={Summary}
          options={{
            labelShown: false,
            tabBarIcon: ({color,size}) => (
              <Ionicons name="menu" size={32} color="#2CA87B"/>
            )}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
