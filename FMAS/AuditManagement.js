import React from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// Get screen width
const { width } = Dimensions.get('window');

export default function Audit() {
  // Sample data for the audit trail table
  const auditData = [
    { id: '1', date: '2024-07-01', event: 'User Login', user: 'Kapitan', details: 'Successful login' },
    { id: '2', date: '2024-07-02', event: 'Added Record', user: 'Kagawad', details: 'Added new budget record' },
    { id: '3', date: '2024-07-05', event: 'Updated Record', user: 'Kapitan', details: 'Updated payroll details' },
    { id: '4', date: '2024-07-10', event: 'Deleted Record', user: 'Secretary', details: 'Deleted a transaction record' },
    { id: '5', date: '2024-07-15', event: 'User Logout', user: 'Treasurer', details: 'Successful logout' },
  ];

  // Render item for the FlatList
  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.date}</Text>
      <Text style={styles.cell}>{item.event}</Text>
      <Text style={styles.cell}>{item.user}</Text>
      <Text style={styles.cell}>{item.details}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Audit Trail</Text>
      <View style={styles.tableContainer}>
        <View style={styles.headerRow}>
          <Text style={styles.headerCell}>Date</Text>
          <Text style={styles.headerCell}>Event</Text>
          <Text style={styles.headerCell}>User</Text>
          <Text style={styles.headerCell}>Details</Text>
        </View>
        <FlatList
          data={auditData}
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
