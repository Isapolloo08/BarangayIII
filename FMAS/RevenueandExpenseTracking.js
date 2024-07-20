import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import Icon from 'react-native-vector-icons/Ionicons';
import { Picker } from '@react-native-picker/picker';

// Get screen width
const { width } = Dimensions.get('window');

export default function Transact() {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [viewMode, setViewMode] = useState('month'); // State for date view mode
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);

  // Dummy data based on view mode
  const getChartData = () => {
    const data = {
      labels: ['Revenue', 'Expense'],  // Static labels
      datasets: [
        {
          data: viewMode === 'year'
            ? [300, 200]  // Example revenue and expense data for the selected year
            : [25 + selectedMonth, 30 + selectedMonth],  // Example data for the selected month
          color: (opacity = 1) => `rgba(255, 215, 0, ${opacity})`,  // Revenue color (Yellow)
        },
        {
          data: viewMode === 'year'
            ? [200, 150]  // Example expense data for the selected year
            : [20 + selectedMonth, 30 + selectedMonth],  // Example expense data for the selected month
          color: (opacity = 1) => `rgba(67, 184, 123, ${opacity})`,  // Expense color (Green)
        },
      ],
      legend: ['Revenue', 'Expense'],
    };

    return data;
  };

  return (
    <View style={styles.container}>
      <View style={styles.filtersContainer}>
        <Picker
          selectedValue={viewMode}
          style={styles.picker}
          onValueChange={(itemValue) => setViewMode(itemValue)}
        >
          <Picker.Item label="View by Month" value="month" />
          <Picker.Item label="View by Year" value="year" />
        </Picker>
        {viewMode === 'month' && (
          <Picker
            selectedValue={selectedMonth}
            style={styles.picker}
            onValueChange={(itemValue) => setSelectedMonth(itemValue)}
          >
            {Array.from({ length: 12 }, (_, i) => (
              <Picker.Item key={i + 1} label={getMonthLabels()[i]} value={i + 1} />
            ))}
          </Picker>
        )}
        {viewMode === 'year' && (
          <Picker
            selectedValue={selectedYear}
            style={styles.picker}
            onValueChange={(itemValue) => setSelectedYear(itemValue)}
          >
            {[...Array(10).keys()].map(i => {
              const year = new Date().getFullYear() - i;
              return <Picker.Item key={year} label={year.toString()} value={year} />;
            })}
          </Picker>
        )}
      </View>
      <View style={styles.card}>
        <Text style={styles.title}>
          {viewMode === 'year'
            ? `Revenue and Expenses for ${selectedYear}`
            : `Revenue and Expenses for ${getMonthLabels()[selectedMonth - 1]}`}
        </Text>
        <BarChart
          data={getChartData()}
          width={width * 0.9}  // 90% of screen width
          height={220}  // Height of the chart
          chartConfig={{
            backgroundColor: '#fff',
            backgroundGradientFrom: '#fff',
            backgroundGradientTo: '#fff',
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,  // Text color
            barPercentage: 0.5,
            decimalPlaces: 0,  // No decimal places in the data
          }}
          verticalLabelRotation={30}  // Rotate labels for better readability
          style={styles.barChart}
        />
        <Text style={styles.infoText}>
          - This chart shows the revenue and expenses for the selected {viewMode === 'year' ? selectedYear : getMonthLabels()[selectedMonth - 1]}.
        </Text>
      </View>
      <TouchableOpacity style={styles.floatingButton}>
        <Icon name="document" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  filtersContainer: {
    width: '100%',
    maxWidth: 350,  // Added maxWidth to constrain container width
    marginBottom: 20,  // Space between the filters and the card
    alignItems: 'center',
  },
  picker: {
    height: 50,
    width: '100%',
    backgroundColor: '#f0f0f0',
    borderColor: '#710808',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
  },
  card: {
    width: '100%',
    maxWidth: 350,  // Added maxWidth to constrain card width
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#f0f0f0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#710808',  // Green color
    marginBottom: 10,
  },
  barChart: {
    alignSelf: 'center',
    marginBottom: 20,  // Added margin for spacing
  },
  infoText: {
    fontSize: 14,
    color: '#710808',  // Green color
    textAlign: 'center',
    marginTop: 10,  // Added margin for spacing
  },
  floatingButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#710808',  // Green color
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 6,
  },
});

// Helper function to get month names
const getMonthLabels = () => {
  return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
};
