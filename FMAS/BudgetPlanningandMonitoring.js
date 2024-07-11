// app/budget.jsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import Icon from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');

export default function Budget() {
  const data = [
    {
      name: 'Health and Sanitation',
      amount: 60,
      color: '#710808',
      legendFontColor: '#000',
      legendFontSize: 15,
    },
    {
      name: 'Environmental and Natural Sources',
      amount: 25,
      color: '#8A2D2D',
      legendFontColor: '#000',
      legendFontSize: 15,
    },
    {
      name: 'Education and Youth Development',
      amount: 10,
      color: '#B01E1E',
      legendFontColor: '#000',
      legendFontSize: 15,
    },
    {
      name: 'Available',
      amount: 5,
      color: '#D93D3D',
      legendFontColor: '#000',
      legendFontSize: 15,
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Barangay Budget Balance</Text>
        <PieChart
          data={data}
          width={width - -40}  // Adjusted width for better fit
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
          paddingRight="0" // Remove extra padding on the left
          center={[width * 0.3, 0]} // Center the chart
          hasLegend={false} // Hide the default legend
        />
        <View style={styles.legendContainer}>
          {data.map((entry, index) => (
            <View key={index} style={styles.legendItem}>
              <View style={[styles.legendColor, { backgroundColor: entry.color }]} />
              <Text style={styles.legendText}>{entry.name}: {entry.amount}%</Text>
            </View>
          ))}
        </View>
        <Text style={styles.infoText}>Cons:</Text>
        <Text style={styles.infoText}>- This pie chart shows the distribution of the barangay budget.</Text>
      </View>
      <TouchableOpacity style={styles.floatingButton}>
        <Icon name="add" size={24} color="#fff" />
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
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
  pieChart: {
    alignSelf: 'center',
    marginBottom: 10,  // Added margin for spacing
  },
  legendContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: 10,  // Added margin for spacing
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,  // Added margin for spacing
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
    marginTop: 10, // Added margin for spacing
  },
  floatingButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30, // Changed to make it a perfect circle
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
