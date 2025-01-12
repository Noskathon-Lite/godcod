import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const mockData = {
  balance: 7783.00,
  expense: -1187.40,
  savings: 30,
  revenueLastWeek: 4000.00,
  foodLastWeek: -100.00,
  transactions: [
    { id: 1, name: 'Salary', date: '18-27 April 30', type: 'Monthly', amount: 4000.00 },
    { id: 2, name: 'Groceries', date: '17:00 April 24', type: 'Pantry', amount: -100.00 },
    { id: 3, name: 'Rent', date: '8:30 April 15', type: 'Rent', amount: -674.40 },
  ],
};

const Dashboard: React.FC = () => {
  const handleButtonPress = (period: string) => {
    console.log(`Selected period: ${period}`);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Hi, Welcome Back</Text>
        <Text style={styles.subtitle}>Good Morning</Text>
      </View>
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceText}>Total Balance</Text>
        <Text style={styles.balanceAmount}>${mockData.balance.toFixed(2)}</Text>
        <Text style={styles.expenseText}>Total Expense</Text>
        <Text style={styles.expenseAmount}>${mockData.expense.toFixed(2)}</Text>
      </View>
      {/* <View style={styles.savingsContainer}>
        <ProgressCircle
          style={{ height: 100 }}
          progress={mockData.savings / 100}
          progressColor={'#00D09E'}
        />
        <Text>{mockData.savings}% of Your Expenses, Looks Good.</Text>
      </View>
      <View style={styles.chartContainer}>
        <BarChart
          style={{ height: 200 }}
          data={[mockData.revenueLastWeek, mockData.foodLastWeek]}
          svg={{ fill: '#00D09E' }}
          contentInset={{ top: 30, bottom: 30 }}
          curve={shape.curveNatural}
        />
      </View> */}
      <View style={styles.buttonGroup}>
        {['Daily', 'Weekly', 'Monthly'].map((period) => (
          <TouchableOpacity key={period} style={styles.button} onPress={() => handleButtonPress(period)}>
            <Text style={styles.buttonText}>{period}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.transactionList}>
        {mockData.transactions.map((transaction) => (
          <View key={transaction.id} style={styles.transactionItem}>
            <Text>{transaction.name}</Text>
            <Text>{transaction.date}</Text>
            <Text>{transaction.type}</Text>
            <Text>${transaction.amount.toFixed(2)}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    padding: 20,
    backgroundColor: '#00D09E',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
  },
  balanceContainer: {
    padding: 20,
    backgroundColor: '#fff',
  },
  balanceText: {
    fontSize: 16,
    color: '#000',
  },
  balanceAmount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  expenseText: {
    fontSize: 16,
    color: '#000',
  },
  expenseAmount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ff0000',
  },
  savingsContainer: {
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  chartContainer: {
    padding: 20,
    backgroundColor: '#fff',
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
  },
  button: {
    padding: 10,
    backgroundColor: '#00D09E',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  transactionList: {
    padding: 20,
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default Dashboard;
