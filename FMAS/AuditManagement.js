import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import RNPickerSelect from 'react-native-picker-select';

// Get screen width
const { width } = Dimensions.get('window');

export default function Audit() {
  const [selectedEvent, setSelectedEvent] = useState('All');

  // Sample data for the audit trail table
  const auditData = [
    { id: '1', date: '2024-07-01', event: 'User Login', user: 'Barangay Captain', details: 'Successful login' },
    { id: '2', date: '2024-07-02', event: 'Added Record', user: 'Kagawad', details: 'Added new budget record' },
    { id: '3', date: '2024-07-05', event: 'Updated Record', user: 'Barangay Captain', details: 'Updated barangay clearance details' },
    { id: '4', date: '2024-07-10', event: 'Deleted Record', user: 'Secretary', details: 'Deleted a transaction record' },
    { id: '5', date: '2024-07-12', event: 'View Record', user: 'Treasurer', details: 'Viewed budget records' },
    { id: '6', date: '2024-07-14', event: 'Approved Request', user: 'Kagawad', details: 'Approved a clearance request' },
    { id: '7', date: '2024-07-15', event: 'Sent Notification', user: 'Barangay Captain', details: 'Sent notification to the Secretary' },
    { id: '8', date: '2024-07-16', event: 'Generated Report', user: 'Treasurer', details: 'Generated monthly budget report' },
    { id: '9', date: '2024-07-17', event: 'Changed Settings', user: 'Barangay Captain', details: 'Changed system settings for budget management' },
    { id: '10', date: '2024-07-18', event: 'User Logout', user: 'Secretary', details: 'Successful logout' },
  ];
  

  // Filter data based on selected event
  const filteredData = auditData.filter(item => selectedEvent === 'All' || item.event === selectedEvent);

  // Generate the event types for the filter
  const eventTypes = [
    { label: 'All', value: 'All' },
    { label: 'User Login', value: 'User Login' },
    { label: 'Added Record', value: 'Added Record' },
    { label: 'Updated Record', value: 'Updated Record' },
    { label: 'Deleted Record', value: 'Deleted Record' },
    { label: 'User Logout', value: 'User Logout' }
  ];

  return (
    <View style={styles.container}>
      <View style={styles.filterContainer}>
        <View style={styles.dropdownContainer}>
          <RNPickerSelect
            placeholder={{ label: 'Select Event', value: null }}
            items={eventTypes}
            onValueChange={setSelectedEvent}
            value={selectedEvent}
            style={pickerSelectStyles}
          />
        </View>
      </View>
      <ScrollView 
        horizontal 
        contentContainerStyle={styles.tableContainer} 
        showsHorizontalScrollIndicator={true}
      >
        <View style={styles.table}>
          <View style={styles.headerRow}>
            <Text style={styles.headerCell}>Date</Text>
            <Text style={styles.headerCell}>Event</Text>
            <Text style={styles.headerCell}>User</Text>
            <Text style={styles.headerCell}>Details</Text>
          </View>
          <FlatList
            data={filteredData}
            renderItem={({ item }) => (
              <View style={styles.row}>
                <Text style={styles.cell}>{item.date}</Text>
                <Text style={styles.cell}>{item.event}</Text>
                <Text style={styles.cell}>{item.user}</Text>
                <Text style={styles.cell}>{item.details}</Text>
              </View>
            )}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.floatingButton} onPress={() => console.log('Print action')}>
        <Icon name="print" size={24} color="#fff" />
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
  filterContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  dropdownContainer: {
    width: '100%',
    maxWidth: 340,  // Constrained container width
    marginBottom: 20,  // Space between the filter and the table
  },
  tableContainer: {
    width: '100%',
    flex: 1,  // Ensures the table container takes up the available space
    marginTop: 10,
    paddingBottom: 70,
  },
  table: {
    width: '100%',
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
    backgroundColor: '#710808',  // Updated to match the theme color
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
    backgroundColor: '#710808',  // Updated to match the theme color
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 6,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputAndroid: {
    backgroundColor: '#710808',  // Updated background color to match the theme
    color: '#fff',  // Text color
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#710808',  // Border color matching the background
    marginHorizontal: 5,
    flex: 1,
  },
  inputIOS: {
    backgroundColor: '#710808',  // Updated background color to match the theme
    color: '#fff',  // Text color
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#710808',  // Border color matching the background
    marginHorizontal: 5,
    flex: 1,
  },
});
