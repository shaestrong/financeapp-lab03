import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TransactionsList from './TransactionsList';
import TransactionsDetail from './TransactionsDetail';

const Stack = createStackNavigator();

export default function TransactionsNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#2CA87B', // Change the background color here
        },
        headerTintColor: '#fff', // Change the text color of the header
      }}
    >
      <Stack.Screen
        name="TransactionsList"
        component={TransactionsList}
        options={{ title: 'Transactions List' }}
      />
      <Stack.Screen
        name="TransactionsDetail"
        component={TransactionsDetail}
        options={{ title: 'Transaction Details'}} 
      />
    </Stack.Navigator>
  );
}
