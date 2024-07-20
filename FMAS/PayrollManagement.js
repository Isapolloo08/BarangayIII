import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import RNPickerSelect from 'react-native-picker-select';

// Get screen width
const { width } = Dimensions.get('window');

export default function Payroll() {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());  // 0-based month
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  // Sample data for the payroll table
  const payrollData = [
    { id: '1', name: 'John Doe', position: 'Kapitan', netPay: '$3000' },
    { id: '2', name: 'Jane Smith', position: 'Kagawad', netPay: '$2500' },
    { id: '3', name: 'Samuel Adams', position: 'Treasurer', netPay: '$2200' },
    { id: '4', name: 'Sarah Johnson', position: 'Secretary', netPay: '$2000' },
    { id: '5', name: 'Michael Brown', position: 'Kagawad', netPay: '$2300' },
    { id: '6', name: 'Emily Davis', position: 'Member', netPay: '$1800' },
    { id: '7', name: 'Chris Lee', position: 'Member', netPay: '$1900' },
    { id: '8', name: 'Katie Wilson', position: 'Member', netPay: '$1700' },
    { id: '9', name: 'Andrew Miller', position: 'Member', netPay: '$1600' },
    { id: '10', name: 'Sophia Brown', position: 'Member', netPay: '$2100' },
    { id: '11', name: 'Lucas Evans', position: 'Member', netPay: '$2500' },
    { id: '12', name: 'Olivia Taylor', position: 'Member', netPay: '$2600' },
    { id: '13', name: 'Ethan Anderson', position: 'Member', netPay: '$2700' },
    { id: '14', name: 'Isabella Martinez', position: 'Member', netPay: '$2800' },
    { id: '15', name: 'Liam Thomas', position: 'Member', netPay: '$2900' },
    { id: '16', name: 'Mia Wilson', position: 'Member', netPay: '$3000' },
    { id: '17', name: 'Noah Harris', position: 'Member', netPay: '$3100' },
    { id: '18', name: 'Ava White', position: 'Member', netPay: '$3200' },
    { id: '19', name: 'Jacob Martin', position: 'Member', netPay: '$3300' },
    { id: '20', name: 'Sophia Thompson', position: 'Member', netPay: '$3400' },
    { id: '21', name: 'Jackson Lee', position: 'Member', netPay: '$3500' },
    { id: '22', name: 'Ava Harris', position: 'Member', netPay: '$3600' },
    { id: '23', name: 'Liam Anderson', position: 'Member', netPay: '$3700' },
    { id: '24', name: 'Olivia King', position: 'Member', netPay: '$3800' },
    { id: '25', name: 'Mason Scott', position: 'Member', netPay: '$3900' },
    { id: '26', name: 'Emma Davis', position: 'Member', netPay: '$4000' },
    { id: '27', name: 'James Clark', position: 'Member', netPay: '$4100' },
    { id: '28', name: 'Avery Adams', position: 'Member', netPay: '$4200' },
    { id: '29', name: 'Ethan Lewis', position: 'Member', netPay: '$4300' },
    { id: '30', name: 'Isabella Walker', position: 'Member', netPay: '$4400' },
  ];

  // Generate the months and years for the filters
  const months = [
    { label: 'January', value: 0 }, { label: 'February', value: 1 }, { label: 'March', value: 2 },
    { label: 'April', value: 3 }, { label: 'May', value: 4 }, { label: 'June', value: 5 },
    { label: 'July', value: 6 }, { label: 'August', value: 7 }, { label: 'September', value: 8 },
    { label: 'October', value: 9 }, { label: 'November', value: 10 }, { label: 'December', value: 11 }
  ];

  const years = Array.from({ length: 10 }, (_, i) => new Date().getFullYear() - i).map(year => ({ label: year.toString(), value: year }));

  // Function to handle month and year filter changes
  const handleMonthChange = (value) => setSelectedMonth(value);
  const handleYearChange = (value) => setSelectedYear(value);

  return (
    <View style={styles.container}>
      <View style={styles.filterContainer}>
        <View style={styles.filters}>
          <View style={styles.dropdownContainer}>
            <RNPickerSelect
              placeholder={{ label: 'Select Month', value: null }}
              items={months}
              onValueChange={handleMonthChange}
              value={selectedMonth}
              style={pickerSelectStyles}
            />
          </View>
          <View style={styles.dropdownContainer}>
            <RNPickerSelect
              placeholder={{ label: 'Select Year', value: null }}
              items={years}
              onValueChange={handleYearChange}
              value={selectedYear}
              style={pickerSelectStyles}
            />
          </View>
        </View>
      </View>
      <ScrollView 
        horizontal 
        contentContainerStyle={styles.tableContainer} 
        showsHorizontalScrollIndicator={true}
      >
        <View style={styles.table}>
          <View style={styles.headerRow}>
            <Text style={styles.headerCell}>Name</Text>
            <Text style={styles.headerCell}>Position</Text>
            <Text style={styles.headerCell}>Net Pay</Text>
          </View>
          <FlatList
            data={payrollData}
            renderItem={({ item }) => (
              <View style={styles.row}>
                <Text style={styles.cell}>{item.name}</Text>
                <Text style={styles.cell}>{item.position}</Text>
                <Text style={styles.cell}>{item.netPay}</Text>
              </View>
            )}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.floatingButton}>
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
  filterLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#710808',
  },
  filters: {
    width: '100%',
    marginBottom: 20,  // Added margin above the table
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dropdownContainer: {
    flex: 1,
    marginHorizontal: 5,
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
