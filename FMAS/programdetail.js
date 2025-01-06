// app/budgetsummary.jsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, ScrollView } from 'react-native';

export default function BudgetSummary({ route, navigation }) {
  // Sample program details, in a real app this would come from props or state
  const program = {
    name: 'Health and Sanitation Program',
    aipCode: 'AIP123',
    accountCode: 'ACC456',
    proposedAmount: '₱1000',
    budgetCategory: 'Development',
    expectedResult: 'This project aims to improve the health and its sanitation.',
    date: '2024-08-01',
    signatureUri: 'https://example.com/signature.pdf', // Placeholder link for signature
  };

  const handleViewSignature = () => {
    Linking.openURL(program.signatureUri).catch(err =>
      console.error("Couldn't load page", err)
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Budget Summary</Text>
      <View style={styles.card}>
        <Text style={styles.text}>Name of the Project:</Text>
        <Text style={styles.detail}>{program.name}</Text>
        <Text style={styles.text}>AIP Code:</Text>
        <Text style={styles.detail}>{program.aipCode}</Text>
        <Text style={styles.text}>Account Code:</Text>
        <Text style={styles.detail}>{program.accountCode}</Text>
        <Text style={styles.text}>Proposed Amount:</Text>
        <Text style={styles.detail}>{program.proposedAmount}</Text>
        <Text style={styles.text}>Budget Category:</Text>
        <Text style={styles.detail}>{program.budgetCategory}</Text>
        <Text style={styles.text}>Expected Result:</Text>
        <Text style={styles.detail}>{program.expectedResult}</Text>
        <Text style={styles.text}>Date:</Text>
        <Text style={styles.detail}>{program.date}</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.text}>Signature:</Text>
        <TouchableOpacity onPress={handleViewSignature} style={styles.signatureCard}>
          <Text style={styles.signatureText}>View Signature.pdf</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#710808',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 20,
    elevation: 2, // Adds shadow for Android
    shadowColor: '#000', // Adds shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  text: {
    fontSize: 16,
    color: '#710808',
    marginBottom: 5,
  },
  detail: {
    fontSize: 18,
    color: '#333',
    marginBottom: 15,
  },
  signatureCard: {
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 15,
    borderWidth: 1,
    borderColor: '#dcdcdc',
    alignItems: 'center',
  },
  signatureText: {
    fontSize: 16,
    color: '#1e90ff',
    textDecorationLine: 'underline',
  },
  homeButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#710808',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginTop: 20,
  },
});
