import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import * as firebase from 'firebase/app';
import 'firebase/database';

export default function TransactionsList({ navigation }) {
  const [transactions, setTransactions] = React.useState([]);

  // Load transactions from Firebase on component mount
  React.useEffect(() => {
    const database = firebase.database();
    const transactionsRef = database.ref('transactions');
    transactionsRef.once('value', (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const transactionsArray = Object.values(data);
        setTransactions(transactionsArray);
      }
    });
  }, []);

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
