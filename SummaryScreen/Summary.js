import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { transactions } from '../TransactionsScreen/TransactionsList'; // Assuming transactions are exported from TransactionsList

export default function Summary() {
    return (
      <View style = {styles.summaryContainer}>
        <View style={styles.transactionsContainer}>
            <Text style={styles.transactionsTitle}>Transactions</Text>
            <Text style={styles.transactionAmount}>6</Text>
        </View>

        <View style={styles.balanceContainer}>
            <Text style={styles.balanceTitle}>Total Expenditure</Text>
            <Text style={styles.balanceAmount}>$923.77</Text>
        </View>

        <View style = {styles.highSpendingContainer}>
          <Text style = {styles.highSpendingTitle}>High Spending</Text>
        </View>

        <View style={styles.lululemonContainer}>
            <Text style={styles.lululemonTitle}>Lululemon</Text>
            <Text style={styles.lululemonAmount}>$379.23</Text>
        </View>

        <View style = {styles.lowSpendingContainer}>
          <Text style = {styles.lowSpendingTitle}>Low Spending</Text>
        </View>

        <View style={styles.subwayContainer}>
            <Text style={styles.subwayTitle}>Subway</Text>
            <Text style={styles.subwayAmount}>$14.34</Text>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  // Total Transactions Styles
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
    // Balance Styles
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
  // High Spending Styles
  highSpendingContainer: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
},
  highSpendingTitle: {
    color: '#2CA87B',
    fontWeight: '900',
    borderBottomWidth: 2, 
    borderBottomColor: '#2CA87B', 
},
// Lululemon Styles
lululemonContainer: {
  backgroundColor: '#fff',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: 15,
},
lululemonTitle: {
  fontSize: 16,
  fontWeight: 'bold',
},
lululemonAmount: {
  fontSize: 16,
  color: '#2CA87B',
},
// Low Spending Styles
lowSpendingContainer: {
  marginTop: 15,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: 15,
},
lowSpendingTitle: {
  color: '#2CA87B',
  fontWeight: '900',
  borderBottomWidth: 2, 
  borderBottomColor: '#2CA87B', 
},
// Subway Styles
subwayContainer: {
backgroundColor: '#fff',
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
padding: 15,
},
subwayTitle: {
fontSize: 16,
fontWeight: 'bold',
},
subwayAmount: {
fontSize: 16,
color: '#2CA87B',
},
});
