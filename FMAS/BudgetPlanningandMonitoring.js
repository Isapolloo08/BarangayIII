// app/budget.jsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import Icon from 'react-native-vector-icons/Ionicons';
import RNPickerSelect from 'react-native-picker-select';

const { width } = Dimensions.get('window');

export default function Budget({ navigation }) {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const data = [
    {
      name: 'Health and Sanitation',
      amount: 45,
      color: '#710808',
      legendFontColor: '#000',
      legendFontSize: 15,
    },
    {
      name: 'Environmental Protection',
      amount: 25,
      color: '#8A2D2D',
      legendFontColor: '#000',
      legendFontSize: 15,
    },
    {
      name: 'Education and Youth Development',
      amount: 15,
      color: '#B01E1E',
      legendFontColor: '#000',
      legendFontSize: 15,
    },
    {
      name: 'Livelihood and Employment',
      amount: 10,
      color: '#D93D3D',
      legendFontColor: '#000',
      legendFontSize: 15,
    },
    {
      name: 'Disaster Preparedness',
      amount: 5,
      color: '#D93D3D',
      legendFontColor: '#000',
      legendFontSize: 15,
    },
  ];

  const centerX = (width) / 1.6;

  const years = Array.from(new Array(20), (val, index) => {
    const year = new Date().getFullYear() - index;
    return { label: year.toString(), value: year };
  });

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.yearPickerContainer}>
        <Text style={styles.yearPickerLabel}>Select Year:</Text>
        <RNPickerSelect
          onValueChange={(value) => setSelectedYear(value)}
          items={years}
          value={selectedYear}
          style={pickerSelectStyles}
        />
      </View>
      <View style={styles.card}>
        <Text style={styles.title}>Barangay Budget Balance ({selectedYear})</Text>
        <View style={styles.pieChartContainer}>
          <PieChart
            data={data}
            width={width * 1}  // Adjusted width for better fit
            height={220}  // Adjusted height for better fit
            chartConfig={{
              backgroundColor: '#fff',
              backgroundGradientFrom: '#fff',
              backgroundGradientTo: '#fff',
              color: (opacity = 1) => `rgba(113, 8, 8, ${opacity})`,
              strokeWidth: 2,
              barPercentage: 0.5,
            }}
            accessor="amount"
            backgroundColor="transparent"
            center={[centerX - (width - 100) / 2, 0]} // Center the chart
            hasLegend={false}  // Hide the default legend
          />
        </View>
        <View style={styles.legendContainer}>
          {data.map((entry, index) => (
            <View key={index} style={styles.legendItem}>
              <View style={[styles.legendColor, { backgroundColor: entry.color }]} />
              <Text style={styles.legendText}>{entry.name}: {entry.amount}%</Text>
            </View>
          ))}
        </View>
        <Text style={styles.infoText}>- This pie chart shows the distribution of the barangay budget.</Text>
      </View>
      <TouchableOpacity style={styles.floatingButton} onPress={() => navigation.navigate('programlist')}>
        <Icon name="document" size={24} color="#fff" />
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  yearPickerContainer: {
    width: '100%',
    maxWidth: 340,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  yearPickerLabel: {
    fontSize: 16,
    color: '#710808',
  },
  card: {
    width: '100%',
    maxWidth: 340,
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
    alignItems: 'center',
    marginTop: 20, // Added margin for better spacing
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#710808',
    marginBottom: 10,
  },
  pieChartContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  legendContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  legendColor: {
    width: 20,
    height: 20,
    borderRadius: 5,
    marginRight: 10,
  },
  legendText: {
    fontSize: 14,
    color: '#710808',
  },
  infoText: {
    fontSize: 14,
    color: '#710808',
    textAlign: 'center',
    marginTop: 10,
  },
  floatingButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
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
  inputIOS: {
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#710808',
    borderRadius: 4,
    color: '#710808',
    paddingRight: 30,
  },
  inputAndroid: {
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#710808',
    borderRadius: 4,
    color: '#710808',
    paddingRight: 30,
  },
});
