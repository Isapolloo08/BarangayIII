// app/addprogram.jsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

export default function ProgramAdd({ navigation }) {
  const [name, setName] = useState('');
  const [budget, setBudget] = useState('');

  const handleAdd = () => {
    // Add add logic here
    console.log('Add Program:', { name, budget });
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Add New Program</Text>
        <TextInput
          style={styles.input}
          placeholder="Program Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Budget"
          keyboardType="numeric"
          value={budget}
          onChangeText={setBudget}
        />
        <Button title="Add Program" onPress={handleAdd} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 20,
    alignItems: 'center',
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
    marginBottom: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#710808',
    marginBottom: 10,
  },
  input: {
    width: '100%',
    marginBottom: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: '#710808',
    borderRadius: 5,
    fontSize: 16,
    color: '#710808',
  },
});
