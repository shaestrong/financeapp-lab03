import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TransactionsDetail({ route }) {
    const { transaction } = route.params;

    return (
      <View>
        <View style = {styles.amountContainer}>
          <Text style = {styles.amount}>${transaction.amount}</Text>
          <Text style = {styles.company}>{transaction.name}</Text>
          <Text style = {styles.location}>{transaction.location}</Text>
        </View>

        <View style = {styles.dateContainer}>
          <Text>Transaction Date</Text>
          <Text>{transaction.date}</Text>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  amountContainer: {
    marginTop: 30,
    margin: 20,
    backgroundColor: '#2CA87B',
    borderRadius: 20,
    padding: 15
  },
  amount: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 30,
    textAlign: 'center',
    padding: 10
  },
  company: {
    color: '#fff',
    fontSize: 15,
    textAlign: 'center'
  },
  location: {
    color: '#fff',
    fontSize: 10,
    textAlign: 'center',
    padding: 5
  },
  dateContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    margin: 8,
    padding: 15,
    borderRadius: 0
  }
})
