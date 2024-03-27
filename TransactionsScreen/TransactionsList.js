import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function TransactionsList({ navigation }) {
  // Data for transactions
 const transactions = [
    { id: 1, name: 'Aritzia', amount: 276.89, location: 'London Ontario', date: 'March 22, 2024' },
    { id: 2, name: 'Subway', amount: 14.34, location: 'London Ontario', date: 'March 22, 2024' },
    { id: 3, name: 'GoodLife Clubs', amount: 148.26, location: 'London Ontario', date: 'March 14, 2024' },
    { id: 4, name: 'Petro Canada', amount: 80.93, location: 'London Ontario', date: 'March 12, 2024' },
    { id: 5, name: 'McDonalds', amount: 24.12, location: 'London Ontario', date: 'March 10, 2024' },
    { id: 6, name: 'Lululemon', amount: 379.23, location: 'London Ontario', date: 'March 10, 2024' },
  ];

  // Function to render each item in the list
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.transactionItem}
      onPress={() => navigation.navigate('TransactionsDetail', { transaction: item })}
    >
      <View style={styles.transactionInfo}>
        <Text style={styles.transactionName}>{item.name}</Text>
        <View style={styles.amountContainer}>
          <Text style={styles.transactionAmount}>${item.amount}</Text>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="#999" />
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={transactions}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()} 
      style={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9f9f9',
    padding: 10,
  },
  transactionItem: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    elevation: 2,
  },
  transactionInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  transactionName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  transactionAmount: {
    fontSize: 14,
    color: '#666',
    marginRight: 10,
  },
  amountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
