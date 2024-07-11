// Payroll Management
import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// Get screen width
const { width } = Dimensions.get('window');

export default function Payroll() {
  // Sample data for the payroll table
  const payrollData = [
    { id: '1', name: 'John Doe', position: 'Kapitan', netPay: '$3000' },
    { id: '2', name: 'Jane Smith', position: 'Kagawad',  netPay: '$2500' },
    { id: '3', name: 'Samuel Adams', position: 'Treasurer',  netPay: '$2200' },
    { id: '4', name: 'Sarah Johnson', position: 'Secretary',  netPay: '$2000' },
    { id: '5', name: 'Michael Brown', position: 'Kagawad',  netPay: '$2300' },
  ];

  // Render item for the FlatList
  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.name}</Text>
      <Text style={styles.cell}>{item.position}</Text>
      <Text style={styles.cell}>{item.netPay}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payroll Report</Text>
      <View style={styles.tableContainer}>
        <View style={styles.headerRow}>
          <Text style={styles.headerCell}>Name</Text>
          <Text style={styles.headerCell}>Position</Text>
          <Text style={styles.headerCell}>Net Pay</Text>
        </View>
        <FlatList
          data={payrollData}
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
    paddingVertical: 10,
    paddingHorizontal: 10,
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
    paddingHorizontal: 10,
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
