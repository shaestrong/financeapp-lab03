import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as firebase from 'firebase/app';
import 'firebase/database';

export default function Summary() {
  const [transactionsCount, setTransactionsCount] = React.useState(0);
  const [totalExpenditure, setTotalExpenditure] = React.useState(0);

  React.useEffect(() => {
    const database = firebase.database();
    const transactionsRef = database.ref('transactions');
    transactionsRef.once('value', (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const transactionsArray = Object.values(data);
        setTransactionsCount(transactionsArray.length);
        const totalAmount = transactionsArray.reduce((acc, cur) => acc + cur.amount, 0);
        setTotalExpenditure(totalAmount);
      }
    });
  }, []);

  return (
    <View style={styles.summaryContainer}>
      <View style={styles.transactionsContainer}>
        <Text style={styles.transactionsTitle}>Transactions</Text>
        <Text style={styles.transactionAmount}>{transactionsCount}</Text>
      </View>

      <View style={styles.balanceContainer}>
        <Text style={styles.balanceTitle}>Total Expenditure</Text>
        <Text style={styles.balanceAmount}>${totalExpenditure.toFixed(2)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  transactionsContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderRadius: 0,
    marginTop: 10,
    borderBottomWidth: 1, 
    borderBottomColor: '#ccc', 
  },
  transactionsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  transactionAmount: {
    fontSize: 16,
    color: '#2CA87B',
  },
  balanceContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  balanceTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  balanceAmount: {
    fontSize: 16,
    color: '#2CA87B',
  },
  summaryContainer: {
    margin: 10,
  },
});