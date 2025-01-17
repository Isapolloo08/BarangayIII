// app/programlist.jsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Modal, Dimensions, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import RNPickerSelect from 'react-native-picker-select';

// Get screen width
const { width } = Dimensions.get('window');

// Sample programs data
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
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [programToDelete, setProgramToDelete] = useState(null);

  const years = Array.from(new Array(20), (val, index) => {
    const year = new Date().getFullYear() - index;
    return { label: year.toString(), value: year };
  });

  const handleDelete = (id) => {
    setProgramToDelete(id);
    setIsModalVisible(true);
  };

  const confirmDelete = () => {
    setPrograms(programs.filter(program => program.id !== programToDelete));
    setIsModalVisible(false);
  };

  const cancelDelete = () => {
    setIsModalVisible(false);
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
      <View style={styles.yearPickerContainer}>
        <Text style={styles.yearPickerLabel}>Select Year:</Text>
        <RNPickerSelect
          onValueChange={(value) => setSelectedYear(value)}
          items={years}
          value={selectedYear}
          style={pickerSelectStyles}
        />
      </View>
      {programs.map((program) => (
        <View key={program.id} style={styles.card}>
          <View style={styles.cardContent}>
            <Text style={styles.programName}>{program.name}</Text>
            <Text style={styles.programBudget}>Budget: ₱{program.budget}</Text>
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
        <Text style={styles.addButtonText}>Add Budget</Text>
      </TouchableOpacity>

      {/* Custom Delete Confirmation Modal */}
      <Modal
        transparent={true}
        visible={isModalVisible}
        animationType="slide"
        onRequestClose={cancelDelete}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Delete Program</Text>
            <Text style={styles.modalMessage}>Are you sure you want to delete this program?</Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity style={styles.modalButtonCancel} onPress={cancelDelete}>
                <Text style={styles.modalButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalButtonConfirm} onPress={confirmDelete}>
                <Text style={styles.modalButtonText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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
    marginTop: 20,
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)', // Semi-transparent background
  },
  modalContent: {
    width: '80%',
    maxWidth: 340,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#710808',
    marginBottom: 10,
  },
  modalMessage: {
    fontSize: 16,
    color: '#710808',
    textAlign: 'center',
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  modalButtonCancel: {
    flex: 1,
    marginHorizontal: 5,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#ccc', // Light gray background for cancel button
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalButtonConfirm: {
    flex: 1,
    marginHorizontal: 5,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#710808', // Main color for confirm button
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
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
    width: '80%', // Adjust width to be more responsive
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
    width: '80%', // Adjust width to be more responsive
  },
});
