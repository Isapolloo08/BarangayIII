import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import RNPickerSelect from 'react-native-picker-select';
import axios from 'axios';

// Get screen width
const { width } = Dimensions.get('window');

const API_URL = 'http://lesterintheclouds.com'; // Update this to your CPanel server URL

export default function Payroll() {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());  // 0-based month
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [payrollData, setPayrollData] = useState([]);

  useEffect(() => {
    fetchPayrollData();
  }, [selectedMonth, selectedYear]);

  const fetchPayrollData = async () => {
    try {
      const response = await axios.get(`${API_URL}/getPayrollData.php`, {
        params: {
          month: selectedMonth + 1, // Adjust for 1-based month in query
          year: selectedYear
        }
      });
      setPayrollData(response.data);
    } catch (error) {
      console.error('Error fetching payroll data:', error);
    }
  };

  const insertPayrollData = async (data) => {
    try {
      const response = await axios.post(`${API_URL}/insertPayrollData.php`, data);
      if (response.data.status === 'success') {
        console.log('Data inserted successfully');
        // Optionally, you can refresh the data or give feedback to the user here
      } else {
        console.error('Failed to insert data:', response.data.message);
      }
    } catch (error) {
      console.error('Error inserting data:', error);
    }
  };

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
            keyExtractor={item => item.id.toString()}
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
