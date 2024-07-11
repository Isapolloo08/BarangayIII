import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// Get screen width
const { width } = Dimensions.get('window');

export default function Financial() {
  // Sample data for the financial table
  const financialData = [
    { id: '1', date: '2024-07-01', description: 'Barangay Fiesta', income: '$0', expense: '$500', balance: '$-500' },
    { id: '2', date: '2024-07-10', description: 'Donation from Local Business', income: '$2000', expense: '$0', balance: '$1500' },
    { id: '3', date: '2024-07-15', description: 'Community Cleanup Supplies', income: '$0', expense: '$300', balance: '$1200' },
    { id: '4', date: '2024-07-20', description: 'Monthly Contribution', income: '$1000', expense: '$0', balance: '$2200' },
    { id: '5', date: '2024-07-30', description: 'Barangay Office Renovation', income: '$0', expense: '$700', balance: '$1500' },
  ];

  // Render item for the FlatList
  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.date}</Text>
      <Text style={styles.cell}>{item.description}</Text>
      <Text style={styles.cell}>{item.income}</Text>
      <Text style={styles.cell}>{item.expense}</Text>
      <Text style={styles.cell}>{item.balance}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Financial Records</Text>
      <View style={styles.tableContainer}>
        <View style={styles.headerRow}>
          <Text style={styles.headerCell}>Date</Text>
          <Text style={styles.headerCell}>Description</Text>
          <Text style={styles.headerCell}>Income</Text>
          <Text style={styles.headerCell}>Expense</Text>
          <Text style={styles.headerCell}>Balance</Text>
        </View>
        <FlatList
          data={financialData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
      <TouchableOpacity style={styles.floatingButton}>
        <Icon name="add" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#710808',
    marginBottom: 20,
    textAlign: 'center',
  },
  tableContainer: {
    width: '100%',
    maxWidth: 340,  // Added maxWidth to constrain card width
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  headerRow: {
    flexDirection: 'row',
    backgroundColor: '#710808',
    paddingVertical: 12,
    paddingHorizontal: 5,
  },
  headerCell: {
    flex: 1,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  cell: {
    flex: 1,
    textAlign: 'center',
  },
  floatingButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 10,
    backgroundColor: '#710808',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 6,
  },
});
