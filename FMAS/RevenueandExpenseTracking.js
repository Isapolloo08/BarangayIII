// Revenue and Expense Tracking
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import Icon from 'react-native-vector-icons/Ionicons';

// Get screen width
const { width } = Dimensions.get('window');

export default function Transact() {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'], // Sample months
    datasets: [
      {
        data: [30, 45, 28, 80, 99, 43, 50], // Sample revenue values
        color: (opacity = 1) => `rgba(113, 8, 8, ${opacity})`, // Bar color
      },
      {
        data: [20, 25, 30, 60, 70, 50, 45], // Sample expense values
        color: (opacity = 1) => `rgba(138, 45, 45, ${opacity})`, // Expense color
      },
    ],
    legend: ['Revenue', 'Expense'],
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Revenue and Expenses</Text>
        <BarChart
          data={data}
          width={width * 0.8}  // 90% of screen width
          height={220}  // Height of the chart
          chartConfig={{
            backgroundColor: '#fff',
            backgroundGradientFrom: '#fff',
            backgroundGradientTo: '#fff',
            color: (opacity = 1) => `rgba(113, 8, 8, ${opacity})`,
            barPercentage: 0.5,
            decimalPlaces: 0,  // No decimal places in the data
          }}
          verticalLabelRotation={30}  // Rotate labels for better readability
          style={styles.barChart}
        />
        <Text style={styles.infoText}>- This chart shows the monthly revenue and expenses for tracking barangay transactions.</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  card: {
    width: '100%',
    maxWidth: 340,  // Added maxWidth to constrain card width
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#710808',
    marginBottom: 10,
  },
  barChart: {
    alignSelf: 'center',
    marginBottom: 20,  // Added margin for spacing
  },
  infoText: {
    fontSize: 14,
    color: '#710808',
    textAlign: 'center',
    marginTop: 10, // Added margin for spacing
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
