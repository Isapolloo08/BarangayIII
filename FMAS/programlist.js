// app/programlist.jsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const initialPrograms = [
  { id: 1, name: 'Health and Sanitation Program', budget: 1000 },
  { id: 2, name: 'Environmental Protection Program', budget: 2000 },
  { id: 3, name: 'Education and Youth Development Program', budget: 3000 },
  { id: 4, name: 'Livelihood and Employment Program', budget: 4000 },
  { id: 5, name: 'Disaster Preparedness Program', budget: 5000 },
];

export default function ProgramList({ navigation }) {
  const [programs, setPrograms] = useState(initialPrograms);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const handleDelete = (id) => {
    Alert.alert('Delete Program', 'Are you sure you want to delete this program?', [
      { text: 'Cancel' },
      {
        text: 'Delete',
        onPress: () => setPrograms(programs.filter(program => program.id !== id)),
      },
    ]);
  };

  const addProgram = () => {
    navigation.navigate('programadd');
  };

  const viewDetail = (programId) => {
    console.log(`Navigating to ProgramDetail with id: ${programId}`);
    navigation.navigate('programdetail', { programId });
  };

  const editProgram = (programId) => {
    console.log(`Navigating to ProgramEdit with id: ${programId}`);
    navigation.navigate('programedit', { programId });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.yearFilter}>
        <Text style={styles.yearFilterLabel}>Select Year:</Text>
        <TextInput
          style={styles.yearInput}
          keyboardType="numeric"
          value={String(selectedYear)}
          onChangeText={(text) => setSelectedYear(Number(text))}
        />
      </View>
      {programs.map((program) => (
        <View key={program.id} style={styles.card}>
          <View style={styles.cardContent}>
            <Text style={styles.programName}>{program.name}</Text>
            <Text style={styles.programBudget}>Budget: ${program.budget}</Text>
          </View>
          <View style={styles.cardButtons}>
            <TouchableOpacity
              style={[styles.button, styles.buttonView]}
              onPress={() => viewDetail(program.id)}
            >
              <Icon name="document" size={20} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.buttonEdit]}
              onPress={() => editProgram(program.id)}
            >
              <Icon name="create" size={20} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.buttonDelete]}
              onPress={() => handleDelete(program.id)}
            >
              <Icon name="trash" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      ))}
      <TouchableOpacity style={styles.addButton} onPress={addProgram}>
        <Text style={styles.addButtonText}>Add Program</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  yearFilter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  yearFilterLabel: {
    fontSize: 16,
    color: '#710808',
  },
  yearInput: {
    borderWidth: 1,
    borderColor: '#710808',
    borderRadius: 5,
    padding: 8,
    width: 100,
    textAlign: 'center',
    fontSize: 16,
    color: '#710808',
  },
  card: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  cardContent: {
    marginBottom: 10,
  },
  programName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#710808',
  },
  programBudget: {
    fontSize: 16,
    color: '#710808',
  },
  cardButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonView: {
    backgroundColor: '#710808',
  },
  buttonEdit: {
    backgroundColor: '#710808',
  },
  buttonDelete: {
    backgroundColor: '#710808',
  },
  addButton: {
    marginTop: 20,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#710808',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});
