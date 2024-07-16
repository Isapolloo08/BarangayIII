import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const ViewReportScreen = ({ route }) => {
  const { reportData } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.reportBox}>
        <Text style={styles.title}>Report Details</Text>
        {/* Display report data here */}
        <Text>Report ID: {reportData.id}</Text>
        <Text>Report Name: {reportData.name}</Text>
        {/* Add other report fields as needed */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  reportBox: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default ViewReportScreen;
