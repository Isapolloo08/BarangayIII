import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import RNPickerSelect from 'react-native-picker-select';

// Get screen width
const { width } = Dimensions.get('window');

export default function FinancialManagement() {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Sample data for the barangay financial management
  const financialData = [
    { id: '1', date: '2024-07-01', category: 'Income', description: 'Donation from Local Business', amount: '$1000' },
    { id: '2', date: '2024-07-15', category: 'Expense', description: 'Community Clean-up Supplies', amount: '$200' },
    { id: '3', date: '2024-06-30', category: 'Income', description: 'Barangay Fiesta Fund', amount: '$1500' },
    { id: '4', date: '2024-06-25', category: 'Expense', description: 'Electricity Bill Payment', amount: '$300' },
    { id: '5', date: '2024-06-10', category: 'Income', description: 'Monthly Membership Fees', amount: '$500' },
    { id: '6', date: '2024-05-20', category: 'Expense', description: 'Office Supplies Purchase', amount: '$150' },
    { id: '7', date: '2024-05-05', category: 'Income', description: 'Donation from Community Event', amount: '$800' },
    { id: '8', date: '2024-04-15', category: 'Expense', description: 'Maintenance of Barangay Hall', amount: '$400' },
    { id: '9', date: '2024-03-30', category: 'Income', description: 'Barangay Fundraising Activity', amount: '$1200' },
    { id: '10', date: '2024-03-10', category: 'Expense', description: 'Renovation of Playground', amount: '$500' },
  ];

  // Categories for the filters
  const categories = [
    { label: 'All', value: 'All' },
    { label: 'Income', value: 'Income' },
    { label: 'Expense', value: 'Expense' },
  ];

  const years = Array.from({ length: 10 }, (_, i) => new Date().getFullYear() - i).map(year => ({ label: year.toString(), value: year }));

  // Function to handle year and category filter changes
  const handleYearChange = (value) => setSelectedYear(value);
  const handleCategoryChange = (value) => setSelectedCategory(value);

  // Filter data based on selected year and category
  const filteredData = financialData.filter(item => {
    return (selectedCategory === 'All' || item.category === selectedCategory) &&
           new Date(item.date).getFullYear() === selectedYear;
  });

  return (
    <View style={styles.container}>
      <View style={styles.filterContainer}>
        <View style={styles.filters}>
          <View style={styles.dropdownContainer}>
            <RNPickerSelect
              placeholder={{ label: 'Select Year', value: null }}
              items={years}
              onValueChange={handleYearChange}
              value={selectedYear}
              style={pickerSelectStyles}
            />
          </View>
          <View style={styles.dropdownContainer}>
            <RNPickerSelect
              placeholder={{ label: 'Select Category', value: null }}
              items={categories}
              onValueChange={handleCategoryChange}
              value={selectedCategory}
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
            <Text style={styles.headerCell}>Date</Text>
            <Text style={styles.headerCell}>Category</Text>
            <Text style={styles.headerCell}>Description</Text>
            <Text style={styles.headerCell}>Amount</Text>
          </View>
          <FlatList
            data={filteredData}
            renderItem={({ item }) => (
              <View style={styles.row}>
                <Text style={styles.cell}>{item.date}</Text>
                <Text style={styles.cell}>{item.category}</Text>
                <Text style={styles.cell}>{item.description}</Text>
                <Text style={styles.cell}>{item.amount}</Text>
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
  filters: {
    width: '100%',
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dropdownContainer: {
    flex: 1,
    marginHorizontal: 5,
  },
  tableContainer: {
    width: '100%',
    flex: 1,
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
    backgroundColor: '#710808',
    color: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#710808',
    marginHorizontal: 5,
    flex: 1,
  },
  inputIOS: {
    backgroundColor: '#710808',
    color: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#710808',
    marginHorizontal: 5,
    flex: 1,
  },
});
